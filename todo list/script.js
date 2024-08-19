document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') return;

    const li = document.createElement('li');
    li.textContent = taskValue;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            moveToDoneList(li);
        }
    });

    li.appendChild(checkbox);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function moveToDoneList(taskItem) {
    const doneList = document.getElementById('doneList');
    doneList.appendChild(taskItem);
    taskItem.querySelector('input[type="checkbox"]').remove();
}