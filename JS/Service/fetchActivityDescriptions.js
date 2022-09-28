const apiUrl = "http://localhost:8080/activities"
const activityName = document.querySelector(".activityTitle");
const activityDescription = document.querySelector(".descriptionText");

const id = 1;

getIt();


function out(any){
    console.log(any)
}

async function getIt(){

   out("inside getIt()")
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log(data)
    activityName.textContent = data[id].name
    activityDescription.textContent = data[id].description

}