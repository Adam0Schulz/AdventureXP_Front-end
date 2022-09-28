//add save button with event listener
const saveButton = document.getElementById(".saveButton");
const url= "http://localhost:9090/activity";
const name = document.getElementById(".title").value;
const type = document.getElementById(".description").value;


//fetch url
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //



    })
    .catch(error => console.log(error))
async function getAllData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const table = data.data;


        table.forEach();

        console.log(table);

    }
    catch (error) {
        console.log(error)
    }
}

const DataInfo=getAllData();
console.log(DataInfo)

