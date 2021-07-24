  //get input from user
  //add input to list by creating a li item with delete X
  //give delete X event listener function
  //display list/delete X to user

const input = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.listitem');

//add eventlistener to the element that has selector "button", then IF the element of fav has a field VALUE that is not equel to nothing (which means, if something is in the input field when the button event listener runs) THEN do the next steps.
//use let because it changes each time something is added
//add a new li to the ul list
//also add a deletbutton element and function with each new line that is created
//on the new li (list item) add the text input from the user, which would be the VALUE from the variable fav
//add the delete button for the textContent line
button.addEventListener('click', function() {
  if (fav.value!= '') {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = input.value;
    deletebutton.textContent = 'X';
    //... add the button to the list item- li
    li.append(deletebutton);
    output.append(li);
    //let's listen to that delete button to see if anything happens
    deletebutton.addEventListener('click', function() {
      output.removeChild(li); //go to the output and remove child of the parent called li, because we placed the X as a child element of each li
      input.focus;
    });
    input.value = ''; //this clears the input field after list item has been created
    input.focus; //resets focus so it can listen for a new entry
  }
});