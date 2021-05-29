

    const temp = document.querySelector("#hightemp").innerText;
    const speed = document.querySelector("#windspeed").innerText;


    var chill = 0;
    var message = 0;
    if (temp <= 50 && speed > 3) {
      chill = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) +  .4275 * temp * Math.pow(speed, .16);
      message = chill.toFixed() + "°F";
    } else {
      message = "N/A"
    }
    document.querySelector("#windchill").innerHTML = message;