//tolocaleDateString

const today = new Date();
const date = today.getFullYear();
document.getElementById("currentYear").innerHTML = "© " + date;
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
const thisDay =
  months[today.getMonth()] + " " + today.getDay() + ", " + today.getFullYear();

document.getElementById("thisDay").innerHTML = thisDay;
