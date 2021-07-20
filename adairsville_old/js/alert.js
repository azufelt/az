
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {



    if(jsObject.alerts == undefined) {
      document.querySelector(".alert").style.display= "none";
          return;
    } else {
      let alertList = jsObject.alerts;

      alertList.forEach(()=> {
        let i = 0;
        let banner = document.createElement('section');
        let event = document.createElement('h3');
        let title = document.createElement('h4');
        let warning = document.createElement('p');

        event.textContent = jsObject.alerts[i].event;
        title.textContent = jsObject.alerts[i].sender_name;
        warning.textContent = jsObject.alerts[i].description;

        banner.append(event);
        banner.append(title);
        banner.append(warning);

        document.querySelector('.alert').append(banner);
      })
      const b = document.querySelector(".closebutton");
      const bannerchange = document.querySelector(".alert");
      b.addEventListener("click", () => {bannerchange.classList.toggle("hidebanner")}, false);
        }; 
      })