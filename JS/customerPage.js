/*
//Get id from URL sent by acitivities.html
const paramId = new URLSearchParams(window.location.search);
const urlId = paramId.get("id");
const id = urlId;
//get the keyword from url
const paramKeyword = new URLSearchParams(window.location.search);
const urlKeyword = paramKeyword.get("keyword");
const keyword = urlKeyword;*/





import { getAll  } from "./Service/API_calls.js";

const customersCont = document.querySelector('#customers_cont')

getAll("customers").then(r => {
    console.log("hello1")
    r.forEach(item => {
        let a = document.createElement("a")
        let div = document.createElement("div")
        div.className = "customer"
        div.innerText = item.firstname + " " + item.lastname


        a.appendChild(div)
        customersCont.appendChild(a)
    })
})

















