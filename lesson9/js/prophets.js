const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let title = document.createElement('h2');
      let image = document.createElement('img');
      let birthdate = document.createElement('div');
      let birthplace = document.createElement('div');
      title.innerHTML = prophets[i].name + " " + prophets[i].lastname;
      birthdate.innerHTML = prophets[i].birthdate;
      birthplace.innerHTML = prophets[i].birthplace;
      card.append(title);
      card.append(birthdate);
      card.append(birthplace);
      card.append(image);
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname);
      birthdate.setAttribute('class', 'birthdiv');
      birthplace.setAttribute('class', 'birthplacediv');
      document.querySelector('div.cards').append(card);
      // image.style.width = "100%";
  }
});


