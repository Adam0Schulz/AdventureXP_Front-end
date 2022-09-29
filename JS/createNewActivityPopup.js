const btn = document.getElementById("addBtn")

btn.addEventListener('click', (e) => {
    console.log('hello')
    $('#cont').load('./addNewActivity.html');
})