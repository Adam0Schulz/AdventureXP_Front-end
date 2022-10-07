const apiUrl = "http://localhost8080/candy";

getIt();
    async function getIt(){
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    show(data);
}
// Calling that async function


// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
          <th>Name</th>
          <th>Price</th>
         </tr>`;

    // Loop to access all rows
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.price}</td> 
         
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("table").innerHTML = tab;
}

