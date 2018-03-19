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
