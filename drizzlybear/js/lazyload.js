const images = document.querySelectorAll("img[data-src]"); //This is the selector that we are going to affect

function preloadImage(img) {
  const src= img.getAttribute("data-src");
  if(!src) {
    return;
  } else {
    img.src = src;
   
  }
}

const imgOptions = {
  threshold: .05,
  rootMargin: "0px 0px -500px 0px" 
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
entries.forEach(entry => {
  if (!entry.isIntersecting) {
    return;
  } else { //
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target);
      entry.target.classList.toggle("loaded")
  }

});
}, imgOptions);
images.forEach(src => {
  imgObserver.observe(src);
});

document.getElementsByTagName