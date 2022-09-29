//add save button with event listener
const saveButton = document.getElementById("editSaveButton");
const url= "http://localhost:8080/edits/"+id;
const nameTag = document.getElementById("editTitle");
const typeTag = document.getElementById("editDescription");

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




const cancelButtonEdit = document.getElementById("editCancelButton");
cancelButtonEdit.addEventListener("click", () => {
    //activity cancle or not
    //if yes, go back to the main page
    //if no, stay on the page
    if (confirm("Do you want to cancel?")) {
        window.location.href = "activities.html";

    }
});



