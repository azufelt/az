const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const weathertown = towns.filter(towns => towns.name == "Soda Springs" || towns.name == "Fish Haven" || towns.name == "Preston");
    
    weathertown.forEach(towns => {

      let card = document.createElement('section');
      let title = document.createElement('h3');
      let photo = document.createElement('img');
      let motto = document.createElement('h4');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let rainfall = document.createElement('p');
      let events = document.createElement('p');
      let datainfo = document.createElement('div');
      

      title.innerHTML = towns.name;
      motto.innerHTML = towns.motto;
      yearFounded.innerHTML = "Founded: " + towns.yearFounded;
      currentPopulation.innerHTML = "Population: " + towns.currentPopulation;
      rainfall.innerHTML = "Average Annual Rainfall: " + towns.averageRainfall;
      events.innerHTML = "Upcoming Events: <br>" + towns.events[0];


      card.append(title);
      card.append(motto);
      card.append(datainfo);
      datainfo.append(yearFounded);
      datainfo.append(currentPopulation);
      datainfo.append(rainfall);
      datainfo.append(events);
      card.append(photo);
     



      photo.setAttribute('src', "images/" + towns.photo + ".jpf");
      photo.setAttribute('alt', towns.name);
      photo.setAttribute('class', 'datapic');
      events.setAttribute('class', 'datadiv');
      datainfo.setAttribute('class', "datainfo");
      document.querySelector('div.cards').append(card);
    
    })
    
});