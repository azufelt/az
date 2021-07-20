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
 

const button = document.querySelector(".ham");
const navlist = document.querySelector("nav");

button.addEventListener("click",() =>{navlist.classList.toggle("responsive")}, false);

const headerchange = document.querySelector("header");
button.addEventListener("click", () =>{headerchange.classList.toggle("responsive")}, false);
