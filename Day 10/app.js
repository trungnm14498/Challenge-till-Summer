var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todo = document.querySelector('.todo');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let value = input.value.trim();
    if (value){
        addTodoElement({
            text: value
        })
        saveTodoList();
    };

    input.value = '';
});

function addTodoElement(todoE){
    /**{
     * text;
     * status;
     * }
     */   

    var li = document.createElement('li');
    li.innerHTML = `
            <span>${todoE.text}</span>
            <i class="fa-regular fa-trash-can hide"></i>
    `;
    
    var icon = li.querySelector('i');

    if(todoE.status == 'completed'){
        li.setAttribute('class', 'completed');
        saveTodoList();
    };
    
    li.addEventListener('click', function(){
        this.classList.toggle('completed');
        saveTodoList();
    }); 

    li.addEventListener('mouseover', function(){
        icon.classList.remove('hide');
    });

    li.addEventListener('mouseout', function(){
        icon.classList.add('hide');
    });

    icon.addEventListener('click', function(){
        this.parentElement.remove();
        saveTodoList();
    });
    
    todo.appendChild(li);
};

function saveTodoList(){
    let todoList = document.querySelectorAll('li');
    let todoStorage = [];
    todoList.forEach(function(item) {
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');
        
        todoStorage.push({
            text,
            status
        })
    });

    localStorage.setItem('todolist', JSON.stringify(todoStorage));
};

function init() {
    let data = JSON.parse(localStorage.getItem('todolist'));
    data.forEach(function(item){
        addTodoElement(item);
    });
};

init();