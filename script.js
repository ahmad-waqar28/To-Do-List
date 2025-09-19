
function addTask() {
    const newTask = document.createElement('li');
    const taskList = document.getElementById('taskList');
    // taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = "";
    deleteTask(newTask);
    taskList.appendChild(newTask);

} 

function deleteTask(newTask) 
{
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function() {
        newTask.remove();
    }
    
}