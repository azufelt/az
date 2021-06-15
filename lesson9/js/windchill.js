    const temp = document.querySelector("#hightemp").innerText;
    const speed = document.querySelector("#windspeed").innerText;


    var chill = 0;
    var message = 0;
    if (temp <= 50 && speed > 3) {
      chill = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) +  .4275 * temp * Math.pow(speed, .16);
      message = chill.toFixed() + "°F";
    } else {
      message = "N/A"
    }
    document.querySelector("#windchill").innerHTML = message;

    //------- 5 day Forecast Box-------//
//Day by day forecast boxes
//check date, get number, add to number, compare to list, output message
const today = date.getDay();
const tomorrow = today + 1;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (today == 3) {
  document.querySelector(".forecastbox1").innerHTML = days[today];
document.querySelector(".forecastbox2").innerHTML = days[today + 1];
document.querySelector(".forecastbox3").innerHTML = days[today + 2];
document.querySelector(".forecastbox4").innerHTML = days[today + 3];
document.querySelector(".forecastbox5").innerHTML = days[today - 3];
} else if (today == 4) {
  document.querySelector(".forecastbox1").innerHTML = days[today];
  document.querySelector(".forecastbox2").innerHTML = days[today + 1];
  document.querySelector(".forecastbox3").innerHTML = days[today + 2];
  document.querySelector(".forecastbox4").innerHTML = days[today - 4];
  document.querySelector(".forecastbox5").innerHTML = days[today - 3];
}
else if (today == 5) {
  document.querySelector(".forecastbox1").innerHTML = days[today];
document.querySelector(".forecastbox2").innerHTML = days[today + 1];
document.querySelector(".forecastbox3").innerHTML = days[today - 5];
document.querySelector(".forecastbox4").innerHTML = days[today - 4];
document.querySelector(".forecastbox5").innerHTML = days[today - 3];
}
else if (today == 6) {
  document.querySelector(".forecastbox1").innerHTML = days[today];
document.querySelector(".forecastbox2").innerHTML = days[today - 6];
document.querySelector(".forecastbox3").innerHTML = days[today - 5];
document.querySelector(".forecastbox4").innerHTML = days[today - 4];
document.querySelector(".forecastbox5").innerHTML = days[today - 3];
}
else {
document.querySelector(".forecastbox1").innerHTML = days[today];
document.querySelector(".forecastbox2").innerHTML = days[today + 1];
document.querySelector(".forecastbox3").innerHTML = days[today + 2];
document.querySelector(".forecastbox4").innerHTML = days[today + 3];
document.querySelector(".forecastbox5").innerHTML = days[today + 4];
}