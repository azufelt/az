const date = new Date();
const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    document.querySelector(
      "#currentdate"
    ).innerHTML = new Date().toLocaleDateString("en-us", options);
document.querySelector("#currentyear").innerHTML = date.getFullYear();

const button = document.querySelector(".ham");
const navlist = document.querySelector(".navmenu");

button.addEventListener("click",() =>{navlist.classList.toggle("responsive")}, false);

const headerchange = document.querySelector("header");
button.addEventListener("click", () =>{headerchange.classList.toggle("responsive")}, false);


//display banner if day is friday
if (new Date().getDay() == 0) {
  document.querySelector(".banner").style.display= "block";
} else {
  document.querySelector(".banner").style.display= "none";
}
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