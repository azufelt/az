const cityid = "5604473";
const APPID = "150cd72e5595793ee58a48d53d68f9f7";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityid + "&appid=" + APPID + "&units=imperial";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentConditions = document.querySelector("#conditions");
    currentConditions.textContent = jsObject.weather[0].description;

    const currentTemp = document.querySelector("#currentTemp");
    currentTemp.textContent = jsObject.main.temp.toFixed(0);
 
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity + "%";

    const windspeed = document.querySelector("#windspeed");
    windspeed.textContent = jsObject.wind.speed.toFixed(0);


    var chill = 0;
    var message = 0;
    if (currentTemp <= 50 && windspeed > 3) {
      chill = 35.74 + .6215 * currentTemp - 35.75 * Math.pow(windspeed, .16) +  .4275 * temp * Math.pow(speed, .16);
      message = chill.toFixed() + "°F";
    } else {
      message = "N/A"
    }
    document.querySelector("#windchill").innerHTML = message;





    // const temperature = document.querySelector("#temperature");
    // temperature.textContent = jsObject.main.temp;
    // const currently = document.querySelector("currently");
    // currently.innerHTML= `<strong>${jsObject.weather[0].description.toUpperCase()}</strong>`;
    // document.querySelector("#hightemp").textContent = jsObject.main.temp;



    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const description = jsObject.weather[0].icon;
    document.querySelector("#icon").setAttribute("src", imagesrc);
    document.querySelector("#icon").setAttribute("alt", description);

    const forecastData = document.querySelector("#data");
    forecastData.innerHTML = jsObject.main.temp.toFixed(0) + "°F<p> & <p>" + jsObject.weather[0].description;
  });
  
 
