const APPID = "150cd72e5595793ee58a48d53d68f9f7";
const long = "-81.760254";
"-84.9341";
const lat = "27.994402";
 "34.3687";
const units = "imperial"
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${APPID}&units=${units}`


fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);

    String.prototype.toProperCase = function() {
      return this.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    const currentConditions = document.querySelector("#conditions");
    currentConditions.textContent = weatherObject.current.weather[0].description;
 
    const humidity = document.querySelector("#humidity");
    humidity.textContent = weatherObject.current.humidity + "%";

    const windspeed = weatherObject.current.wind_speed.toFixed(0);
    document.querySelector("#wind").textContent = windspeed;

    const temp = weatherObject.current.temp.toFixed(0);
    document.querySelector("#currentTemp").textContent = temp;

    var chill = 0;
    var message = 0;
    if (temp <= 50 && windspeed > 3) {
      chill = 35.74 + .6215 * temp - 35.75 * Math.pow(windspeed, .16) +  .4275 * temp * Math.pow(windspeed, .16);
      message = chill.toFixed() + "°F";
    } else {
      message = "N/A"
    }
    document.querySelector("#windchill").innerHTML = message;
    



    // const weatherAlerts = jsObject.filter((onecall)=> onecall.object.includes('alerts'));
    // const alerts = jsObject['jsonAlerts'];
    // let i = 0;
    // let banner = document.createElement('section');
    // let event = document.createElement('h3');
    // let title = document.createElement('h4');
    // let warning = document.createElement('p');
    // event.textContent = alerts[i].event;
    // title.textContent = alerts[i].sender_name;
    // warning.textContent = alerts[i].description;
    // banner.append(event);
    // banner.append(title);
    // banner.append(warning);
    // banner.setAttribute('class', "alert hidebanner");
    // document.querySelector('aside.banner').append(banner);
    // const b = document.querySelector(".closebutton");
    // // const closebutton = document.querySelector("closebutton");
    // const bannerchange = document.querySelector(".alert");
    // b.addEventListener("click", () => {bannerchange.classList.toggle("hidebanner")}, false);

    // var length= alerts.length;
    // if (length >= 1) {
    //   document.querySelector(".banner").style.display= "block";
  
    // } else {
    //   document.querySelector(".banner").style.display= "none";
    // };

    // // const weatherAlerts = ['alerts'];
    // if (weatherAlerts.includes('alerts')) {
    //   console.log(weatherAlerts)
    // } else {
    //   console.log(" no alerts found");
    // };





  function lookUpAlerts(alerts, property) {
    var value = weatherObject.find(function(weatherObject) {
      
      // console.log(weatherObject.alerts === alerts);
      return weatherObject.alerts === alerts;
    });
    if (!value) {
      console.log("no alerts found");
      return;
    };
  }
//     for (i =0; i< apiURL.length; i++) {
//       if(Object.values(keys[i]).indexOf(alerts) > -)
//     }
//   }
// (apiURL.filter(value => value.alerts === alerts)[0] || {}) [prop]

  });
