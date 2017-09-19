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

// $(function(){
// 	$('.plus').on('click', function(){
// 		// $('section').removeClass('clear-header');
// 		$('.project-card-description').toggleClass('swing-away');
// 	});
// });


$('.plus').click(function(){
  var descriptionCard = '.description-' + $(this).data('project');
  // $('.exp-info').not(infoPanel).hide();
  $(descriptionCard).toggleClass('swing-away');
});

// $('.exp-icons').click(function(){
//   var infoPanel = '.exp-info-' + $(this).data('info');
//   $('.exp-info').not(infoPanel).hide();
//   $(infoPanel).toggle();


// $(function(){
// 	$('.plus').on('click', function(){
// 		$('.project-card-description').removeClass('swing-away');
//     	$(".project-card-description").eq($(this.element).index()).addClass('swing-away');
// 	});
// });


	


// var buttons = $('.plus');
// for(var i = 0, i < buttons.length; i++){
// 	buttons[i].on('click', function(){
// 		// $('section').removeClass('clear-header');
// 		$('.project-card-description').toggleClass('swing-away');
// 	});
// }