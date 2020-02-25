export function GitHubCounter(data) {

    let counterTemplate = `
        <div class="data-containers" title="${data.title}">
            <div class="icon">
                ${data.svg}
                ${data.type}
            </div>
            <div id="github-${data.type}" class="count"></div>
        </div>
    `

    return counterTemplate
}