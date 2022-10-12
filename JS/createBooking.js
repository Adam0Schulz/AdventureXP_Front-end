import {getAll, create, createWithParam} from "./Service/API_calls.js";

const saveBooking = document.getElementById("saveBooking")
const cancelBooking = document.getElementById("cancelBooking")
const activitySelect = document.getElementById("activity")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("e-mail")
const phone = document.getElementById("phoneE")
const date = document.getElementById("date")
const startTime = document.getElementById("startTime")
const endTime = document.getElementById("endTime")
const participants = document.getElementById("participants")


let newCustomer = {
    "firstname": firstName.value,
    "lastname": lastName.value,
    "email": email.value,
    "phone" : phone.value

}
let newBooking =
    {
        "date": date.value,
        "startTime": startTime.value,
        "endTime": endTime.value,
        "numberOfParticipants": participants.value,
        "customer": newCustomer.value
    }
let activityId

//dropdown list fetch data from the activity table
getAll("activities").then(data => {
    console.log(data)
    data.forEach(activity => {
        const option = document.createElement("option")
        option.setAttribute("value", activity.id + "")
        option.innerText = activity.name
        activitySelect.append(option)
    })
}).then(() => {
const activityPageId = new URLSearchParams(window.location.search).get('id')
    if(activityPageId != null) {
        for(let i = 0; i <= activitySelect.options.length; i++) {
            let option =  activitySelect.options[i]
            if (option.value == activityPageId) {
                option.setAttribute('selected', 'selected')
            } else {
                option.setAttribute('disabled', 'disabled')
            }
        }
    }
})



saveBooking.addEventListener('click', () =>
{
    activityId = activitySelect.value
    newCustomer.firstname = firstName.value
    newCustomer.lastname = lastName.value
    newCustomer.phone = phone.value
    newCustomer.email = email.value
    newBooking.date = date.value
    newBooking.startTime = startTime.value
    newBooking.endTime = endTime.value
    newBooking.numberOfParticipants = participants.value
    create(newCustomer, "customers").then(response => newBooking.customer = response).then(() =>
        createWithParam(newBooking, "bookings", ["activityId", activityId]).then(() => window.location.href = "bookings.html")
    )
})

//cancelBooking button and go back to the booking page
cancelBooking.addEventListener("click", ()=> {
    window.location.href = window.location.href;
})

