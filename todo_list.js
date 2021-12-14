function addTaskFunction() {
    description = document.getElementById("task_description_input").value
    dueDateCall = document.getElementById('duedate_input')
    dueTimeCall = document.getElementById('duetime_input')
    function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
        const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
        const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time
    
        if(dueDate && dueTime) { // The user specified both a due date & due time
            //Add the timezone offset to account for the fact that timestamps are specified by UTC
            const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
            console.log(dueDate + dueTime + timezoneOffset)

            return dueDate + dueTime + timezoneOffset;
        } else {
            // if the user did not specify both a due date and due time, return false
            return false;
        }

}
dateandTimeConvert = dateAndTimeToTimestamp(dueDateCall, dueTimeCall)
function addTask (description, dueTime){


    
    let newLi = document.createElement('li');
    let getUl = document.getElementById('task_list');
    let newSpan = document.createElement('span')
    newSpan.innerHTML = " due "
    let newButton = document.createElement ('button')
    newButton.innerHTML = "Done"
    newButton.className = "btn btn-sm btn-outline-danger done"
    getUl.append(newLi); 

    if (dueTime){

        newLi.append(description)
        newLi.append(newSpan)
        newLi.append(dueTime)
        newLi.append(newButton)
        
       
    }
    else{

        newLi.append(description)
        newLi.append(newButton)
        
    }

    newButton.addEventListener('click', deleteFunction)
    function deleteFunction(){

        newLi.remove();
    }

} 
addTask(description, dateAndTimeToTimestamp(dueDateCall, dueTimeCall))   
}


document.getElementById("add_task").addEventListener("click", addTaskFunction)
document.getElementById("add_task").addEventListener("click", deleteTaskDescription)
function deleteTaskDescription(){

    document.getElementById("task_description_input").value = ""
}

document.getElementById("task_description_input").addEventListener("keydown", testfunction)

function testfunction (e){

    if (e.keyCode === 13) {
        addTaskFunction()
        
      }
}



    






