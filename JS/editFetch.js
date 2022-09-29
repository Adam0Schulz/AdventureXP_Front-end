//add save button with event listener
const saveButton = document.getElementById("saveButton");
const url= "http://localhost:8080/edits/{userId}";
const nameTag = document.getElementById("title");
const typeTag = document.getElementById("description");

const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const id = urlId - 1;

getIt();

function out(any){
    console.log(any);
}

async function getIt(){
    out("inside getIt()")
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    nameTag.textContent = data[id].name;
    typeTag.textContent = data[id].description;
}









