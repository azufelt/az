const requestMerch ="js/biz.json";

fetch(requestMerch)
.then(function (response) {
  return response.json();
})
.then((jsObject) => {
  const businesses = jsObject['businesses'];
  const adList = businesses.filter(businesses => businesses.ad == "yes");

  const ad1 = [adList[0]];
  ad1.forEach(ad => {

    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let desc = document.createElement('p');
    let logo = document.createElement('img');
    // let site = document.createElement('a');

    h3.textContent = "Sponsored ad";
    desc.innerHTML = ad.website;
    let imgsrc = "images/" + ad.logo;
    logo.setAttribute('src', imgsrc);
    logo.setAttribute('alt', ad.name);

    card.append(h3);
    card.append(logo);
    card.append(desc);

    document.querySelector('.ad1').append(card);

})
const ad2 = [adList[1]];
  ad2.forEach(ad => {

    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let desc = document.createElement('p');
    let logo = document.createElement('img');

    h3.textContent = "Sponsored ad";
    desc.innerHTML = ad.website;
    let imgsrc = "images/" + ad.logo;
    logo.setAttribute('src', imgsrc);
    logo.setAttribute('alt', ad.name);

    card.append(h3);
    card.append(logo);
    card.append(desc);

    document.querySelector('.ad2').append(card);

})
const ad3 = [adList[2]];
  ad3.forEach(ad => {

    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let desc = document.createElement('p');
    let logo = document.createElement('img');

    h3.textContent = "Sponsored ad";
    desc.innerHTML = ad.website;
    let imgsrc = "images/" + ad.logo;
    logo.setAttribute('src', imgsrc);
    logo.setAttribute('alt', ad.name);

    card.append(h3);
    card.append(logo);
    card.append(desc);

    document.querySelector('.ad3').append(card);
})
});