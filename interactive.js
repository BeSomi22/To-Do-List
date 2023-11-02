const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

function addTask(){
  if(taskInput.value === ''){
    alert('You must write something!');
    saveTasks()
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    taskList.appendChild(li); //display it in taskList

    let span = document.createElement('span');
    span.innerHTML = "\u00d7"; //display it in li
    li.appendChild(span);
  }
  taskInput.value = '';
  saveTasks()
}

taskList.addEventListener("click", function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveTasks()
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveTasks()
  }
},false);

function saveTasks(){
  localStorage.setItem('dataTask', taskList.innerHTML);
}

function showTheTasks(){
  taskList.innerHTML = localStorage.getItem('dataTask');
}
showTheTasks()

function pressEnter(event) {
  if( event.key === 'Enter'){
    addTask ();
  }
}