//add save button with event listener
const saveButton = document.getElementById("saveButton");
const url= "http://localhost:9090/activity";
const nameTag = document.getElementById("title");
const typeTag = document.getElementById("description");

let name = ""
let type = ""
nameTag.addEventListener("change", (event) => {
    name = event.target.value;
});
typeTag.addEventListener("change", (event) => {
    type = event.target.value;
});

//fetch url and save as post request
saveButton.addEventListener("click", () => {
    fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            description: type,
        }),
    })
        .then((response) => response.json())

}
);


