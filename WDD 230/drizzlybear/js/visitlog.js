
const logVisit = date;

const firstVisit = new Date(localStorage.getItem("visitDateLog"));
localStorage.setItem("visitDateLog", logVisit);
const visitLength = date - firstVisit; 
const daySince = visitLength/1000/60/60/24;
let visitMessage = 0;
if (daySince <= 1){ 
  visitMessage = "Your most recent visit was today.";
} else {
  visitMessage = "Your last visit was" + daySince.toFixed(0)+ " days ago.";
}
document.querySelector("#dateLog").innerHTML = visitMessage;

