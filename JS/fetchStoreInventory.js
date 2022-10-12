const url = "http://localhost:8080/candy/";


const addCandyBtn = document.getElementById("addCandyBtn");
const table = document.getElementById("table")


addCandyBtn.addEventListener("click", loadAddPage)

let itemClicked = 0;



function loadAddPage() {
    window.location.href = "addCandy.html";
}

doFetchItems()

function shopItems(evt, items) {
    // Declare all variables
    let i, tabContent;

    // Get all elements with class="tabcontent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }


    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(items).style.display = "block";
    evt.currentTarget.className += " active";
}

async function doFetchItems() {
    let item = await fetchItems();
    item.forEach(createTable)
}

function fetchItems() {
    return fetch(url).then(response => response.json()); //returns the result of json()
}

function createTable(item) {

    let rowCount = table.rows.length
    let row = table.insertRow(rowCount)

    let cell1 = row.insertCell(0)
    cell1.innerHTML = item.name

    let cell2 = row.insertCell(1)
    cell2.innerHTML = item.price

    let cell3 = row.insertCell(2)
    let btn = document.createElement("button")
    btn.id = "editButton"
    btn.innerText = "edit"
    btn.addEventListener("click", e => {
        itemClicked = item;
        $('#cont').load("editCandy.html")

    })
    cell3.append(btn)
}