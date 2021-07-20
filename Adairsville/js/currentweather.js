const APPID = "150cd72e5595793ee58a48d53d68f9f7";
const long = "-84.9341";
// "-108.489304"; //BILLINGS, MONTANTA//
// "-84.9341";
const lat =  "34.3687";
// "45.787636";
//  "34.3687";
const units = "imperial"
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${APPID}&units=${units}`


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  
    String.prototype.toProperCase = function() {
      return this.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    // const icon = document.querySelector('weathericon');
   
    // let imageicon = jsObject.weather[0].icon;
    // let imagesrc =  "http://openweathermap.org/img/wn/" + imageicon + "@2x.png";
    // icon.setAttribute('src', imagesrc);
    // icon.setAttribute('alt', 'weather icon');


    const currentConditions = document.querySelector("#conditions");
    currentConditions.textContent = jsObject.current.weather[0].description;
 
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.current.humidity + "%";

    const windspeed = jsObject.current.wind_speed.toFixed(0);
    document.querySelector("#wind").textContent = windspeed;

    const temp = jsObject.current.temp.toFixed(0);
    document.querySelector("#currentTemp").textContent = temp;

    var chill = 0;
    var message = 0;
    if (temp <= 50 && windspeed > 3) {
      chill = 35.74 + .6215 * temp - 35.75 * Math.pow(windspeed, .16) +  .4275 * temp * Math.pow(windspeed, .16);
      message = chill.toFixed() + "°F";
    } else {
      message = "N/A"
    };
    document.querySelector("#windchill").innerHTML = message;
    }
  );
