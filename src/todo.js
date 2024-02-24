//drop down
document.getElementById('dropdown').addEventListener('click', function() {
    this.classList.toggle('open');
  });

  const todoInput = document.querySelector('.todo-input');
  const todoButton = document.querySelector('.todo-button');
  const todoList = document.querySelector('.todo-list');
  const filterOption = document.querySelector('.filter-todo');
  
  //event listener
  document.addEventListener('DOMContentLoaded',getTodos);
  todoButton.addEventListener('click', addTodo);
  todoList.addEventListener('click',deleteCheck);
  filterOption.addEventListener('click', filterToDo);
  
  //functions
  function addTodo(event) {
      //prevent form from submitting
      event.preventDefault();
      //todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
  
      //create li
      const newTodo = document.createElement("li");
      newTodo.innerText = todoInput.value;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);
  
      //add todo to local storage
      saveLocalTodos(todoInput.value);
  
      //check mark button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = '<svg class="fa-check" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);
  
      //check tras button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<svg class="fa-trash" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
  
      //append to list
      todoList.appendChild(todoDiv);
  
      //clear todo input value
      todoInput.value = "";
  }
  
  function deleteCheck(e) {
      const item = e.target;
  
      //delete
      if(item.classList[0] === 'trash-btn') {
          const todo = item.parentElement;
          //animation
          todo.classList.add("fall");
          removeLocalTodos(todo);
          todo.addEventListener('transitionend', function(){
              todo.remove();
          });
      }
  
      //check mark
      if(item.classList[0] === 'complete-btn') {
          const todo = item.parentElement;
          todo.classList.toggle("completed");
      }
  }
  
  function filterToDo(e) {
      const todos = todoList.childNodes;
      todos.forEach(function(todo){
          switch(e.target.value){
              case "all":
                  todo.style.display = 'flex';
                  break;
              case "completed":
                  if(todo.classList.contains('completed')) {
                      todo.style.display = "flex";
                  }
                  else{
                      todo.style.display = "none";
                  }
                  break;
              case "uncompleted":
                  if(!todo.classList.contains('completed')) {
                      todo.style.display = "flex";
                  }
                  else{
                      todo.style.display = "none";
                  }
                  break;
          }
      });
  }
  
  function saveLocalTodos(todo) {
      //check -- hey do i have already have thing in there?
      let todos;
      if(localStorage.getItem('todos') === null) {
          todos = [];
      }
      else {
          todos = JSON.parse(localStorage.getItem('todos'));
      }
      todos.push(todo);
      localStorage.setItem('todos',JSON.stringify(todos));
  }
  
  function getTodos() {
  
      //check -- hey do i have already have thing in there?
      let todos;
      if(localStorage.getItem('todos') === null) {
          todos = [];
      }
      else {
          todos = JSON.parse(localStorage.getItem('todos'));
      }
      
      todos.forEach(function(todo) {
      //todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
  
      //create li
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);
  
      //check mark button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = '<svg class="fa-check" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);
  
      //check tras button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<svg class="fa-trash" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
  
      //append to list
      todoList.appendChild(todoDiv);
      });
  }
  
  function removeLocalTodos(todo) {
      //check -- hey do i have already have thing in there?
      let todos;
      if(localStorage.getItem('todos') === null) {
          todos = [];
      }
      else {
          todos = JSON.parse(localStorage.getItem('todos'));
      }
  
      const todoIndex = todo.children[0].innerText;
      todos.splice(todos.indexOf(todoIndex), 1);
      localStorage.setItem('todos', JSON.stringify(todos));
  }