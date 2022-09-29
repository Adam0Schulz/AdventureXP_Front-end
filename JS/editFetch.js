//add save button with event listener
const saveButton = document.getElementById("saveButton");
const url= "http://localhost:8080/edits/"+id;
const nameTag = document.getElementById("title");
const typeTag = document.getElementById("description");

getMe()

async function getMe()
{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    nameTag.textContent = data.name
    typeTag.textContent = data.description
}

async function editActivity()
{
    await fetch(url,{
        method: 'PUL',
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
btnConfirm.addEventListener('click', editActivity)








