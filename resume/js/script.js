const date = new Date();
const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
document.querySelector("#currentyear").innerHTML = date.getFullYear();
 

const button = document.querySelector(".ham");
const navlist = document.querySelector("nav");

button.addEventListener("click",() =>{navlist.classList.toggle("responsive")}, false);

const close1 = document.querySelector(".close1");
close1.addEventListener("click",() => {navlist.classList.toggle("responsive")}, false);
const close2 = document.querySelector(".close2");
close2.addEventListener("click",() => {navlist.classList.toggle("responsive")}, false);
const close3 = document.querySelector(".close3");
close3.addEventListener("click",() => {navlist.classList.toggle("responsive")}, false);
const close4 = document.querySelector(".close4");
close4.addEventListener("click",() => {navlist.classList.toggle("responsive")}, false);
const close5 = document.querySelector(".close5");
close5.addEventListener("click",() => {navlist.classList.toggle("responsive")}, false);
