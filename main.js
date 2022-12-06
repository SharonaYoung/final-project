const input = document.querySelector('#itemInput');
const ul = document.querySelector('ul')

let items = [];


document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  console.log("Submit clicked");
  
  // add item entered to items array
  items.push(input.value);
  
  // clear the input box
  input.value = "";

  // function display items added to a list
  showItems();
 
});
const showItems = () => {
  const todoList = items.map((item, index) =>
  `
    <li><input type="checkbox" data-index="${index}" id="done"/>${item}  <button data-index="${index}" id="delete">x</button></li> 
  `
  )
  ul.innerHTML = todoList.join('');
}

// event listener for button click
ul.addEventListener('click', function(event){
  
  if(event.target.matches('input')){
    const checkIndex = event.target.dataset.index;
    let checkbox = document.querySelector("done");
    checkbox = true;
    console.log(checkIndex + ' checkbox clicked');   

  } else if(event.target.matches('#delete')){
    const buttonIndex = event.target.dataset.index 
    console.log(items[buttonIndex]);
    items.splice(buttonIndex,1);
  }
  showItems()
});