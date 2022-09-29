let response = []
const activitiesCont = document.querySelector('#activities_cont')

async function fetchAll() {
    return await fetch("http://localhost:9090/activities")
        .then(response => response.json())
}

fetchAll().then(r => {
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








