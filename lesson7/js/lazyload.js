const images = document.querySelectorAll("data-src");

function preloadImage(img) {
  const src= img.getAttribute("data-src");
  if(!src) {
    return;
  } else {
    img.src = src;
  }
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
entries.forEach(entry => {
  if (!entry.isIntersecting) {
    return;
  } else {
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target);
  }
});
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(images);
});
document.addEventListener('',() =>(img[data-src]).classList.toggle("img[data-src].loaded"), false);
// //////////
// document.addEventListener("DOMContentLoaded", function() {
//   var lazyloadImages;

//   if("IntersectionObserver" in window) {
//     lazyloadImages =
//     document.querySelectorAll(".lazy");
//     var imageObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           var image = entry.target;
//           image.src = image.CDATA_SECTION_NODE.src;
//           image.classList.remove("lazy");
//           imageObserver.unobserve(image);
//         }
//       });
//     });

//     lazyloadImages.forEach(function(image) {
//       imageObserver.observe(image);
//     }); 
//   } else {
//     var lazyloadThrottleTimeout;
//     lazyloadImages = document.querySelectorAll(".lazy");

//     function lazyload () {
//       if(lazyloadThrottleTimeout) {
//       clearTimeout(lazyloadThrottleTimeout);
//     }
//     lazyloadThrottleTimeout = setTimeout(function() {
//       var scrollTop = window.pageYOffset;
//       lazyloadImages.forEach(function(img) {
//         if(img.offsetTop < (window.innerHeight + scrollTop)) {
//           img.src = img.dataset.src;
//           img.classList.remove("lazy");
//         }
//       });
//       if(lazyloadImages.length == 0) {
//         document.removeEventListener("scroll",lazyload);
//         window.removeEventListener("resize",lazyload);
//         window.removeEventListener("orientationChange", lazyload);
//       }
//     }, 20);
//   }
//   document.addEventListener("scroll",lazyload);
//         window.addEventListener("resize",lazyload);
//         window.addEventListener("orientationChange", lazyload);
// }
// })
/////////////
// let imagesToLoad = document.querySelectorAll("img[data-src]");
// const loadImages = (image) => {
//   image.setAttribute("src",
//   image.getAtrribute("data-src"));
//   image.onload =() => {
//     image.removeAttribute("data-src");
//     // image.removeAttribute("lazy");
//   };
// };
// if("IntersectionObserver" in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//       if(item.isIntersecting) {
//         loadImages(item.target);

//         observer.unobserve(item.target);
//       }
//     });
//   });
// } else {
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// }