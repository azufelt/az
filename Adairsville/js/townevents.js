

const requestJSON = "js/events.json";


fetch(requestJSON)
.then(function (response) {
  return response.json();
})
.then(function (eventObj) {
  console.log(eventObj);

  const eventlist = eventObj['events'];
let i = 0;
  eventlist.forEach((event) => {

    let card = document.createElement('div');
  

    let eventName = document.createElement('h3');
    eventName.innerHTML = event.name;
    card.append(eventName);


    let info = document.createElement('p');
    // info.innerHTML = event.date + "<br>" + event.time + "<br>" + event.description + "<br> Visit the event page for more info:"; 
    info.innerHTML = event.date + event.time + event.description + " Visit the event page for more info:"; 
    card.append(info);

    // let call = document. createElement('p');
    // call.innerHTML = "Visit the event page for more info!";
    // card.append(call);

    let link = document.createElement('a');
    let website = event.website;
    link.setAttribute("href", website);
    link.setAttribute("target", "_blank");
    link.innerHTML = event.name;
    card.append(link);

   

    document.querySelector("#eventcard").append(card);
  });
});
