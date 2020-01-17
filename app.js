$(document).ready(function(){

 //select elements
  var animation = $.find('.animation');
  var window_elem = $(window);

  //check if element currently in view
  function check_if_in_view() {
    //get window height
    var window_height = window_elem.height();
    var window_top= window_elem.scrollTop();
    var window_bottom = (window_top + window_height);

    //iterate through all animation elements
    $.each(animation, function() {

      //get element information
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top = $(element).offset().top;
      var element_bottom = (element_top + element_height);

      //check to see if this element is between the viewable space of the viewport and adds animation class
      if ((element_bottom >= window_top) && (element_top <= window_bottom)) {
        element.addClass('slide-in');
      } else {
        element.removeClass('slide-in');
      }
    });

  }

  //on scroll check if element visible
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger scroll event on initial load
  $(window).trigger('scroll');



	//Adds email address to footer
	var username = "contact";
	var hostname = "codewithjess.com";
	var linktext = username + "@" + hostname;
	$("#contact").prepend("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
	
	//adds icons to img on hover
  $("#btools").hover(function(){
    $("#btoolstech").removeClass("hidden");
  }, function(){
    $(".tech").addClass("hidden");
  });

  $("#co").hover(function(){
    $("#cotech").removeClass("hidden");
  }, function(){
    $(".tech").addClass("hidden");
  });

  $("#brm").hover(function(){
    $("#brmtech").removeClass("hidden");
  }, function(){
    $(".tech").addClass("hidden");
  });

	$("#pfe").hover(function(){
		$("#pfetech").removeClass("hidden");
	}, function(){
		$(".tech").addClass("hidden");
	});

  $("#plt").hover(function(){
    $("#plttech").removeClass("hidden");
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
	$("#bar-wrapper").removeClass("inactive");
	$("#close-nav").removeClass("inactive");
	$("#nav-toggle").addClass("inactive");
};
//closes nav bar when button or elements pressed | Warning: will not work if inside .ready function
// function togfunc2() {
// 	$("#bar-wrapper").addClass("inactive");
// 	$("#close-nav").addClass("inactive");
// 	$("#nav-toggle").removeClass("inactive");
// };
//closes nav bar when user clicks off of menu
$(document).on("click", function (e) {
        if ($(e.target).is("#bar-wrapper")==false&&$(e.target).is("#nav-toggle")==false&&$(e.target).is("#hamburger")==false) {
         	  $("#bar-wrapper").addClass("inactive");
      			$("#close-nav").addClass("inactive");
      			$("#nav-toggle").removeClass("inactive");
        }
    });




//canvas background
var canvas = document.getElementById('background-canvas');

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

for (var i = 0; i < 75; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 1;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dy = (Math.random() - 0.5) * 1;
  var radius = Math.random() * 7 + 1;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();

