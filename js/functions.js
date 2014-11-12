jQuery(document).ready(function ($) {

var offsetHeight = 51;

$('body').scrollspy({
    offset: offsetHeight
});

$('.navbar li a').click(function (event) {
    var scrollPos = $('body').find($(this).attr('href')).offset().top - (offsetHeight - 1);

    $('body,html').animate({
        scrollTop: scrollPos
    }, 500, function () {
        $(".btn-navbar").click();
    });
    return false;
});

/**
	// create a smooth scrolling effect
	jQuery('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			|| location.hostname == this.hostname) {

			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					jQuery('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
				return false;
			}
			console.log(target.offset());
		}
	});
//**/
});