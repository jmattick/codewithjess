$(document).ready(function(){
	//Adds email address to footer
	var username = "contact";
	var hostname = "codewithjess.com";
	var linktext = username + "@" + hostname;
	$("#contact").prepend("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
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
