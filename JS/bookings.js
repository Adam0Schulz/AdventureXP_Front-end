
const data = [
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
const date = new Date()
document.getElementById('date').innerText = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()

const openingHour = "8:30"
const closingHour = "15:30"

const numOfHours = () => {
    let StartHoursAndMin = openingHour.split(":")
    StartHoursAndMin = StartHoursAndMin.map(string => parseInt(string))


}

console.log(numOfHours())


data.forEach(activity => {
    let activityRow = document.createElement('div')
    activityRow.className = "activity_row"
    let activityColumn = document.createElement('div')
    activityColumn.className = "activity_column"
    let activityHeading = document.createElement('h3')

    activityHeading.innerText = activity.name

    activityRow.appendChild(activityColumn).append(activityHeading)

    let rowTimeline = document.createElement('div')
    rowTimeline.className = "row-timeline"

    activity.Bookings.forEach(booking => {
        let bookingBlock = document.createElement('div')
        bookingBlock.className = "booking_block"
        bookingBlock.innerText = booking.id + "/" + booking.customer.firstName + " " + booking.customer.lastName

        rowTimeline.append(bookingBlock)
    })

    activityRow.append(rowTimeline)
    $('.calendar_body').append(activityRow)


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