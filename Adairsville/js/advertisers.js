const requestMerch ="js/merchants.json";

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
    let a = document.createElement('a');
    let logo = document.createElement('img');

    let site = "https://" + ad.website;
    a.setAttribute('href', site);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');

    let imgsrc = "images/" + ad.adimg;
    logo.setAttribute('src', imgsrc);
    logo.setAttribute('alt', ad.name);

    card.append(a);
    a.append(logo);

    document.querySelector('.ad1').append(card);
})
const ad2 = [adList[1]];
  ad2.forEach(ad => {

    let card = document.createElement('section');
    let a = document.createElement('a');
    let logo = document.createElement('img');

    let site = "https://" + ad.website;
    a.setAttribute('href', site);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');

    let imgsrc = "images/" + ad.adimg;
    logo.setAttribute('src', imgsrc);
    logo.setAttribute('alt', ad.name);

    card.append(a);
    a.append(logo);

    document.querySelector('.ad2').append(card);

})
const ad3 = [adList[2]];
  ad3.forEach(ad => {

    let card = document.createElement('section');
    let a = document.createElement('a');
    let logo = document.createElement('img');

    let site = "https://" + ad.website;
    a.setAttribute('href', site);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');

    let imgsrc = "images/" + ad.adimg;
    logo.setAttribute('src', imgsrc);
    logo.setAttribute('alt', ad.name);

    card.append(a);
    a.append(logo);
    
    document.querySelector('.ad3').append(card);
})
});