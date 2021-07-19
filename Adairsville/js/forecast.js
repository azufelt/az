
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
      icon.setAttribute('alt', daytitle + " " + daycard.weather[0].description);

      card.append(title);
      card.append(temp);
      card.append(icon);
      document.querySelector('div.forecastgrid').append(card);

    });
});
