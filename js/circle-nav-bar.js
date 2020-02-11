var svg = document.querySelector(".circle-nav-bar");
var rects = document.querySelectorAll(".a-nav");

var i = rects.length;
while(i--) {
	
  rects[i].addEventListener("mouseenter", function(e) {

    svg.appendChild(e.target);

  });
}