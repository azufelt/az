  //get input from user
  //add input to list by creating a li item with delete X
  //give delete X event listener function
  //display list/delete X to user

const input = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.listitem');

button.addEventListener('click', function() {
  if (input.value != '') {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = input.value;
    deletebutton.textContent = '<span>✘</span>';
    li.append(deletebutton);
    output.append(li);
    deletebutton.addEventListener('click', function() {
      output.removeChild(li);
      input.focus;
    });
    input.value = '';
    input.focus;
  }
})