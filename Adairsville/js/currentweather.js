const APPID = "150cd72e5595793ee58a48d53d68f9f7";
const long = "-84.9341";
// "-84.9341";
const lat = "34.3687";
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
    
    if (jsObject.alert === alert) {
      let i = 0;
      let banner = document.createElement('section');
      let event = document.createElement('h3');
      let title = document.createElement('h4');
      let warning = document.createElement('p');
      event.textContent = alerts[i].event;
      title.textContent = alerts[i].sender_name;
      warning.textContent = alerts[i].description;

      banner.append(event);
      banner.append(title);
      banner.append(warning);
      banner.setAttribute('class', "alert hidebanner");

      document.querySelector('aside.banner').append(banner);

      const b = document.querySelector(".closebutton");
      const bannerchange = document.querySelector(".alert");
      b.addEventListener("click", () => {bannerchange.classList.toggle("hidebanner")}, false);
  
      document.querySelector(".alert").style.display= "block";
    } else {
          document.querySelector(".alert").style.display= "none";
          return;
        };      
    }
  );


const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${APPID}&units=${units}`

fetch(forecastURL)
.then((response) => response.json())
.then((jsObject) => {

const dayofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];

const forecast = [jsObject.daily[1], jsObject.daily[2], jsObject.daily[3]];
  
forecast.forEach((daycard) => {
     
      let d = new Date(daycard.dt*1000);
      let daytitle = dayofWeek[d.getDay()];
      
      let card = document.createElement('div');
      card.setAttribute('class', "daygrid");
      let title = document.createElement('h3');
      title.textContent = daytitle;

      let temp = document.createElement('p');
      let high = daycard.temp.max;
      let low = daycard.temp.min;
      temp.innerHTML= daycard.weather[0].description + "<br> High: " + (high).toFixed(0) + " °F<br> Low: " + (low).toFixed(0) + " °F";

      let icon = document.createElement('img')
      let imageicon = daycard.weather[0].icon;
      let imagesrc =  "http://openweathermap.org/img/wn/" + imageicon + "@2x.png";
      icon.setAttribute('src', imagesrc);

      card.append(title);
      card.append(temp);
      card.append(icon);
      document.querySelector('div.forecastgrid').append(card);

    });
});




