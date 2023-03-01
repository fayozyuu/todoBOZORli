let todoForm = document.querySelector('#todo-form');
let todoInput = document.querySelector('#todo-input');
let todoList = document.querySelector('#todo-wrapper')

let todos = [];
let uniqueId = 0;

const createUi = (text) => {
   let listItem = document.createElement('li') ;
   let listText = document.createElement('span');
   let deletBtn = document.createElement('button');

   listItem.setAttribute('class', 'list-group-item  d-flex align-items-center justify-content-between');
deletBtn.setAttribute('class', 'btn btn-danger');

if (text.trim().length < 1) {
    alert("nmadur kriting")
}
else{
    listText.textContent = text;
deletBtn.textContent = "Delete";

   listItem.appendChild(listText);
   listItem.appendChild(deletBtn);
   todoList.appendChild(listItem);
}


   deletBtn.addEventListener('click', () => {
    for (let i = 0; i < todos.length; i++) {

        if(todos[i].id === i){
            listItem.remove();
        }
    }
   })
}

const createTodo = (text) => {
  todos.push({text, id: uniqueId });
  createUi(text);
  uniqueId++;
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createTodo(todoInput.value);

 todoForm.reset();

})
