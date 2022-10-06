/*
//Get id from URL sent by acitivities.html
const paramId = new URLSearchParams(window.location.search);
const urlId = paramId.get("id");
const id = urlId;
//get the keyword from url
const paramKeyword = new URLSearchParams(window.location.search);
const urlKeyword = paramKeyword.get("keyword");
const keyword = urlKeyword;*/





import { getAll, create  } from "./Service/API_calls.js";

const customersCont = document.querySelector('#customers_cont')

getAll("customers").then(r => {
    console.log("hello1")
    r.forEach(item => {
        let a = document.createElement("a")
        let div = document.createElement("div")
        div.className = "customer"
        //make it in table
        div.innerHTML = "<table><tr><td>ID: </td><td>" + item.id + "</td></tr><tr><td>Name: </td><td>" + item.firstname + "</td></tr><tr><td>lastname: </td><td>" + item.lastname + "</td></tr><tr><td>Phone: </td><td>" + item.phone + "</td></tr><tr><td>Email: </td><td>" + item.email + "</td></tr></table>"




        a.appendChild(div)
        customersCont.appendChild(a)
    })

    //creat new customer
    const createCustomer = document.querySelector('#addBtn')
    createCustomer.addEventListener('click', () => {
        let newCustomer = {
            firstname: document.querySelector('#firstname').value,
            lastname: document.querySelector('#lastname').value,
            phone: document.querySelector('#phone').value,
            email: document.querySelector('#email').value,
        }
        create(newCustomer, "customers").then(r => {
            console.log(r)
            window.location.href = "customers.html"
        })
    }
    )
})

















