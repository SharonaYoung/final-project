const input = document.querySelector('#itemInput');
const ul = document.querySelector('ul')
let items = [];

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
   
  // add item entered to items array
  items.push({
    name: input.value,
    complete: false
  });
  // clear the input box
  input.value = "";
  showItems();
 });

// function display items added to a list
const showItems = () => {
  const todoList = items.map((item, index) =>
  `
    <li><input type="checkbox" data-index="${index}" id="done"/>${item.name}  <button data-index="${index}" id="delete">x</button></li> 
  `
  )
  ul.innerHTML = todoList.join('');
}



ul.addEventListener('click', function(event){
  const index = event.target.dataset.index;
  // when checkbox is clicked
  if(event.target.matches('input')){
    items[index].complete = !items[index].complete
    console.log(`checkbox clicked for index ${event.target.dataset.index}`);
    
    // *** only adds to first item, this.querySelectorAll doesn't work ***
    /* const checkbox = document.querySelector("ul li");
    checkbox.classList.add("done"); */

    // ***does not work***
    // items[index].style.textDecoration('line-through');
    

  // when delete buotton clicked
  }else if(event.target.matches('button')){
    console.log(`delete clicked for index  ${event.target.dataset.index}`);
    items.splice(index,1);
    showItems();
  }  
});