const activityName1 = document.getElementById("deleteActivityName")
const btnConfirm = document.getElementById("confirm")


const parameter = new URLSearchParams(window.location.search);
const urlID = parameter.get("id")
const id1 = urlID - 1;

getMe()

async function getMe()
{
    const response = await fetch("http://localhost:8080/activities");
    const data = await response.json();
    console.log(data);
    activityName1.textContent = data[id1].name
}

console.log(id1)

async function deleteActivity()
{
    await fetch("http://localhost:8080/activity/" + id1,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
        .then(data => {
            if (data.status === 200) {
                window.location.replace("activities.html")
            }
        })
        .catch(err => console.log(err))

}

btnConfirm.addEventListener('click', deleteActivity)

