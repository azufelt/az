
//---- Days since visitor last visited -----//

//add today's date as a local storage entry
//get previous date entry from local storage
// subtract two dates, then round to days ( milliseconds x seconds x minutes x hours)
//display answer in DOM
// if (visitMessage == 0) {
//   document.querySelector(".visitbanner").style.display= "none";
// }

const logVisit = date;
localStorage.setItem("visitDateLog", logVisit);

const firstVisit = new Date(localStorage.getItem("visitDateLog"));//convert from string to integer
const visitLength = date - firstVisit; 
const daySince = visitLength/1000/60/60/24;//divide by 1000/60/60/24, then round
let visitMessage = 0;
if (daySince <= 1){ //Check to make sure that it was at least one day ago.
  visitMessage = "Your most recent visit was today.";
} else {
  visitMessage = "Your last visit was" + daySince.toFixed + " days ago.";
}
document.querySelector("#dateLog").innerHTML = visitMessage;
