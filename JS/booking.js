const bookingsCont= document.querySelector('#bookings_cont')

const param = new URLSearchParams(window.location.search);
const id = param.get("id");



import { getById } from "./Service/API_calls.js";

getById(id,"bookings").then(item => {
        console.log(item)
        let a = document.createElement("a")
        let div = document.createElement("div")
        div.className = "booking"
        //make it in table





        div.innerHTML = "#"+item.id+
            "<table>" +
            "<tr><td>No. of participants </td><td><br>" +
            "<br>"+item.numberOfParticipants +
            "</td><td>start </td><td><br>"
            + "<br>"+item.startTime +
            "</td></tr><tr><td>Activity </td><td><br>"
            + "<br>"+item.activity.name +
            "</td><td>End </td><td><br>"
            + "<br>"+item.endTime +
            "</td></tr><tr><td>Date </td><td><br>"
            + "<br>"+item.date +
            "</td></tr>" +
            "</table>"

        a.appendChild(div)
        bookingsCont.appendChild(a)

}
)