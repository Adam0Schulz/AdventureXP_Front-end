
import { getById } from "./Service/API_calls.js";

const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const participants = document.getElementById("participants")
const activity = document.getElementById("activity")
const date = document.getElementById("date")
const start = document.getElementById("start")
const end = document.getElementById("end")
const bookingId = document.getElementById("bookingid")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const phone = document.getElementById("phone")
const email = document.getElementById("email")



getById(id,"bookings").then(item => {
        console.log(item)

        bookingId.textContent = "#" +item.id;
        participants.textContent = item.numberOfParticipants;
        activity.textContent = item.activity.name;
        date.textContent = item.date;
        start.textContent = item.startTime;
        end.textContent = item.endTime;
        firstname.textContent = item.customer.firstname
        lastname.textContent = item.customer.lastname

        email.textContent = item.customer.email
        phone.textContent = item.customer.phone







    }
)