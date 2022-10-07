const bookingName1 = document.getElementById("deleteBookingBtn")
const btnConfirm = document.getElementById("confirm")
const btnCancel = document.getElementById("cancel")


const parameter = new URLSearchParams(window.location.search);
const urlID = parameter.get("id")
const id1 = urlID;
const url = "http://localhost:8080/bookings/" + id1

getMe()

async function getMe()
{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    bookingName1.textContent = data.name
}

async function deleteBooking()
{
    await fetch(url,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
        .then(data => {
            if (data.status === 200) {
                window.location.replace("bookings.html")
            }
        })
        .catch(err => console.log(err))

}

function cancel()
{
    window.location.replace("bookings.html?id=")
}

btnConfirm.addEventListener('click', deleteBooking)
btnCancel.addEventListener('click', cancel)

