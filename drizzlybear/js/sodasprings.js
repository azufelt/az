//------display banner if day is friday--------//
if (new Date().getDay() == 5) {
  document.querySelector(".banner").style.display= "block";
} else {
  document.querySelector(".banner").style.display= "none";
}


const cityid = "5678757";
const APPID = "150cd72e5595793ee58a48d53d68f9f7";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityid + "&appid=" + APPID + "&units=imperial";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const currentConditions = document.querySelector("#conditions");
    currentConditions.textContent = jsObject.weather[0].main;

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

  });


  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityid + "&appid=" + APPID + "&units=imperial";

  fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
     
      const dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      const fiveDay = jsObject.list.filter((forecast)=>forecast.dt_txt.includes('18:00:00'));
  
      fiveDay.forEach( dayCard => {
        console.log(fiveDay);

        let d = new Date(dayCard.dt_txt);
        let card = document.createElement("div");

        let title = document.createElement("h4");
        title.innerHTML = dayofWeek[d.getDay()]
        title.setAttribute("class", "forecast-head");
        
        let fiveDayConditions = document.createElement("p");
        fiveDayConditions.innerHTML = dayCard.main.temp.toFixed(0) + " °F <br> " + dayCard.weather[0].main;
      
        let image = document.createElement("img");
        const imageURL = `https://openweathermap.org/img/w/${dayCard.weather[0].icon}.png`;
        image.setAttribute("src", imageURL);
        image.setAttribute("alt", dayCard.weather[0].description);
        image.setAttribute("class", "icon");

        card.append(title);
        card.append(image);
        card.append(fiveDayConditions);

        card.setAttribute("class", "forecast-box");
        document.querySelector("div.forecast").append(card);

    })
    });
  