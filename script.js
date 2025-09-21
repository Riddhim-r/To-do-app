// script.js

// Get references to HTML elements
let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// When the Add button is clicked
addBtn.onclick = function() {
    // Get the text from the input box
    let taskText = taskInput.value;

    // If input is empty, do nothing
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li)
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create a delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "deleteBtn";

    // When delete button is clicked, remove the task
    delBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Add delete button to the task
    li.appendChild(delBtn);

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear the input box
    taskInput.value = "";
};
