
//Get id from URL sent by acitivities.html
const paramId = new URLSearchParams(window.location.search);
const urlId = paramId.get("id");
const id = urlId;
//get the keyword from url
const paramKeyword = new URLSearchParams(window.location.search);
const urlKeyword = paramKeyword.get("keyword");
const keyword = urlKeyword;
//all url in the customers
//find all customers
const urlReadAll="http://localhost:8080/customers";
//find customer by id
const urlFindById="http://localhost:8080/customers/" + id;
//creat customer
const urlCreatCustomer="http://localhost:8080/customers/";

const urlUpdateById="http://localhost:8080/customers/" + id;

const urlDeletById="http://localhost:8080/customers/" + id;
//find customer by keyword
const urlFindByKeyword="http://localhost:8080/customers/search" + keyword;

//fetch and read all urlReadAll
async function fetchAllCustomers(){
    const response = await fetch(urlReadAll);
    const data = await response.json();
    console.log(data);
    return data;
}
//fetch and read it
fetchAllCustomers().then(r => console.log(r));
//fetch and read CUSTOMERS BY ID
async function fetchCustomerById(){
    const response = await fetch(urlFindById);
    const data = await response.json();
    console.log(data);
    return data;
}
//fetch and read it
fetchCustomerById().then(r => console.log(r));
//fetch and creat a new customer
async function createCustomer(){
    const response = await fetch(urlCreatCustomer, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: "new customer",
            email: "new customer",
            phone: "new customer",
            lastname: "new customer"
        })
    });
    const data = await response.json();
    console.log(data);
    return data;
}
//fetch and read it
createCustomer().then(r => console.log(r));
//fetch and update a customer
async function updateCustomer(){
    const response = await fetch(urlUpdateById, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: "update customer",
            email: "update customer",
            phone: "update customer",
            lastname: "update customer"
        })
    });
    const data = await response.json();
    console.log(data);
    return data;
}
//fetch and read it
updateCustomer().then(r => console.log(r));










