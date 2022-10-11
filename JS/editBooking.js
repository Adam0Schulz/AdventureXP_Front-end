import {getAll} from "./Service/API_calls.js";

const activitySelectEdit =document.getElementById("activity")
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

getAll("activities").then(data => {
    console.log(data)
    data.forEach(activity => {
        const option = document.createElement("option")
        option.setAttribute("value", activity.id + "")
        option.innerText = activity.name
        activitySelectEdit.append(option)
    })
})

getEdit()

async function getEdit()
{
    const response = await fetch(url).then(response => response.json());
    firstName.value = response.customer.firstname
    lastName.value = response.customer.lastname
    email.value = response.customer.email
    phone.value = response.customer.phone
    participants.value = response.numberOfParticipants
    date.value = response.date
    startTime.value = response.startTime
    endTime.value = response.endTime
    activitySelectEdit.value = response.activity.name
    console.log(activitySelectEdit)
}






