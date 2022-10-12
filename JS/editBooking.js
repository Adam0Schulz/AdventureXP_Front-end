import {getAll, update} from "./Service/API_calls.js";

const editSave =document.getElementById("saveBookingEdit")
const cancelBookingEdit = document.getElementById("cancelBookingEdit")
const activitySelectEdit = document.getElementById("activity")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("e-mail")
const phone = document.getElementById("phoneE")
const date = document.getElementById("date")
const startTime = document.getElementById("startTime")
const endTime = document.getElementById("endTime")
const participants = document.getElementById("participants")

const parameterEdit = new URLSearchParams(window.location.search);
const urlEdit = parameterEdit.get("id")
const idEdit = urlEdit;
const url = "http://localhost:8080/bookings/" + idEdit

let newBooking = {}

getAll("activities").then(data => {
    console.log(data)
    data.forEach(activity => {
        const option = document.createElement("option")
        option.setAttribute("value", activity.id + "")
        option.innerText = activity.name
        activitySelectEdit.append(option)
    })
}).then(() => getEdit())


function selectOption(selectElem, thingToCompareTo, value){
    for(let i = 0; i < selectElem.options.length; i++){

        let compareThing = value ? selectElem.options[i].value : selectElem.options[i].innerText + ":00"

        if(compareThing == thingToCompareTo) {
            selectElem.options[i].setAttribute("selected", "selected")
        }
    }
}

async function getEdit()
{
    const response = await fetch(url).then(response => response.json());
    newBooking = response
    firstName.value = response.customer.firstname
    lastName.value = response.customer.lastname
    email.value = response.customer.email
    phone.value = response.customer.phone
    participants.value = response.numberOfParticipants
    date.value = response.date
    selectOption(startTime, response.startTime, false)
    selectOption(endTime, response.endTime, false)
    selectOption(activitySelectEdit, response.activity.id, true)
}



editSave.addEventListener('click', () =>
{

    newBooking.customer.firstname = firstName.value
    newBooking.customer.lastname = lastName.value
    newBooking.customer.phone = phone.value
    newBooking.customer.email = email.value
    newBooking.date = date.value
    newBooking.startTime = startTime.value
    newBooking.endTime = endTime.value
    newBooking.numberOfParticipants = participants.value
    console.log("this is newBooking", newBooking)
    update(newBooking.customer.id, newBooking.customer, "customers").then(() =>
        update(idEdit, newBooking , "bookings").then(window.location.href = "booking.html?id=" + idEdit)
    )
})

cancelBookingEdit.addEventListener("click", ()=> {
    window.location.href = "booking.html?id=" + idEdit;
})






