//----- Date ------//
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
//---- Hamburger Nav Button ------//
const button = document.querySelector(".ham");
const navlist = document.querySelector(".navmenu");

button.addEventListener("click",() =>{navlist.classList.toggle("responsive")}, false);

const headerchange = document.querySelector("header");
button.addEventListener("click", () =>{headerchange.classList.toggle("responsive")}, false);


//------display banner if day is friday--------//
if (new Date().getDay() == 2) {
  document.querySelector(".banner").style.display= "block";
} else {
  document.querySelector(".banner").style.display= "none";
}