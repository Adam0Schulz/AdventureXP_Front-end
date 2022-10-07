import {getAll, getActivityBookings } from './Service/API_calls.js'


const data01 = [
    {
        "name": "Go-kart",
        "Bookings": [
            {
                "id": 12,
                "date": new Date(),
                "startTime": "11:00",
                "endTime": "12:00",
                "numberOfParticipants": 5,
                "customer": {
                    "firstName": "Adam",
                    "lastName": "Schulz",
                    "email": "adam@schulz.sk",
                    "phone": 451236989
                }
            },
            {
                "id": 15,
                "date": new Date(),
                "startTime": "13:00",
                "endTime": "14:00",
                "numberOfParticipants": 4,
                "customer": {
                    "firstName": "Adam",
                    "lastName": "Schulz",
                    "email": "adam@schulz.sk",
                    "phone": 451236989
                }
            }
        ]
    },{
        "name": "Sumo Wrestling",
        "Bookings": [
            {
                "id": 24,
                "date": new Date(),
                "startTime": "10:00",
                "endTime": "11:00",
                "numberOfParticipants": 5,
                "customer": {
                    "firstName": "Adam",
                    "lastName": "Schulz",
                    "email": "adam@schulz.sk",
                    "phone": 451236989
                }
            },
            {
                "id": 5,
                "date": new Date(),
                "startTime": "12:00",
                "endTime": "14:00",
                "numberOfParticipants": 4,
                "customer": {
                    "firstName": "Adam",
                    "lastName": "Schulz",
                    "email": "adam@schulz.sk",
                    "phone": 451236989
                }
            }
        ]
    },
]

const bookingBlockBackgroundColors = ['blue', 'green']

const date = new Date()
document.getElementById('date').innerText = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()

const numOfHours = 8

const timelineSegments = document.getElementById('timeline_segments')

let hour = 7
for (let i = 0; i <= numOfHours * 2; i++) {
    const timeSegment = document.createElement('div')
    const wholeHour = i % 2 === 0
    const attribute = hour + ':' + (wholeHour ? '00' : '30')
    timeSegment.setAttribute('data-before',attribute)
    timelineSegments.append(timeSegment)
    hour = wholeHour ? hour : hour + 1
}

//getAll('activities').then(data => console.log(data))
//getActivityBookings(1).then(data => console.log(data))

getAll('activities').then(activityData => {

    activityData.forEach(activity => {
        let activityRow = document.createElement('div')
        activityRow.className = "activity_row"
        let activityColumn = document.createElement('div')
        activityColumn.className = "activity_column"
        let activityHeading = document.createElement('h3')

        activityHeading.innerText = activity.name

        activityRow.appendChild(activityColumn).append(activityHeading)

        let rowTimeline = document.createElement('div')
        rowTimeline.className = "row-timeline"
        rowTimeline.style.minWidth = timelineSegments.offsetWidth + 'px'
        rowTimeline.setAttribute('width', timelineSegments.offsetWidth + '')
        getActivityBookings(activity.id).then(bookingData => {
            bookingData.forEach(booking => {
                let bookingBlock = document.createElement('div')
                bookingBlock.className = "booking_block"


                const oneTimeSegment = (100 / (numOfHours * 2))

                const startHour = booking.startTime.split(':', 3)[0]
                const startMinute = booking.startTime.split( ':', 3)[1]
                const wholeStartHour = startMinute === "00"

                const endHour = booking.endTime.split(':', 3)[0]
                const endMinute = booking.startTime.split(':', 3)[1]
                const wholeEndHour = startMinute === "00"

                bookingBlock.style.left = ((oneTimeSegment * 2) * (startHour - 7)) + (wholeStartHour ? 0 : oneTimeSegment) + '%'
                bookingBlock.style.right = 100 - (((oneTimeSegment * 2) * (endHour - 7)) + (wholeEndHour ? 0 : oneTimeSegment)) + '%'

                let bookingHeading = document.createElement('h4')
                bookingHeading.innerText = "#" + booking.id + " - " + booking.customer.firstname + " " + booking.customer.lastname

                let bookingBody = document.createElement('p')
                bookingBody.innerHTML= booking.startTime + " - " + booking.endTime + "<br />" + "No. of Part.: " +  booking.numberOfParticipants

                bookingBlock.append(bookingHeading)
                bookingBlock.append(bookingBody)

                bookingBlock.style.backgroundColor = bookingBlockBackgroundColors[Math.floor(Math.random() * bookingBlockBackgroundColors.length)]

                rowTimeline.append(bookingBlock)
            })
        })

        activityRow.append(rowTimeline)
        $('.calendar_body').append(activityRow)


    })
})




function fetchAllBookings() {
    return fetch('http://localhost:8080/bookings')
        .then(response => response.json())
}

fetchAllBookings().then(r => {
    r.forEach((item) =>{
        /*const calendarRow = document.createElement('div')
        const activityColumn = document.createElement('div')
        activityColumn.innerText = item.activity.name
        const bookingColumn = document.createElement('div')
        calendarRow.appendChild(activityColumn)
        calendarRow.appendChild(bookingColumn)
        $('#calendar_body').append(calendarRow)*/
    })
})