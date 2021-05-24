

    const temp = document.querySelector("#hightemp").innerText;
    const speed = document.querySelector("#windspeed").innerText;

    var chill = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) +  .4275 * temp * Math.pow(speed, .16);
    document.querySelector("#windchill").innerHTML = chill.toFixed() + "°F";