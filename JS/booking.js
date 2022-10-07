
// onst activityName = document.querySelector(".activityTitle");
// const activityDescription = document.querySelector(".descriptionText");
//
// //Get id from URL sent by acitivities.html
// const param = new URLSearchParams(window.location.search);
// const urlId = param.get("id");
// const id = urlId;
// const apiUrl = "http://localhost:8080/activities/" + id
//
// async function getIt(){
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data);
//
//         activityName.textContent = data.name;
//         activityDescription.textContent = data.description;
// }
// getIt();
// const apiUrl = "http://localhost:8080/bookings/" + id
//
import { getById } from "./Service/API_calls.js";
// const bookingsCont= document.querySelector('#bookings_cont')

const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const participants = document.getElementById("participants")
const activity = document.getElementById("activity")
const date = document.getElementById("date")
const start = document.getElementById("start")
const end = document.getElementById("end")
const bookingId = document.getElementById("bookingid")


getById(id,"bookings").then(item => {
        console.log(item)


        bookingId.textContent = "#" +item.id;
        participants.textContent = item.numberOfParticipants;
        activity.textContent = item.activity.name;
        date.textContent = item.date;
        start.textContent = item.startTime;
        end.textContent = item.endTime;







    }
)