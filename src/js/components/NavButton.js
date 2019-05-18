export function NavButton(category) {

    let buttonTemplate = `<a id="menu-btn-${category.key}" href="#${category.key}"><i class="fa ${category.icon} fa-fw" aria-hidden="true"></i> ${category.key}</a>`

    return buttonTemplate
}