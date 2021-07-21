const requestNewNow = "js/newnow.json";

fetch(requestNewNow)
.then(function (response) {
  return response.json();
})
.then(function (newnowObj) {
  const NewNow = newnowObj['newnow'];
  let list = document.createElement('ul');

  NewNow.forEach((newnow => {

    let listItem = document.createElement('li');
    let a = document.createElement('a'); 
    let h3 = document.createElement('h3');
   
    a.setAttribute('href', newnow.weblink);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
    h3.textContent = newnow.headline + "→";
    a.textcontent = h3;

    list.append(listItem);
    listItem.append(a);
    a.append(h3);
   
  }));

  document.querySelector(".newnowinfo").append(list);
});