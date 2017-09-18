$(document).ready();

////////// Nav show & hide ///////////////////

$(function(){
    $('#nav-btn').on('click', function(){
        $('nav').toggleClass('open');
        $('#nav-btn').toggleClass('open-btn');
    });
});

$(function(){
	// refactor?? clicking anywhere on nav, and only on sections
    $('nav, section').on('click', function(){
        $('nav').removeClass('open');
        $('#nav-btn').removeClass('open-btn');
    });
});

// NAv to section add class to section when clicked from menu to clear header
$(function(){
	$('nav a').on('click', function(){
		$('section').removeClass('clear-header');
		$($(this).attr('href')).addClass('clear-header');
	});
});

// project card clicking icon reveals highlights card
$(function(){
	$('.plus').on('click', function(){
		// $('section').removeClass('clear-header');
		$('.project-card-description').toggleClass('swing-away');
	});
});