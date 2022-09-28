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
    //name and type should not be empty
    if (name === "" || type === "") {
        alert("Please fill out all fields");
        return;
    }
    if (name.length > 50) {
        alert("Name is too long");
        return;
    }
    //make sure name and type is correct english characters and grammar
    if (!name.match(/^[a-zA-Z0-9 ]+$/)) {
        alert("Name is not valid");
        return;
    }
    if (!type.match(/^[a-zA-Z0-9 ]+$/)) {
        alert("Type is not valid");
        return;
    }







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
        //send the message about success or failure of the request
        .then((data) => {
            if (data.status === 400  || data.status === 402 || data.status=== null) {
                //make a sound for success or failure

                alert("Activity not added");

            }else   {

                alert("Activity successfully added");
            }

        }
        )
}
);




