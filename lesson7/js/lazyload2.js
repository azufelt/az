const images = document.querySelectorAll("img[data-src]"); //This is the selector that we are going to affect

function preloadImage(img) {
  const src= img.getAttribute("data-src");
  if(!src) {
    return;
  } else {
    img.src = src;
  }
}
//this is where we create the options of what we want it to do
const imgOptions = {
    //root: null, would be whatever the viewport is
  threshold: 1,
  rootMargin: "0px 0px -150px 0px"

};
// this creates the new intersection observer, so we can feed it some options
//new IntersectionObserver((callback, options) --"callback" is where we write a function, either traditional function() or an arrow =>, arrow function says 'do all this stuff' 
//function is going to call to entries, and the observer itself.
//
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
entries.forEach(entry => {//for every entry do this thing: 
  if (!entry.isIntersecting) { //if nothing is intersecting, do nothing
    return;
  } else { //
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target);
  }

});
}, imgOptions);
//this says look at the variable images which is data-src in the DOM, and for each image observe our observe fucntion
images.forEach(image => {
  imgObserver.observe(image);
});
// document.addEventListener('',() =>(img[data-src]).classList.toggle("img[data-src].loaded"), false);