//------display banner if day is friday--------//
if (new Date().getDay() == 5) {
  document.querySelector(".banner").style.display= "block";
} else {
  document.querySelector(".banner").style.display= "none";
}


const cityid = "5604473";
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
        let d = new Date(dayCard.dt*1000);
        let card = document.createElement("div");

        let title = document.createElement("h4");
        title.innerHTML = dayofWeek[d.getDay()]
        title.setAttribute("class", "forecast-head");
        
        let fiveDayConditions = document.createElement("p");
        fiveDayConditions.innerHTML = dayCard.main.temp.toFixed(0) + " °F <br> " + dayCard.weather[0].main;
        let image = document.createElement("img");
        let iconDesc= dayCard.weather[0].description;
        if(iconDesc == "few clouds") {
          let imagesrc = "images/wfewclouds.png";
          image.setAttribute("src", imagesrc);
          } else if(iconDesc == "clear sky") {
          let imagesrc = "images/wclearsky.png";
          image.setAttribute("src", imagesrc);
          } else if(iconDesc == "scattered clouds") {
            let imagesrc = "images/wscatteredclouds.png";
            image.setAttribute("src", imagesrc);
          } else if(iconDesc == "broken clouds") {
            let imagesrc = "images/wbrokenclouds.png";
            image.setAttribute("src", imagesrc);
          } else if (iconDesc == "overcast clouds") {
            let imagesrc = "images/wbrokenclouds.png";
            image.setAttribute("src", imagesrc);
          } else if (iconDesc == "light rain") {
            let imagesrc = "images/wrain.png";
            image.setAttribute("src", imagesrc);
          } else if (iconDesc == "shower rain") {
            let imagesrc = "images/wrain.png";
            image.setAttribute("src", imagesrc);
          } else if (iconDesc == "thunderstorm") {
            let imagesrc = "images/wthunderstorm.png";
            image.setAttribute("src", imagesrc);
          } else if (iconDesc == "snow") {
            let imagesrc = "images/wsnow.png";
            image.setAttribute("src", imagesrc);
          } else if (iconDesc == "mist") {
            let imagesrc = "images/wmist.png";
            image.setAttribute("src", imagesrc);
          } else {
            let imagesrc = "images/wrainbow.png";
            image.setAttribute("src", imagesrc);
          }
        
        
        image.setAttribute("alt", dayCard.weather[0].description);
        image.setAttribute("class", "icon");

        card.append(title);
        card.append(image);
        card.append(fiveDayConditions);

        card.setAttribute("class", "forecast-box");
        document.querySelector("div.forecast").append(card);

    })
    });
  
  