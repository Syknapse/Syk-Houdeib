import navCategories from '../data/nav_categories.js'
import featuredLinks from '../data/featured_links.js'
import projects from '../data/projects.js'
import contactLinks from '../data/contact_links.js'
import { NavButton } from './components/NavButton.js'
import { ContactButton } from './components/ContactButton.js'
import { ProjectCard } from './components/ProjectCard.js'

// Render nav buttons
const navBar = document.querySelector('nav')
const navButtons = navCategories.map( category => NavButton(category) ).join('')
navBar.innerHTML = navButtons

// Render featured links
const featuredLinksContainer = document.querySelector('.home-links-container')
const featuredLinksButtons = featuredLinks.map( contact => ContactButton(contact) ).join('')
featuredLinksContainer.innerHTML = featuredLinksButtons

// Render projects
const projectContainer = document.querySelector('.projects-container')
const projectCards = projects.map( project => ProjectCard(project) ).join('')
projectContainer.innerHTML = projectCards

// Render contact links
const contactContainer = document.querySelector('.contact-links-container')
const contactButtons = contactLinks.map( contact => ContactButton(contact) ).join('')
contactContainer.innerHTML = contactButtons


// Legacy

$(document).ready();

////////// Nav show & hide ///////////////////

$('#nav-btn').on('click', function(){
    $('nav').toggleClass('open');
    $('#nav-btn').toggleClass('open-btn');
});

$('nav a, .full-container').on('click', function(){
    $('nav').removeClass('open');
    $('#nav-btn').removeClass('open-btn');
});


// Nav to section smooth scrolling

var $root = $('html, body');

$('nav a').on('click', function(){
	var anchorName = $(this).attr('href');
	$root.animate({
		scrollTop: $(anchorName).offset().top
	}, 600, function(){
		// add #anchor name to the url
		window.location.hash = anchorName;
	});
	// cache $('html, body') for better performance
	return false
});


// project card clicking icon reveals highlights card

$('.plus').click(function(){
  var descriptionCard = '.description-' + $(this).data('project');
  $(descriptionCard).toggleClass('swing-away');
  $(this).toggleClass('plus-rotate');
});


// ********* waypoints *********

// section titles effect
$('.section-title').waypoint({
  handler: function(direction) {
    if(direction === 'down'){
    	$(this.element).children('.title-secondary').addClass('slide-right');
    	$(this.element).children('.title-tertiary').addClass('slide-left');
    }
  },
  offset: '50%'
})

// nav active section
$('section').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav a i').removeClass('active-nav');
    $('nav a i').eq($(this.element).index()).addClass('active-nav');
  }
}, {
  offset: '20%'
});

$('section').waypoint(function(direction) {
  if (direction === 'up') {
    $('nav a i').removeClass('active-nav');
    $('nav a i').eq($(this.element).index()).addClass('active-nav');
  }
}, {
	// fix offset triggering too late or early because of variable section sizes
  offset: function() {
	  return this.element.offsetHeight / -2;
	}
});