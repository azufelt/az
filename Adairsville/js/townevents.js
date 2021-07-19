

const requestJSON = "js/events.json";


fetch(requestJSON)
.then(function (response) {
  return response.json();
})
.then(function (eventObj) {

  const eventlist = eventObj['events'];
// let i = 0;
  eventlist.forEach((event) => {

    let card = document.createElement('div');
    // card.setAttribute("class", "clearfix");
  

    let eventName = document.createElement('h3');
    eventName.innerHTML = event.name;
    

    let icon = document.createElement('span');
    icon.textContent= event.icon;
    icon.setAttribute('class', 'eventicon');

    let info = document.createElement('p');
    // info.innerHTML = event.date + "<br>" + event.time + "<br>" + event.description + "<br> Visit the event page for more info:"; 
    info.innerHTML = event.date + "<br>" + event.time + "<br>" + event.description; 
    let invite = document.createElement('p');
    invite.innerhtml = "Visit the event page for more info:";

    

    // let call = document. createElement('p');
    // call.innerHTML = "Visit the event page for more info!";
    // card.append(call);

    let link = document.createElement('a');
    let website = event.website;
    link.setAttribute("href", website);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
    link.innerHTML = event.name;

    card.append(eventName);
    card.append(info);
    card.append(icon);
    card.append(invite);
    card.append(link);

   

    document.querySelector("#eventcard").append(card);
  });
});
