function addTask (description, dueTime){
let newDate = Date(dueTime);
// span class

let spanClass= document.createElement('span').setAttribute('class', 'due');

// Done Button
let doneButton = document.createElement('button').setAttribute('class', 'btn btn-sm btn-outline-danger done');


// Create the li tag for list
let taskList = document.getElementById('task_list');
let listItem = document.createElement('li');
// Append Li tag  to task list
taskList.append(listItem);



if(dueTime != null){

    newlistItem = description + " " + newDate + " " + doneButton;
    listItem.append(newlistItem);

}
    
}

let test = addTask("potato", 1633584893);
console.log(test);