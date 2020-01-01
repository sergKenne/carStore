//function refresh page in body 
// function refresh() {
//    location.reload(); 
// }

$(window).resize(function(){
	location.reload();
});



$(document).ready(function() {
	
	$(".js-main-btn").click(function() {

	 	 $(".main-menu__list").slideToggle();

	});


	window.onscroll = function() {

		var windowWidth = $(window).width();

		if (windowWidth > 768) {

			if(window.pageYOffset > 102)   {

				$("#nav").css({position: "fixed", top: 0, "z-index": 9999});

			}else {

				$("#nav").css({position: "relative", top: 0}); 

			}

		}
	
	}

  
}); //end ready function