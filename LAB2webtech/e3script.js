function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("taskId", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const taskId = ev.dataTransfer.getData("taskId");
    const taskElement = document.getElementById(taskId);
    
    const targetList = ev.target.closest('.column').querySelector('.task-list');
    const columnId = ev.target.closest('.column').id;

    if (targetList) {
        targetList.appendChild(taskElement);
        
        if (columnId === "completed") {
            setTimeout(() => alert("Task Completed Successfully! 🎉"), 100);
        }
    }
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;

    const taskId = "task-" + Date.now();
    const date = new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });

    const card = document.createElement("div");
    card.className = "task-card";
    card.id = taskId;
    card.draggable = true;
    card.ondragstart = drag;

    card.innerHTML = `
        <strong>${input.value}</strong>
        <small>Created: ${date}</small>
    `;

    document.querySelector("#todo .task-list").appendChild(card);
    input.value = ""; 
}