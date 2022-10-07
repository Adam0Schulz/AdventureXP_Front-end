const url = "http://localhost:8080/candy";
const out = (any) => console.log(any)

const table = document.getElementById("table")
console.log(table)
doFetchItems()

async function doFetchItems() {
    out("items")
    let item = await fetchItems();
    out(item); //students is an array
    item.forEach(createTable)
}

function fetchItems() {
    out("inside fetch Items")
    return fetch(url).then(response => response.json()); //returns the result of json()
}

function createTable(item) {

    let rowCount = table.rows.length
    out("rowcount=" + rowCount)
    let row = table.insertRow(rowCount)

    let cell1 = row.insertCell(0)
    cell1.innerHTML = item.name

    let cell2 = row.insertCell(1)
    cell2.innerHTML = item.price

}



