const btn = document.getElementById("addActivityBtn")

btn.addEventListener('click', (e) => {
    $('#cont').load('./addNewActivity.html');
})