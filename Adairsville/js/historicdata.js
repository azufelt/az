const censusAPI = `https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest`;


fetch(censusAPI)
  .then((response) => response.json())
  .then((censusJSON) => {

const georgia = censusJSON.data[10];
console.log(georgia);

// const stateData = towns.filter(towns => towns.name == "Soda Springs";
  })

const requestData = "js/historicdata.json";


fetch(requestData)
.then(function (response) {
  return response.json();
})
.then(function (dataJSON) {
  console.log(dataJSON);

  // const stats = dataJSON['stats'];
  
  const weatherlist = [dataJSON.history.weatherdata];
  
  console.log(weatherlist);
  
  let i = 0;
  let card = document.createElement('section');
  let h3 = document.createElement('h3');
  h3.innerHTML = "Average Weather Data:"
  let ul = document.createElement('ul');
  card.append(h3);
 
  weatherlist.forEach((weatheritem) => {
    let li = document.createElement('li');
    let item = weatheritem[i];
    li.textContent =item;
    ul.append(li);
    ul.textContent =li;
   
   
    
    })
   
    card.append(ul);
    document.querySelector('#averageweather').append(card);
  });
 
  
 

