export function ProjectCard(project) {
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