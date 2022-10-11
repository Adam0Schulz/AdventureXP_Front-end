const editName = document.getElementById("name")
const editPrice = document.getElementById("price")
const cancelButton = document.getElementById("cancelButton")
const saveButton = document.getElementById("saveButton");
const urlEdit= "http://localhost:8080/candy/" + itemClicked.id;
editName.innerText = itemClicked.name
editPrice.innerText = itemClicked.price

console.log(editName)
console.log(editPrice)
console.log("Url"  + urlEdit)

editName.addEventListener("change", (event) => {
    name = event.target.value;
});
editPrice.addEventListener("change", (event) => {
    price = event.target.value;
});


cancelButton.addEventListener("click", () => {
    if (confirm("Do you want to cancel?")) {
        window.location.href = "store.html";
    }
})


async function editCandy(candy) {
    fetch(urlEdit,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(candy)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}
saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(editName.value != "" && editPrice.value != "") {
        editCandy({
                "id": itemClicked.id,
                "name": editName.value,
                "price": editPrice.value,
            }

        )
        window.location.href = "store.html";
    } else {
        alert("You cannot save an empty candy")
    }
})