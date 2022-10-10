const url = "http://localhost:8080/candy";

const addCandyBtn = document.getElementById("addCandyBtn");
const table = document.getElementById("table")

addCandyBtn.addEventListener("click", loadAddPage)

function loadAddPage() {
    window.location.href = "addCandy.html";
}

doFetchItems()

function adventStore(evt, storeProduct) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(storeProduct).style.display = "block";
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
}