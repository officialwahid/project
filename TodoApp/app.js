//UI VARIABLES
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterTodosInput = document.querySelector("#filter-todos");
const clearTodosBtn = document.querySelector("#clear-todos");
const todos = document.querySelector("#todos");

//Event
todoForm.addEventListener("submit", addTodo);
todos.addEventListener("click", deleteTodo);
filterTodosInput.addEventListener("keyup", filterTodos);
document.addEventListener("DOMContentLoaded", getodosFromLocalStorage);

//get todo from ls function

function getodosFromLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(document.createTextNode(todo));
    li.appendChild(deleteBtn);
    const ul = document.querySelector("#todos");
    ul.appendChild(li);
  });
}

//Add todo

function addTodo(e) {
  e.preventDefault();
  if (todoInput.value == "") {
    alert("Todo cannot be empty!");
  } else {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(document.createTextNode(todoInput.value));
    li.appendChild(deleteBtn);
    todos.appendChild(li);
    //add todo to local storage
    addTodoToLocalStorage(todoInput.value);
    todoInput.value = "";
  }
}
//Add ToDo to LS function
function addTodoToLocalStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//Delete todo function
function deleteTodo(e) {
  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.remove();
      //delete from LS
      deleteTodoFromLocalStorsge(e.target.parentElement);
    }
  }
}
//delete todo form ls function

function deleteTodoFromLocalStorsge(todo) {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (item, index) {
    if (todo.firstChild.textContent == item) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

clearTodosBtn.addEventListener("click", clearTodos);
function clearTodos() {
  if (confirm("Are you sure")) {
    todos.innerHTML = "";
    // 
    clearTodosFromLocalStorage()
  }
}
function clearTodosFromLocalStorage(){
  localStorage.removeItem("todos");
}
function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const lis = document.querySelectorAll("li");
  lis.forEach(function (li) {
    const liText = li.firstChild.textContent.toLowerCase();
    if (liText.indexOf(filterText) != -1) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
}
