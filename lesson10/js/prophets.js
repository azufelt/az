const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];

    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let title = document.createElement('h2');
      let image = document.createElement('img');
      let birthdate = document.createElement('div');
      let birthplace = document.createElement('div');


      title.innerHTML = prophet.name + " " + prophet.lastname;
      birthdate.innerHTML = "Date of birth: " + prophet.birthdate;
      birthplace.innerHTML = "Place of birth: " + prophet.birthplace;
      
      card.append(title);
      card.append(birthdate);
      card.append(birthplace);
      card.append(image);
      
      image.setAttribute('src', prophet.imageurl);
      image.setAttribute('alt', prophet.name + " " + prophet.lastname);
      birthdate.setAttribute('class', 'birthdiv');
      birthplace.setAttribute('class', 'birthplacediv');
      document.querySelector('div.cards').append(card);

    })
    
});


