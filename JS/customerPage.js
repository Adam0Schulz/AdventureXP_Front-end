/*
//Get id from URL sent by acitivities.html
const paramId = new URLSearchParams(window.location.search);
const urlId = paramId.get("id");
const id = urlId;
//get the keyword from url
const paramKeyword = new URLSearchParams(window.location.search);
const urlKeyword = paramKeyword.get("keyword");
const keyword = urlKeyword;*/





import { getAll, search } from "./Service/API_calls.js";

const customersCont = document.querySelector('#customers_cont')
const searchBtn = document.querySelector('#searchBtn')
let searchInput = document.querySelector('#searchInput')

getAll("customers").then(r => {

    r.forEach(item => {
        let a = document.createElement("a")
        let div = document.createElement("div")
        div.className = "customer"
        //make it in table
        div.innerHTML = "<table><tr><td>ID: </td><td>" + item.id + "</td></tr><tr><td>Name: </td><td>" + item.firstname + "</td></tr><tr><td>lastname: </td><td>" + item.lastname + "</td></tr><tr><td>Phone: </td><td>" + item.phone + "</td></tr><tr><td>Email: </td><td>" + item.email + "</td></tr></table>"

        a.appendChild(div)
        customersCont.appendChild(a)
    })
})
//search and show the result
search(searchInput, "customers").then(r => {
    searchBtn.addEventListener("click", () => {
        customersCont.innerHTML = ""
        r.forEach(item => {
            let a = document.createElement("a")
            let div = document.createElement("div")
            div.className = "customer"
            //make it in table
            div.innerHTML = "<table><tr><td>ID: </td><td>" + item.id + "</td></tr><tr><td>Name: </td><td>" + item.firstname + "</td></tr><tr><td>lastname: </td><td>" + item.lastname + "</td></tr><tr><td>Phone: </td><td>" + item.phone + "</td></tr><tr><td>Email: </td><td>" + item.email + "</td></tr></table>"

            a.appendChild(div)
            customersCont.appendChild(a)
        })
    })
}
)
























