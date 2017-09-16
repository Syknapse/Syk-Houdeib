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
    });
});
