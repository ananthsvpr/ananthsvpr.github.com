/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 
		1250, 
		'easeInOutExpo',
		function()
		{
			$("#navbar-name").remove();
			$(".navbar-header").append('<a class="navbar-brand page-scroll" href="#page-top" id="navbar-name">ANANTH</a>');
		});
        event.preventDefault();
		
	  });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51,
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '50px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
	
	//find scroll position
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		//console.log("scroll: "+scroll);
		
		if(scroll >=0 && scroll <=120)
		{
			$("#navbar-name").remove();
		}
		else
		{
			$("#navbar-name").remove();
			$(".navbar-header").append('<a class="navbar-brand page-scroll" href="#page-top" id="navbar-name">ANANTH</a>');
		}
	});
	
})(jQuery); // End of use strict
