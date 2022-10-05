const bookingsCont= document.querySelector('#bookings_cont')
import { getAll } from "./Service/API_calls.js";
getAll("bookings").then(r => {
    r.forEach(item => {
        r.forEach(item => {
            let a = document.createElement("a")
            let div = document.createElement("div")
            div.className = "booking"
            //make it in table
            div.innerHTML = "<table><tr><td>Number_of_participant: </td><td>" + item.numberOfParticipants + "</td></tr><tr><td>Activity: </td><td>" + item.activity.name+ "</td></tr><tr><td>Date: </td><td>" + item.date + "</td></tr><tr><td>Start: </td><td>" + item.startTime + "</td></tr><tr><td>End: </td><td>" + item.endTime + "</td></tr></table>"

            a.appendChild(div)
            bookingsCont.appendChild(a)
        })
    })
}
)