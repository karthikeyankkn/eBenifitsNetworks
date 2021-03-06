$(document).ready(function(){

	// navbar script
	$(".parent-nav-li").click(function(){
		$(this).children(".child-nav-ul").toggleClass("max-height-1000px");
		$(this).children("div").toggleClass("parent-nav-li-active");
		$(this).siblings().children(".child-nav-ul").removeClass("max-height-1000px");
		$(this).siblings(".parent-nav-li").children("div").removeClass("parent-nav-li-active")
	});

	$(".child-nav-li").click(function(e){
		e.stopPropagation();
	});

	$(".ebn-hamburger").click(function(){
		$(".ebn-main-container").toggleClass("w-90");
		$(".ebn-navbar-container").toggleClass("w-10");
		$(".parent-nav-li div").children(".nav-icon-toggle").toggleClass("m-auto").siblings().toggleClass("display-none");
		//$(".logo").attr("src","assets/images/logo-S.png").toggleClass("w-50px");
		$(".logo-large").toggle();
		$(".logo-small").toggleClass("display-none");
	});

	$(".dahboard-tile").hover(function(){
		$(this).children("b").toggleClass("text-light");
	});

	//wizard navigation
	$(".wizard-next").click(function(){
		$(this).parents("li").hide().next("li").show();
	});
	$(".wizard-previous").click(function(){
		$(this).parents("li").hide().prev("li").show();
	});

	//navbar Responsive
	function responsiveNavbar(x) {
	  if (x.matches) { // If media query matches
	    $(".parent-nav-li div").children(".nav-icon-toggle").toggleClass("m-auto").siblings().toggleClass("display-none");
	    $(".logo-large").toggle();
		$(".logo-small, .ebn-hamburger").toggleClass("display-none");

	  } else {
	   	return false;
	  }
	}

	var x = window.matchMedia("(max-width: 700px)")
	responsiveNavbar(x) // Call listener function at run time
	x.addListener(responsiveNavbar) // Attach listener function on state changes
});