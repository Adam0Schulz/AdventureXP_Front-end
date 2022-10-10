const url = "http://localhost:8080/candy";

const addCandyBtn = document.getElementById("addCandyBtn");
const table = document.getElementById("table")

addCandyBtn.addEventListener("click", loadAddPage)

function loadAddPage() {
    window.location.href = "addCandy.html";
}

doFetchItems()

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