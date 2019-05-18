export function ContactButton(contact) {

    let buttonTemplate = `<div class="${contact.style}">
    <a href="${contact.link}" target="_blank" title="${contact.title}">
        <i class="fa ${contact.icon} fa-fw" aria-hidden="true"></i>
    </a>
</div>`

    return buttonTemplate
}