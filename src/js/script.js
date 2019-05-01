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


// NAv to section smooth scrolling

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

// Refactor

const projects = [
  {
    title: 'City/state search',
    subtitle: 'Type-ahead search by US city or state name, see population',
    technologies: ['Javascript', 'ES6'],
    web_link: 'https://syknapse.github.io/Ajax-Type-Ahead',
    github_link: 'https://github.com/Syknapse/Ajax-Type-Ahead',
  },
  {
    title: 'Clock',
    subtitle: 'A working javascript clock with CSS design',
    technologies: ['Javascript', 'ES6'],
    web_link: 'https://syknapse.github.io/Clock',
    github_link: 'https://github.com/Syknapse/Clock',
  },
  {
    title: 'warf',
    subtitle: 'mehezeninki',
    technologies: ['Javascript', 'ES6'],
    web_link: 'https://syknapse.github.io/Clock',
    github_link: 'https://github.com/Syknapse/Clock',
  },
]



function setProjectTemplate(project) {
  let projectTemplate = `<div class="project-cards">
  <div class="plus" data-project="type-ahead"><i class="fa fa-plus-square-o fa-fw" aria-hidden="true"></i></div>
  <div class="project-card-description description-type-ahead">
    <div class="project-image"><img src="assets/images/typeAhead.jpg" alt="Project screenshot"></div>
    <h3>${project.title}</h3>
    <p>${project.subtitle}</p>
  </div>
  <div class="project-card-highlights">
    <h4>Highlights</h4>
    <ul>
      <li>An exercise in search functions</li>
      <li>Shows results as user types, highlighting typed letters</li>
      <li>Ajax, API, JSON</li>
      <li>Filtering, mapping, pushing, Regex, </li>
    </ul>
    <p><strong>${project.technologies}</strong></p>
    <div>
      <a href="${project.web_link}" target="_blank"><i class="fa fa-eye fa-fw" aria-hidden="true"></i></a>
      <a href="${project.github_link}" target="_blank"><i class="fa fa-github fa-fw" aria-hidden="true"></i></a>
    </div>
  </div>
  </div>`

  return projectTemplate
}

const projectContainer = document.querySelector('.projects-container')
const projectCards = projects.map( project => setProjectTemplate(project) ).join('')
projectContainer.innerHTML = projectCards