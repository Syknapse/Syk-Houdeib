export function SkillCard(data) {

    let skillTemplate = `
        <div class="skill-cards">
            <h3>${data.title}</h3>
            <h4>${data.subtitle}</h4>
            <ul>
                ${data.highlights.map( highlight => `
                    <li class="skill-card-highlight">
                        <strong>${highlight.title}</strong> ${highlight.text}
                    </li>` ).join('')
                }
            </ul>
            <p><strong>${data.additional}</strong></p>
        </div>
    `

    return skillTemplate
}