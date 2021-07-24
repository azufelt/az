//------display banner if day is friday--------//
if (new Date().getDay() == 5) {
  document.querySelector(".banner").style.display= "block";
} else {
  document.querySelector(".banner").style.display= "none";
}