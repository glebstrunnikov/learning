let localtasks = JSON.parse(localStorage.getItem('local tasks'));
const createUl = document.createElement('ul');
if (localtasks != null) {localtasks.forEach(drawTask)};

function drawTask(taskToDraw) {
    if (localtasks === null) {localtasks = [];};
    if (localtasks != []) 
    {
        if (document.querySelector('.collection').firstElementChild === null) 
        {
            createUl.classList.add('tasks-ul');
            document.querySelector('.collection').appendChild(createUl);
        }
        const createTask = document.createElement('li');
    createTask.classList.add('taskName');
    createTask.innerHTML = `
    <blockquote><h5 style="display:inline-block"><div>${taskToDraw} </h5>
    <div class="btn deleteBtn"><i class="tiny material-icons">cancel</i></div></div>
    </blockquote>
    `
    document.querySelector('.tasks-ul').appendChild(createTask);

    document.querySelector('.deleteBtn').parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.addEventListener('click', deleteLocalTask);

    function deleteLocalTask(e){
        let deleteText
        if (e.target.className === 'tiny material-icons') {
        deleteText = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
        deleteText = deleteText.slice(0, -1);
        let numberToDelete = localtasks.indexOf(deleteText);
        console.log(localtasks);
        localtasks.splice(numberToDelete, 1);
        console.log(localtasks);
        localStorage.setItem('local tasks', JSON.stringify(localtasks));}
        else if (e.target.className === 'btn deleteBtn') {
            deleteText = e.target.parentElement.firstElementChild.firstElementChild.textContent;
            deleteText = deleteText.slice(0, -1);
            let numberToDelete = localtasks.indexOf(deleteText);
            console.log(localtasks);
            localtasks.splice(numberToDelete, 1);
            console.log(localtasks);
            localStorage.setItem('local tasks', JSON.stringify(localtasks));
        }

    }

    document.querySelector('.deleteBtn').parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.addEventListener('click', deleteShownTask);

    function deleteShownTask(e){
        if (e.target.className === 'tiny material-icons') {
        e.target.parentElement.parentElement.parentElement.remove()
    }
        else if (e.target.className === 'btn deleteBtn') {
            e.target.parentElement.parentElement.remove()

        };
    }
    }

}

document.querySelector('#task-form').addEventListener('submit', addTask);

function addTask(e){
    e.preventDefault();
    let taskText = document.querySelector('#task').value

    if (localtasks === null) {localtasks = [];};

    if (localtasks.indexOf(taskText) != -1) {alert("Such a task already exists!")} else {

    if (document.querySelector('#task').value != '') {
    localtasks.push(taskText);
    localStorage.setItem('local tasks', JSON.stringify(localtasks));}

    if (localtasks != []) {
        if (document.querySelector('.collection').firstElementChild === null) 
        {
            createUl.classList.add('tasks-ul');
            document.querySelector('.collection').appendChild(createUl);
        }
    const createTask = document.createElement('li');
    createTask.classList.add('taskName');
    createTask.innerHTML = `
    <blockquote><h5 style="display:inline-block"><div>${taskText} </h5>
    <div class="btn deleteBtn"><i class="tiny material-icons">cancel</i></div></div>
    </blockquote>
    `
    document.querySelector('.tasks-ul').appendChild(createTask);

    // let currentLi = document.querySelector('.deleteBtn').parentElement.parentElement

    document.querySelector('.deleteBtn').parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.addEventListener('click', deleteLocalTask);

    function deleteLocalTask(e){
        let deleteText
        if (e.target.className === 'tiny material-icons') {
        deleteText = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
        deleteText = deleteText.slice(0, -1);
        let numberToDelete = localtasks.indexOf(deleteText);
        localtasks.splice(numberToDelete, 1);
        localStorage.setItem('local tasks', JSON.stringify(localtasks));}
        else if (e.target.className === 'btn deleteBtn') {
            deleteText = e.target.parentElement.firstElementChild.firstElementChild.textContent;
            deleteText = deleteText.slice(0, -1);
            let numberToDelete = localtasks.indexOf(deleteText);
            localtasks.splice(numberToDelete, 1);
            localStorage.setItem('local tasks', JSON.stringify(localtasks));
        }

    }

    document.querySelector('.deleteBtn').parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.addEventListener('click', deleteShownTask);

    function deleteShownTask(e){
        if (e.target.className === 'tiny material-icons') {
        e.target.parentElement.parentElement.parentElement.remove()
    }
        else if (e.target.className === 'btn deleteBtn') {
            e.target.parentElement.parentElement.remove()

        };
    }
};

}

};

document.querySelector('.clear-tasks').addEventListener('click', clearTasks);
function clearTasks() {
    if (confirm('Are you sure?') === true) {
    document.querySelector('.collection').remove();
    localStorage.clear();
    }
}

document.querySelector('#filter').addEventListener('input', filterTasks);

function filterTasks (e) {
    let filterText = e.target.value;
    let liSelected = document.querySelector('.tasks-ul').firstElementChild;
    console.log(liSelected);
    console.log(liSelected.firstElementChild.firstElementChild.firstElementChild.textContent.indexOf(filterText));
    for (let i=0; i<document.querySelector('.tasks-ul').children.length; i++) {
        if (liSelected.firstElementChild.firstElementChild.firstElementChild.textContent.indexOf(filterText) === -1) {
            liSelected.style.display = "none"
        } else {liSelected.style.display = "block"};
        liSelected = liSelected.nextElementSibling;
    }
}
