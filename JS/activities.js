
import { getAll  } from "./Service/API_calls.js";

const activitiesCont = document.querySelector('#activities_cont')

getAll("activities").then(r => {
    console.log(r)
    r.forEach(item => {
        let a = document.createElement("a")
        a.href = "activityDescription.html?id=" + item.id
        let div = document.createElement("div")
        div.className = "activity"
        div.innerText = item.name
        div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.7), rgba(44, 174, 186, 0.7)), url(../img/activity-images/" + item.imageName + ")"
        //div.style.backgroundImage = "linear-gradient(45deg, rgba(2, 166, 253, 0.73), rgba(2, 166, 253, 0.73)), url(../img/activity-images/" + item.imageName + ")"

        a.appendChild(div)
        activitiesCont.appendChild(a)
    })
})









