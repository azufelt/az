<h4 class="bullets">
  ·Offering today’s youth a positive hobby.<br>

·Combining art and science.<br>

·Offering support within communities
</h4>

<script>
const block = querySelectorAll(".icon1"); 
  
const obsvOpt =  {
  threshold:  .4;
  rootMargin: "0px 0px -50px 0px" ;
}
  
observer = new IntersectionObserver((entries) => {
  entries.forEach(entry =>
 			 if (entry.intersectionRatio > 0 {
     				 console.log('in view');
 			 observer.unobserve(entry.target);
     		 } else {
        	 console.log('out of view');
  }
  });
}, obsvOpt);
  
block.forEach(icon => {
  observer.observe(icon);
})
</script>




