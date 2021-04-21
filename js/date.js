//tolocaleDateString

const today = new Date();
const year = today.getFullYear();
document.getElementById("currentYear").innerHTML = "© " + year;
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
/*const days = [
  "Sunday",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const thisDay = `${days[today.getDay()]},
   ${months[today.getMonth()]} ${today.getDay(2)}, ${today.getFullYear()} `;
/*const thisDay =
  months[today.getMonth()] + " " + today.getDay() + ", " + today.getFullYear();*/

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

document.getElementById("thisUpdate").innerHTML = string;
