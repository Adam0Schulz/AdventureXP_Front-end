
import { getAll  } from "./Service/API_calls.js";

const activitiesCont = document.querySelector('#activities_cont')

getAll("activities").then(r => {
    console.log("hello1")
    r.forEach(item => {
        let a = document.createElement("a")
        a.href = "activityDescription.html?id=" + item.id
        let div = document.createElement("div")
        div.className = "activity"
        div.innerText = item.name

        a.appendChild(div)
        activitiesCont.appendChild(a)
    })
})









