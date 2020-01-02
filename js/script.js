

// $(window).resize(function(){
// 	location.reload();
// });

window.addEventListener('resize', function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth < 1025) {
    location.reload();
  }
}, false);



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