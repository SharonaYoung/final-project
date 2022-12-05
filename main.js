const input = document.querySelector('#itemInput');
const ul = document.querySelector('ul')

let items = [];


document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  console.log("Submit clicked");
  
  // add item entered to items array
  items.push(input.value);
  console.log(items);
  
  // clear the input box
  input.value = "";

  // display items added to a list
  const todoList = items.map(item =>
    `
      <li>${item}</li>
    `
    )
    ul.innerHTML = todoList.join('')

});
