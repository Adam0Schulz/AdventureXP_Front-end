import {getActivityBookingsByDate, getAll} from './Service/API_calls.js'

// Defining all global variables
const param = new URLSearchParams(window.location.search);
const urlDate = param.get("date");
const bookingBlockBackgroundColors = ['blue', 'green']
const calendarBody = document.querySelector('#calendar_body')
let timelineSegments = document.querySelector('#timeline_segments')
const calendarDate = document.querySelector("#calendar_date_input")
const forwardBtn = document.querySelector('#nextDayBtn')
const backwardBtn = document.querySelector('#previousDayBtn')

const numOfHours = 12
const openingHour = 10

let date = new Date()




// Takes care of creating timeline segments
function createTimeline() {
    const timeline = document.createElement('div')
    timeline.id = 'timeline_segments'
    calendarBody.append(timeline)
    timelineSegments = document.querySelector('#timeline_segments')
    let hour = openingHour
    for (let i = 0; i <= numOfHours * 2; i++) {
        const timeSegment = document.createElement('div')
        const wholeHour = i % 2 === 0
        const attribute = hour + ':' + (wholeHour ? '00' : '30')
        timeSegment.setAttribute('data-before',attribute)
        timelineSegments.append(timeSegment)
        hour = wholeHour ? hour : hour + 1
    }
    timelineSegments.style.height = '0px'
}
createTimeline()



// Date stuff

//
if (urlDate == null) {
calendarDate.value =  getDate(date)
} else{
    calendarDate.value = urlDate
    changeDate(urlDate)
}


function getDate(date) {
    let dateDay = date.getDate().toString().length > 1 ? date.getDate() : '0' + date.getDate()
    let dateMonth = (date.getMonth() + 1).toString().length > 1 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1) //+1 is there because the months are zero based
    let dateYear = date.getFullYear()
    return dateYear + '-' + dateMonth + '-' + dateDay

}






// Changes the calendar content on date change
function changeDate(dateValue) {
    dateValue = dateValue.split('-', 3)

    date.setDate(parseInt(dateValue[2]))
    date.setMonth(dateValue[1] - 1)
    date.setFullYear(parseInt(dateValue[0]))

    calendarBody.innerHTML = ''
    createTimeline()
    populateCalendar(date)
}

forwardBtn.addEventListener('click', (e) => {
    date.setDate(date.getDate() + 1)
    calendarDate.value = getDate(date)
    changeDate(calendarDate.value)
})

backwardBtn.addEventListener('click', (e) => {
    date.setDate(date.getDate() - 1)
    calendarDate.value = getDate(date)
    changeDate(calendarDate.value)
})






calendarDate.addEventListener("change", e => changeDate(e.target.value))


// Populates the calendar with activity rows
function populateCalendar(date) {

    getAll('activities').then(activityData => {

        activityData.forEach(activity => {

            let activityRow = document.createElement('div')
            activityRow.className = "calendar_activity_row"
            let activityColumn = document.createElement('div')
            activityColumn.className = "calendar_activity_column"
            let activityHeading = document.createElement('h3')

            activityHeading.innerText = activity.name

            activityRow.appendChild(activityColumn).append(activityHeading)

            let rowTimeline = document.createElement('div')
            rowTimeline.className = "calendar_row-timeline"
            rowTimeline.style.minWidth = timelineSegments.offsetWidth + 'px'
            rowTimeline.setAttribute('width', timelineSegments.offsetWidth + '')
            console.log(activity.name)

            getActivityBookingsByDate(activity.id, getDate(date)).then(bookingData => {
                bookingData.forEach(booking => {


                    let a = document.createElement('a')
                    a.href = "booking.html?id="+booking.id
                    let bookingBlock = document.createElement('div')
                    bookingBlock.className = "calendar_booking_block"


                    const oneTimeSegment = (100 / ((numOfHours * 2)))

                    const startHour = booking.startTime.split(':', 3)[0]
                    const startMinute = booking.startTime.split( ':', 3)[1]
                    const wholeStartHour = startMinute === "00"

                    const endHour = booking.endTime.split(':', 3)[0]
                    const endMinute = booking.startTime.split(':', 3)[1]
                    const wholeEndHour = startMinute === "00"

                    bookingBlock.style.left = (((oneTimeSegment * 2) * (startHour - openingHour)) + (wholeStartHour ? 0 : oneTimeSegment)) + '%'
                    bookingBlock.style.right = 100 - (((oneTimeSegment * 2) * (endHour - openingHour)) + (wholeEndHour ? 0 : oneTimeSegment)) + '%'

                    let bookingHeading = document.createElement('h4')
                    bookingHeading.innerText = "#" + booking.id + " - " + booking.customer.firstname + " " + booking.customer.lastname

                    let bookingBody = document.createElement('p')
                    bookingBody.innerHTML= booking.startTime + " - " + booking.endTime + "<br/>" + "No. of Part.: " +  booking.numberOfParticipants

                    bookingBlock.append(bookingHeading)
                    bookingBlock.append(bookingBody)


                    a.append(bookingBlock)
                    rowTimeline.append(a)
                })
            })


            activityRow.append(rowTimeline)
            calendarBody.append(activityRow)
            console.log(activityRow.offsetHeight)
            timelineSegments.style.height = (timelineSegments.offsetHeight + activityRow.offsetHeight) + 'px'

        })
    })
}


populateCalendar(date)






