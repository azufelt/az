

  //get input from user
  //add input to list
  //display list to user
 

 //const entry = document.querySelector("fav");
 //const line = document.createElement("button");
 

 //function chapter() {
 // newList = list.map();

// }
 //function multiply(list, multiplier){
 // var newList = list.map(myFunction);
 // function myFunction(num) {
  //    return num * multiplier;
 // }
//return newList;  
//}
 //X button, addEventListener, allow user to delete line item
 //when user clicks X, find list item in array
 //remove array list item
 //display new list to user

const fav = document.querySelector("#fav");
const button = document.createElement("button");
const output = document.createElement(".list "); //wants child of whole list//

button.addEventListener("click",() => {
if (fav.value!= '') {
  //create the elements in the list
  let linewline = document.createElement("linewline");
  let deletebutton = document.createElement("button");
  //change some properties .... text content
  linewline.textContent = fav.value;
  deletebutton.textContent = "X";
  //.... add the button to the li
  linewline.append(deletebutton);
  output.append(linewline);
  deletebutton.addEventListener("click", function(){
    output.removeChild(linewline);
    fav.focus;
  });
  fav.value = '';
  fav.focus;
}

});