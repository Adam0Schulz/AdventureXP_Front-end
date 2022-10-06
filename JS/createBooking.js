import { getAll, create  } from "./Service/API_calls.js";

const saveBooking = document.getElementById("saveBooking")
const cancelBooking = document.getElementById("cancelBooking")
const activitySelect =document.getElementById("activity")

getAll("activities").then(data => {
    console.log(data)
    data.forEach(activity => {
        const option = document.createElement("option")
        option.setAttribute("value", activity.id + "")
        option.innerText = activity.name

        activitySelect.append(option)
    })
})