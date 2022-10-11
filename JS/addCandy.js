//add save button with event listener
const saveButton = document.getElementById("saveButton");
const url= "http://localhost:8080/candy";
const nameTag = document.getElementById("name");
const typeTag = document.getElementById("price");

console.log(nameTag)


let name = ""
let price = ""
nameTag.addEventListener("change", (event) => {
    name = event.target.value;
});
typeTag.addEventListener("change", (event) => {
    price = event.target.value;
});

//make a cancle buttton cancle and go back to the main page
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
    //activity cancle or not
    //if yes, go back to the main page
    //if no, stay on the page
    if (confirm("Do you want to cancel?")) {
        window.location.href = "store.html";

    }
});


//fetch url and save as post request
saveButton.addEventListener("click", () => {
        //name and type should not be empty
        if (name === "" || price === "" ) {
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

        //make shore is not save type with only numbers

        if (!price.match(/^[0-9]+$/)) {
            alert("Number is not valid");
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
                price: price,
            }),
        })
            .then((response) => response.json())
            //send the message about success or failure of the request
            .then((data) => {
                    if (data.status === 400  || data.status === 402 || data.status=== null) {
                        //make a sound for success or failure

                        alert("Candy not added");

                    }else   {


                        alert("Candy successfully added");
                        window.location.href = "store.html";
                    }

                }
            )
    }
);