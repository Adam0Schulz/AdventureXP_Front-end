const activityName1 = document.getElementById("deleteActivityName")
const btnConfirm = document.getElementById("confirm")
const btnCancel = document.getElementById("cancel")


const parameter = new URLSearchParams(window.location.search);
const urlID = parameter.get("id")
const id1 = urlID;
const url = "http://localhost:8080/activities/" + id1

getMe()

async function getMe()
{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    activityName1.textContent = data.name
}

async function deleteActivity()
{
    await fetch(url,{
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

function cancel()
{
    window.location.replace("activities.html")
}

btnConfirm.addEventListener('click', deleteActivity)
btnCancel.addEventListener('click', cancel)

