//find all url in the activities
const url = 'http://localhost:8080'
const urlAddActivity= url+"/activities";
const urlReadAllActivity = url + "/activities";
const urlDeleteActivity = url+"/activities/" + id1
const urlEditActivity = url+"/activities/" + id1
const urlReadByIdActivity = url + "/activities/" + id1;


//find all customers
const urlReadAllCustomers= url +"/customers";
const urlFindByIdCustomers=url+"/customers/" + id;
const urlCreatCustomer=url+"/customers/";
const urlUpdateByIdCustomers=url+"/customers/" + id;
const urlDeleteByIdCustomers=url+"/customers/" + id;
const urlFindByKeywordCustomers=url+"/customers/search" + keyword;

//find all bookings
const urlReadAllBookings= url +"/bookings";
const urlFindByIdBookings=url+"/bookings/" + id2;
const urlCreatBooking=url+"/bookings/";
const urlUpdateByIdBookings=url+"/bookings/" + id2;
const urlDeleteByIdBookings=url+"/bookings/" + id2;
const urlFindByKeywordBookings=url+"/bookings/search" + keyword;

//find all instructors
const urlReadAllInstructors= url +"/instructors";
const urlFindByIdInstructors=url+"/instructors/" + id3;
const urlCreatInstructor=url+"/instructors/";
const urlUpdateByIdInstructors=url+"/instructors/" + id3;
const urlDeleteByIdInstructors=url+"/instructors/" + id3;
const urlFindByKeywordInstructors=url+"/instructors/search" + keyword;



//Get id from URL sent by acitivities.html
const paramActivity = new URLSearchParams(window.location.search);
const urlIdActivity = param.get("id");
const idActivity = urlId;
const apiUrlActivity = "http://localhost:8080/activities/" + id


//get the keyword from url customers
const paramKeyword = new URLSearchParams(window.location.search);
const urlKeyword = paramKeyword.get("keyword");
const keyword = urlKeyword;
//get the id from customers
const paramId = new URLSearchParams(window.location.search);
const urlId = paramId.get("id");
const id = urlId;


//fetch and read all urlReadAll
export async function fetchAllCustomers(){
    const response = await fetch(urlReadAll);
    const data = await response.json();
    console.log(data);
    return data;
}
//fetch and read it
fetchAllCustomers().then(r => console.log(r));
//fetch and read CUSTOMERS BY ID
export async function fetchCustomerById(){
    const response = await fetch(urlFindById);
    const data = await response.json();
    console.log(data);
    return data;
}
//fetch and read it
fetchCustomerById().then(r => console.log(r));
//fetch and creat a new customer
export async function createCustomer(){
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
export async function updateCustomer(){
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
//fetch and delete a customer
export async function deleteCustomer(){
    const response = await fetch(urlDeletById, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: "delete customer",
            email: "delete customer",
            phone: "delete customer",
            lastname: "delete customer"
        })
    });
    const data = await response.json();
    console.log(data);
    return data;
}
//Activity ////////////////////////////////////////////////////////////////////

getIt();

function out(any){
    console.log(any);
}

async function getIt(){
    out("inside getIt()")
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    activityName.textContent = data.name;
    activityDescription.textContent = data.description;
}
export async function getAllActivities() {
    return await fetch(url + '/activities')
        .then(response => response.json())
}

export async function getActivityById(id) {
    return await fetch (url + '/activity/' + id )
        .then(response => response.json())
}

export async function deleteActivityById(id){
    return await fetch(url + '/activity/' + id,{
        method:"DELETE"
    })
        .then(response => {
            if(response.status==200){
                return  "succesfully deleted item"
            }
            return response.status
        })
        .catch(err => console.log(err))
}
export async function update(id){
    return await fetch(url + '/activity/' + id,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "update activity",
            description: "update activity",
            price: "update activity",
            duration: "update activity"
        })
    })
        .then(response => response.json())
        .catch(err => console.log(err))

}

export async function createActivity() {
    return await fetch(url + '/activity/',{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "new activity",
            description: "new activity",
            price: "new activity",
            duration: "new activity"
        })
    })
        .then(response => response.json())
        .catch(err => console.log(err))

}




/* and so on ... */