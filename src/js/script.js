import navCategories from '../data/nav_categories.js'
import featuredLinks from '../data/featured_links.js'
import skills from '../data/skills.js'
import projects from '../data/projects.js'
import publications from '../data/publications.js'
import contactLinks from '../data/contact_links.js'
import { NavButton } from './components/NavButton.js'
import { ContactButton } from './components/ContactButton.js'
import { SkillCard } from './components/SkillCard.js'
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
    name: 'Skills & Experience',
    target: '.skill-cards-container',
    data: skills,
    component: SkillCard,
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

// Build all sections
sections.map( params => renderElements(params) )

// project card clicking reveals highlights card
const projectCards = document.querySelectorAll('.project-cards')
projectCards.forEach( card => {
  card.addEventListener('click', function() {
    const descriptionCard = this.querySelector('[data-select="project"]')
    const plus = this.querySelector('.plus')

    descriptionCard.classList.toggle('swing-away');
    plus.classList.toggle('plus-rotate');
  })
})

// Github stars and forks

const getTotal = (array, item) => array.reduce((acc, cur) => {
  return acc + cur[item]
}, 0)

const insertGitHubData = (starred, forked) => {
  document.getElementById('github-stars').innerText = starred
  document.getElementById('github-forks').innerText = forked
}

const getGitHubData = () => {
  // TODO add pagination
  fetch('https://api.github.com/users/Syknapse/repos?per_page=100')
    .then(response => response.json())
    .then(data => {
      const starred = getTotal(data, 'stargazers_count')
      const forked = getTotal(data, 'forks_count')
      insertGitHubData(starred, forked)
    })
}

getGitHubData()

// TODO install Babel so we can use async
/* const getGitHubData = async () => {
  // TODO add pagination
  let response = await fetch('https://api.github.com/users/Syknapse/repos?per_page=100')
     return await response.json()
}

const displayGitHubData = () => {
  getGitHubData().then(data => {
    const starred = getTotal(data, 'stargazers_count')
    const forked = getTotal(data, 'forks_count')
    insertGitHubData(starred, forked)
  }).catch(e => console.log(e))

}

displayGitHubData() */


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