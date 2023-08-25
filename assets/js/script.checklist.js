let taskIndex = -1;

class Task {
    constructor (id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }

    checkTask(id){
        this.tasks.forEach(task => {
            if(task.id == id){
                task.status = !task.status // Nego aqui pq posso desmarcar tbm
            }
        });

        document.getElementById("check-" + id).classList.toggle("checkGreen");
        document.getElementById("check-" + id).classList.toggle("check")
    }
}

function randomId() {
    return Math.floor(Math.random() * 9998) + 1;
}

const taskList = new TaskList();

function createTask() {
    let taskTitle = document.getElementById("field").value;

    if (taskIndex < 0) {
        let task = new Task(randomId(), taskTitle, false);
    
        taskList.addTask(task);
    } else {
        taskList.tasks[taskIndex].title = taskTitle;
        taskIndex = -1;
    }

    showTask();

    document.getElementById("field").value = '';
}

function showTask() {
    document.getElementById("checklist").classList.remove("hidden");
    let showContent = '';
    

    taskList.tasks.forEach((task, index) => {
        let verify = task.status ? "checkGreen" : "check";
        showContent += `
        <div class="divList-${task.id} divList">
            <div class="listFields">
            <p id="field">${task.title}</p>
            <button id="check-${task.id}" class="${verify}" onclick="checkTask(${task.id})">
                <i class="fa-solid fa-check" style="color: #000000;"></i>
            </button>
            <button id="edit-${task.id}" class="edit" onclick="editTask(${index})">
                <i class="fa-solid fa-pen" style="color: #000000;"></i>
            </button>
            <button id="delete-${task.id}" class="delete" onclick="deleteTask(${index})">
                <i class="fa-solid fa-trash" style="color: #000000;"></i>
            </button>
            </div>
        </div>
        `;
    })

    document.getElementById("checklist").innerHTML = showContent;
}

function editTask(index) {
    const taskEdit = taskList.tasks[index];

    document.getElementById("field").value = taskEdit.title;

    taskIndex = index;
}

function deleteTask(index) {
    taskList.tasks.splice(index, 1);
    showTask();

    if (taskList.tasks.length == 0){
        document.getElementById("checklist").classList.add("hidden");
    }
}

function checkTask(id) {
    taskList.checkTask(id);
}
