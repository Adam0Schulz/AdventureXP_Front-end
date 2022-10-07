//add save button with event listener
const saveButton = document.getElementById("saveButton");
const url= "http://localhost:8080/activities/"+id;
const nameTag = document.getElementById("title");
const typeTag = document.getElementById("description");
let imageName = ""

console.log(url)

getMe()

async function getMe()
{
    const response = await fetch(url).then(response => response.json());
    console.log(response);
    nameTag.value = response.name
    typeTag.value = response.description
    imageName = response.imageName
}

async function editActivity(activity) {
    fetch(url,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(activity)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}
saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(nameTag.value != "" && typeTag.value != "") {
        editActivity({
            "id": id,
            "name": nameTag.value,
            "description": typeTag.value,
            "imageName": imageName
        }

        )
        window.location.href = "activityDescription.html?id=" + id;
    } else {
        alert("You cannot save an empty activity")
    }

})






const cancelButtonEdit = document.getElementById("cancelButton");
cancelButtonEdit.addEventListener("click", () => {
        window.location.href = "activityDescription.html?id=" + id;

});



