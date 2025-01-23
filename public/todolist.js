/*To do List*/


const todoListarray = [];

function Addtolist(){
  const inputpart =  document.querySelector('.todo-input');
  const name = inputpart.value;
  const date = document.querySelector('.todo-date').value;
  if(name !== '')
  {
    todoListarray.push({name: name, date: date});
    inputpart.value = '';
    document.querySelector('.todo-date').value = '';
    display();
  }
  else 
  {
    alert("You have to write anything!");
  }
  
  }

function display(){
   let htmls = '';
  todoListarray.forEach((todoObject, i) => {
    const name = todoObject.name;
    const date = todoObject.date;
    const html = `
    <div class="list-todolist">
    <p class="todo-name">${i+1}. ${name}</p>
    <p class="todo-date-js">${date}</p>
    <button class="remove-button"><i class="fa-solid fa-trash-can"></i></button>
    </div>`;
    htmls += html;
  })
  const divElement = document.querySelector('.list-div');
  divElement.innerHTML = htmls;


  const buttons = document.querySelectorAll('.remove-button');
  buttons.forEach((deleteButton, index) => {
    console.log(index);
    deleteButton.addEventListener('click', () => {
      todoListarray.splice(index,1);
      display();
    });
  });
}
function fun(event)
{
    if(event.key === 'Enter')
    {
        Addtolist();
    }
}
document.querySelector('.add-button').addEventListener('click', () =>{
  Addtolist();
})


document.querySelector('.rock-button').addEventListener('click', () => {
  userturn('rock')
})
document.querySelector('.scissors-button').addEventListener('click', function scissor(){
  userturn('scissors')
})
document.querySelector('.paper-button').addEventListener('click', function() {
  userturn('paper')
})



