const activityName = document.querySelector(".activityTitle");
const activityDescription = document.querySelector(".descriptionText");

//Get id from URL sent by acitivities.html
const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const id = urlId;
const apiUrl = "http://localhost:8080/activities/" + id
getIt();

function out(any){
    console.log(any);
}

async function getIt(){
   out("inside getIt()")
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

        activityName.textContent = data.name;
        activityDescription.textContent = data.description;
}