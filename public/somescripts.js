/*Rock Game*/

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }
  updatescore()
function userturn(usermove){
 
  const computermove = computerturn();
  let result = '';
  if(usermove === 'rock'){
    if(computermove === 'rock'){
      result = 'Tie!';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand-back-fist"></i>: Computer chose <i class="fa-regular fa-hand-back-fist"></i>: 
      Result is: ${result}`;
      score.ties++;
    }
    else if(computermove === 'scissors'){
      result = 'You won!';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand-back-fist"></i>: Computer chose <i class="fa-regular fa-hand-scissors"></i>: 
      Result is: ${result}`;
      score.wins++;
    }
    else{
      result = 'You lost';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand-back-fist"></i>: Computer chose <i class="fa-regular fa-hand"></i>: 
      Result is: ${result}`;
      score.losses++;
    }
  }
  else if(usermove === 'scissors')
  {
    if(computermove === 'rock'){
      result = 'You lost';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand-scissors"></i>: Computer chose <i class="fa-regular fa-hand-back-fist"></i>: 
      Result is: ${result}`;
      score.losses++;
    }
    else if(computermove === 'scissors'){
      result = 'Tie!';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand-scissors"></i>: Computer chose <i class="fa-regular fa-hand-scissors"></i>: 
      Result is: ${result}`;
      score.ties++;
    }
    else{
      result = 'You won!';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand-scissors"></i>: Computer chose <i class="fa-regular fa-hand"></i>: 
      Result is: ${result}`;
      score.wins++;
    }
    
  }
  else{
    if(computermove === 'rock'){
      result = 'You won';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand"></i>: Computer chose <i class="fa-regular fa-hand-back-fist"></i>: 
      Result is: ${result}`;
      score.wins++;
    }
    else if(computermove === 'scissors'){
      result = 'You lost!';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand"></i>: Computer chose <i class="fa-regular fa-hand-scissors"></i>: 
      Result is: ${result}`;
      score.losses++;
    }
    else{
      result = 'Tie!';
      document.querySelector('.js-result').innerHTML = `You chose <i class="fa-regular fa-hand"></i>: Computer chose <i class="fa-regular fa-hand"></i>: 
      Result is: ${result}`;
      score.ties++;
    }
  }
  localStorage.setItem('score', JSON.stringify(score));
  updatescore();

}
function updatescore()
{
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`
}
function computerturn()
{
  let computermove = Math.random();
  if(computermove >= 0 && computermove <= 1/3 ){
    return 'rock';
  }
  else if(computermove > 1/3 && computermove <= 1/2) {
    return 'scissors';
  }
  else {
    return 'paper';
  }
}

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
    alert("Both name and date are required!");
  }
  
  }

function display(){
   let htmls = '';
  for(let i = 0; i < todoListarray.length; i++){
    const todoObject = todoListarray[i];
    const name = todoObject.name;
    const date = todoObject.date;
    const html = `
    <div class="list">
    <p class="todo-name">${i+1}. ${name}</p>
    <p class="todo-date-js">${date}</p>
    <button onclick="removeElement(${i});"><i class="fa-solid fa-trash-can"></i></button>
    </div>`;
    htmls += html;
  }
  const divElement = document.querySelector('.list-div');
  divElement.innerHTML = htmls;
}
function removeElement(index){

    todoListarray.splice(index,1);
    display();
}
function fun(event)
{
    if(event.key === 'Enter')
    {
        Addtolist();
    }
}


