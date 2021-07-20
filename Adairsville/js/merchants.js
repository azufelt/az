const requestMerch ="js/biz.json";

fetch(requestMerch)
.then(function (response) {
  return response.json();
})
.then(function (jsObject) {
  const merchants =jsObject['businesses'];


  merchants.forEach(business => {
    
   
    let card = document.createElement('figure');
    let bizName = document.createElement('h3');
    let address = document.createElement('p');
    let image = document.createElement('img');

    let description = document.createElement('figcaption');

    bizName.innerHTML = business.name;
    address.innerHTML = `${business.address[0].numbers} ${business.address[0].street} <br> ${business.address[0].city}, ${business.address[0].state} ${business.address[0].zipcode} <br> ${business.phone}`;
    description.innerHTML = `${business.hours} <br>${business.description[0]}`;
    let imgsrc = "images/" + business.image;
   
    card.append(bizName);
    card.append(address);
    card.append(image);
    card.append(description);
    

    image.setAttribute('src', imgsrc);
    image.setAttribute('alt', business.name);
    document.querySelector('.merchantgrid').append(card);


  });
});

// ---------------using onclick button Method ----------------
function gridView() {
  const gridchange = document.querySelector("#merchantgrid");
gridchange.classList.add("gallery");
gridchange.classList.remove("linedisplay");
}
function lineView() {
  const gridchange = document.querySelector("#merchantgrid");
  gridchange.classList.add("linedisplay");
  gridchange.classList.remove("gallery");
}

// -------------Using addEventListener Method--------------
// const gridbutton = document.querySelector("gridbutton");
// const gridchange = document.querySelector("#merchantgrid");
// gridbutton.addEventListener("click", () => {
//   gridchange.classList.add("griddisplay");
//   })
// gridbutton.addEventListener("click", () => {
//   gridchange.classList.remove("linedisplay");
//   })
//   const listbutton = document.querySelector("listbutton");
// // const gridchange = document.querySelector("#merchantgrid");
// listbutton.addEventListener("click", () => {
//   gridchange.classList.add("linedisplay");
//   })
// listbutton.addEventListener("click", () => {
//   gridchange.classList.remove("griddisplay");
//   })