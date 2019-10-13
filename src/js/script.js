import navCategories from '../data/nav_categories.js'
import featuredLinks from '../data/featured_links.js'
import projects from '../data/projects.js'
import publications from '../data/publications.js'
import contactLinks from '../data/contact_links.js'
import { NavButton } from './components/NavButton.js'
import { ContactButton } from './components/ContactButton.js'
import { ProjectCard } from './components/ProjectCard.js'
import { PublicationCard } from './components/PublicationCard.js'

const sections = [
  {
    name: 'Nav Buttons',
    target: 'nav',
    data: navCategories,
    component: NavButton,
  },
  {
    name: 'Featured Links',
    target: '.home-links-container',
    data: featuredLinks,
    component: ContactButton,
  },
  {
    name: 'Projects',
    target: '.projects-container',
    data: projects,
    component: ProjectCard,
  },
  {
    name: 'Publications',
    target: '.publications-container',
    data: publications,
    component: PublicationCard,
  },
  {
    name: 'Contact Links',
    target: '.contact-links-container',
    data: contactLinks,
    component: ContactButton,
  },
]

function renderElements(params) {
  const container = document.querySelector(params.target)
  const elements = params.data.map( item => params.component(item) ).join('')
  container.innerHTML = elements

}

sections.map( params => renderElements(params) )


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

$('.plus').click(function(e){
  var descriptionCard = $(this).siblings('[data-select="project"]');
  descriptionCard.toggleClass('swing-away');
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