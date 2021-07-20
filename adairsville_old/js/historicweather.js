const APPID = "150cd72e5595793ee58a48d53d68f9f7";
const long = "-84.9341";
// "-84.9341";
const lat = "34.3687";
//  "34.3687";
const units = "imperial"
const time = ;
const apiURL = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API key}`


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {