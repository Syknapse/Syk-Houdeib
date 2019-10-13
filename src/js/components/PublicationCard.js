export function PublicationCard(publication) {

    let publicationTemplate = `
        <div class="publication-cards">
            <a href="${publication.web_link}" target="_blank">
                <div class="publication-card-description" data-select="publication" >
                    <div class="publication-image"><img src="${publication.image.src}" alt="${publication.image.alt}"></div>
                    <h3>${publication.title}</h3>
                    <p>${publication.subtitle}</p>
                </div>
            </a>
        </div>`

    return publicationTemplate
  }