const inputTarefa = document.querySelector('.input-tarefa');
const btnAddTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

function createLi(){
    const li = document.createElement('li');
    return li;  
}

function addTask(textInput){
    const li = createLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    deleteTask(li);
    saveTasks();
}

function inputClear(){
    inputTarefa.value = '';
    inputTarefa.focus();
} 

function deleteTask(li){
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('class', 'Delete');
    deleteButton.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(deleteButton);
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        console.log(inputTarefa.value);
        addTask(inputTarefa.value);
        inputClear();
    }
});

btnAddTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    console.log(inputTarefa.value);
    addTask(inputTarefa.value);
    inputClear();
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('Delete')){
        el.parentElement.remove();
        saveTasks();
    }
})

function addSavedTasks(){
    const tasks = localStorage.getItem('tarefas');
    const taskList = JSON.parse(tasks)
    console.log(taskList);
}
addSavedTasks();

function saveTasks(){
    const liTask = tarefas.querySelectorAll('li');
    const taskList = [];

    for (let task of liTask){
        let textTask = task.innerText; 
        textTask = textTask.replace('Delete', '').trim(); 
        taskList.push(textTask);
    }
    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tarefas',taskJSON);
    // console.log(taskList); 
}