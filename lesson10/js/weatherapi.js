const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=150cd72e5595793ee58a48d53d68f9f7'
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
  