let addButton = document.querySelector('button.add')
let input = document.querySelector('input')
let tasksData = window.localStorage.getItem('tasks')

for (let task of tasksData ? tasksData.split(',') : []){
    createTask(task)
}



addButton.onclick = (event)=>{
    newTask = input.value;
    tasksData = window.localStorage.getItem('tasks')

    if (tasksData){
        tasksData = tasksData.split(',')
        tasksData.push(newTask)
        window.localStorage.setItem('tasks', tasksData.join(','))
    } else {
        window.localStorage.setItem('tasks', newTask)
    }

    createTask(newTask)
    input.value = ''
}



function createTask(task){
    div = document.createElement('div')
    span = document.createElement('span')
    button = document.createElement('button')
    div.classList.add('task')
    span.innerText = task
    button.innerText = 'Delete'
    div.appendChild(span)
    div.appendChild(button)

    button.onclick = (event)=>{
        thisButton = event.target
        task = thisButton.previousElementSibling.innerText
        console.log(task)
        parent = thisButton.parentElement
        parent.remove()
        removeFromLocalStorage(task)
    }

    document.querySelector('.tasks').appendChild(div)
}

function removeFromLocalStorage(task){
    tasksData = window.localStorage.getItem('tasks').split(',')
    for (let i = 0; i < tasksData.length; i++){
        if (tasksData[i] === task){
            var newTasksData = [...tasksData.slice(0, i), ...tasksData.slice(i+1, )].join(',')
            break;
        } 
    }
    window.localStorage.setItem('tasks', newTasksData)
}

