import {getAll, createWithParam} from "./Service/API_calls.js";

const saveBooking = document.getElementById("saveBooking")
const cancelBooking = document.getElementById("cancelBooking")
const activitySelect =document.getElementById("activity")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("e-mail")
const phone = document.getElementById("phone")
const date = document.getElementById("date")
const startTime = document.getElementById("startTime")
const endTime = document.getElementById("endTime")
const participants = document.getElementById("participants")


let newCustomer = {
    "firstname": firstName.value,
    "lastname": lastName.value,
    "email": email.value,
    "phone" : phone.value

}
let newBooking =
    {
        "date": date.value,
        "startTime": startTime.value,
        "endTime": endTime.value,
        "numberOfParticipants": participants.value,
        "customer": newCustomer.value
    }
let activityId

//dropdown list fetch data from the activity table
getAll("activities").then(data => {
    console.log(data)
    data.forEach(activity => {
        const option = document.createElement("option")
        option.setAttribute("value", activity.id + "")
        option.innerText = activity.name
        activitySelect.append(option)
    })
}).then(() => {
    const activityPageId = new URLSearchParams(window.location.search).get('id')
    if(activityPageId != null) {
        for(let i = 0; i <= activitySelect.options.length; i++) {
            let option =  activitySelect.options[i]
            if (option.value === activityPageId) {
                option.setAttribute('selected', 'selected')
            } else {
                option.setAttribute('disabled', 'disabled')
            }
        }
    }
})





saveBooking.addEventListener('submit', (event) =>
{

    activityId = activitySelect.value
    newCustomer.firstname = firstName.value
    newCustomer.lastname = lastName.value
    newCustomer.phone = phone.value
    newCustomer.email = email.value
    newBooking.date = date.value
    newBooking.startTime = startTime.value
    newBooking.endTime = endTime.value
    newBooking.numberOfParticipants = participants.value
    newBooking.customer = newCustomer
    createWithParam("bookings", newBooking,["activityId", activityId])

    .then(data => {
            if (data.status === 400  || data.status === 402 || data.status=== null) {
                //make a sound for success or failure

                alert("Booking not added");

            }else   {


                alert("Booking successfully added");
                window.location.href = "activities.html";
            }


    }
    )
    event.preventDefault()


})







    /*createWithParam(newBooking, "bookings", ["activityId", activityId])
        .then(window.location.href = "bookings.html")
        .catch(error => console.log(error))
    event.preventDefault()*/





//cancelBooking button and go back to the booking page
cancelBooking.addEventListener("click", ()=> {
    window.location.href = "bookings.html";
})



//firstname validation and does not allow to save if not valid
firstName.addEventListener("input", () => {
    if (firstName.value.length < 2 || firstName.value.length > 20 || !isNaN(firstName.value) ) {
        firstName.setCustomValidity("First name must be at least 2 characters")

    } else {
        firstName.setCustomValidity("")
    }

}
)
//lastname validation
lastName.addEventListener("input", () => {
    if (lastName.value.length < 2 || lastName.value.length > 20 || !isNaN(lastName.value) ) {
        lastName.setCustomValidity("Last name must be at least 2 characters")
    } else {
        lastName.setCustomValidity("")
    }
}
)
//email validation and have @ i it
email.addEventListener("input", () => {
    if (email.value.length < 2 || !email.value.includes("@") || !email.value.includes(".")) {
        email.setCustomValidity("Please enter a valid email address")
    } else {
        email.setCustomValidity("")
    }
}
)
//phone validation
phone.addEventListener("input", () => {
    if (phone.value.length < 2 || phone.value.length > 20 || isNaN(phone.value) ) {
        phone.setCustomValidity("Phone must be at least 2 characters")
    } else {
        phone.setCustomValidity("")
    }
}
)
//no of participants validation and number not alphabets
participants.addEventListener("input", () => {
    if (participants.value.length < 1 || isNaN(participants.value) ) {
        participants.setCustomValidity("Participants must be at least 1")
    } else {
        participants.setCustomValidity("")
    }
}
)
//start time validation should not be same as end time
startTime.addEventListener("input", () => {
    if (startTime.value === endTime.value ) {
        startTime.setCustomValidity("Start time must be different from end time")
    } else {
        startTime.setCustomValidity("")
    }
}
)
//


















