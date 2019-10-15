export function ProjectCard(project) {

  let projectTemplate = `<div class="project-cards">
      <div class="plus" title="Click to rotate"><i class="fa fa-plus-square-o fa-fw" aria-hidden="true"></i></div>
      <div class="project-card-description" data-select="project" title="Click to reveal project details">
        <div class="project-image"><img src="${project.image.src}" alt="${project.image.alt}"></div>
        <h3>${project.title}</h3>
        <p>${project.subtitle}</p>
      </div>
      <div class="project-card-highlights">
        <h4>Highlights</h4>
        <ul>
          ${project.highlights.map( highlight => `<li>${highlight}</li>` ).join('')}
        </ul>
        <p><strong>${project.technologies.map( technology => `${technology}` ).join(' ')}</strong></p>
        <div>
          <a href="${project.web_link}" target="_blank" title="View project site"><i class="fa fa-eye fa-fw" aria-hidden="true"></i></a>
          <a href="${project.github_link}" target="_blank" title="View on GitHub"><i class="fa fa-github fa-fw" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>`

  return projectTemplate
}