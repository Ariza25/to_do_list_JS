// Função que adiciona a tarefa na lista
function addTask() {
    // Pegar o título da tarefa
    const taskTitle = document.querySelector('#task-title').value.trim();

    if (taskTitle) {
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);

        newTask.querySelector('#task-title').textContent = taskTitle;
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        // Limpar texto
        document.querySelector('#task-title').value = "";

        // Evento de remover
        const removeBtn = newTask.querySelector(".remove-btn");
        removeBtn.addEventListener("click", function() {
            removeTask(newTask);
        });

        //Evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn');
        doneBtn.addEventListener("click", function(){
            completeTask(newTask);
        });
    }
}

// Função de remover tarefa
function removeTask(task) {
    task.remove();
}

//função de completar tarefa
function completeTask(task){
    task.classList.toggle("done");
}

// Evento de adicionar a tarefa
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addTask(); // Chamando a função
});
