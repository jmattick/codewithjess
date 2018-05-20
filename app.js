$(document).ready(function(){

	//Adds email address to footer
	var username = "contact";
	var hostname = "codewithjess.com";
	var linktext = username + "@" + hostname;
	$("#contact").prepend("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
	
	//adds icons to img on hover
	$("#pfe").hover(function(){
		$("#pfetech").removeClass("hidden");
	}, function(){
		$(".tech").addClass("hidden");
	});

	$("#RGB").hover(function(){
		$("#rgbtech").removeClass("hidden");
	}, function(){
		$(".tech").addClass("hidden");
	});
	
	$("#simon").hover(function(){
		$("#simontech").removeClass("hidden");
	}, function(){
		$(".tech").addClass("hidden");
	});
	
	$("#clock").hover(function(){
		$("#clocktech").removeClass("hidden");
	}, function(){
		$(".tech").addClass("hidden");
	});
	
	$("#calc").hover(function(){
		$("#calctech").removeClass("hidden");
	}, function(){
		$(".tech").addClass("hidden");
	});
	
	$("#wiki").hover(function(){
		$("#wikitech").removeClass("hidden");
	}, function(){
		$(".tech").addClass("hidden");
	});
	
	$("#quote").hover(function(){
		$("#quotetech").removeClass("hidden");
	}, function(){
		$(".tech").addClass("hidden");
	});


    //toggles additional Front-End Projects
    $(".see-more").on("click", function (e) {
        $(".front-end-proj").toggleClass("hidden");
    });
	
});


//opens nav bar | Warning: will not work if inside .ready function
function togfunc() {
	$("#sidebar-wrapper").removeClass("inactive");
	$("#close-nav").removeClass("inactive");
	$("#nav-toggle").addClass("inactive");
};
//closes nav bar when button or elements pressed | Warning: will not work if inside .ready function
function togfunc2() {
	$("#sidebar-wrapper").addClass("inactive");
	$("#close-nav").addClass("inactive");
	$("#nav-toggle").removeClass("inactive");
};
//closes nav bar when user clicks off of menu
$(document).on("click", function (e) {
        if ($(e.target).is("#sidebar-wrapper")==false&&$(e.target).is("#nav-toggle")==false) {
         	$("#sidebar-wrapper").addClass("inactive");
			$("#close-nav").addClass("inactive");
			$("#nav-toggle").removeClass("inactive");
        }
    });





//Loads canvas background
var canvas = document.querySelector("canvas");

canvas.height = canvas.offsetHeight;
canvas.width = canvas.offsetWidth;

var c = canvas.getContext("2d");

var mouse = {
  x: undefined,
  y: undefined
};
var maxRadius = 30;
var minRadius = 5;
var colorArray = ["#757487", "#B3BEB4", "#535269"];
window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
});
window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = this.color;
    c.stroke();
  };
  this.update = function() {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    if (this.y + radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }
    this.y += this.dy;

    //interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > minRadius) {
      this.radius -= 1;
    }
    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 25; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 1;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dy = (Math.random() - 0.5) * 1;
  var radius = Math.random() * 7 + 1;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);
console.log("hello");

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
