//add save button with event listener
const saveButton = document.getElementById(".saveButton");
const cancelButton = document.getElementById(".cancelButton");

saveButton.addEventListener("click", saveActivity);
cancelButton.addEventListener("click", cancelActivity);
//make a save activity function
function saveActivity() {
    //get the values from the form
    const name = document.getElementById(".title").value;
    const type = document.getElementById(".description").value;

}
function cancelActivity() {


}
