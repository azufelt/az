const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "november",
  "December"
];
const today = new Date();
const dayOfWeek = daynames[today.getDay()];
const month = months[today.getMonth()];
const year = today.getFullYear();

const thisDay = `${daynames[today.getDay()]},
   ${month} ${today.getDate()}, ${today.getFullYear()} `;
/*const thisDay =
  months[today.getMonth()] + " " + today.getDay() + ", " + today.getFullYear();*/
document.getElementById("currentyear").innerHTML = "© " + year;
document.getElementById("currentdate").innerHTML = thisDay;



let string = document.lastModified;
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

if (
  Date.parse(document.lastModified) >
  parseFloat(
    document.cookie.replace(
      /(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    ) || "0"
  )
) {
  document.cookie =
    "last_modif=" +
    Date.now() +
    "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" +
    location.pathname;
}

document.getElementById("thisupdate").innerHTML = string;
