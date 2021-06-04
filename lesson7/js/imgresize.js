//get the modal
const modal = document.querySelector("myModal");

// get the image and insert it inside the modal- use the "alt" text as a caption
const img = document.querySelector("data-src");
const modalImg = document.querySelector("img01");
const captionText = document.querySelector("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.data-src;
  captionText.innerHTML = this.alt;
}

//get the <span> element that closes the modal
var span = document.querySelector("close")[0];

//when the user clicks on <span> (x), close the modal
span.onclick = function(){
  modal.style.display = "none";
}