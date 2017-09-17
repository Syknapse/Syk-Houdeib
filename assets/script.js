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

// add class to section when clicked from menu to create top padding
$(function(){
	$('nav a').on('click', function(){
		$('section').removeClass('clear-header');
		$($(this).attr('href')).addClass('clear-header');
	});
});