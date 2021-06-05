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
if (new Date().getDay() == 5) {
  document.querySelector(".banner").style.display= "block";
} else {
  document.querySelector(".banner").style.display= "none";
}
//---- Days since visitor last visited -----//

//add today's date as a local storage entry
//get previous date entry from local storage
// subtract two dates, then round to days ( milliseconds x seconds x minutes x hours)
//display answer in DOM

      const logVisit = date;
      localStorage.setItem("visitDateLog", logVisit);
    
      const firstVisit = new Date(localStorage.getItem("visitDateLog"));//convert from string to integer
      const visitLength = date - firstVisit; 
      const daySince = visitLength/1000/60/60/24;//divide by 1000/60/60/24, then round
      let message = 0;
      if (daySince <= 1){ //Check to make sure that it was at least one day ago.
        message = "today, silly! 🤪";
      } else {
       message = daySince.toFixed;
      }
      document.querySelector("#dateLog").innerHTML = message;
