export function ContactButton(contact) {
  let buttonTemplate = `<div class="${contact.style}">
    <a href="${contact.link}" target="_blank" title="${contact.title}">
        <i class="fa ${contact.icon} fa-fw" aria-hidden="true"></i>
        <span class='contact-title' style="${contact.showTitle ? "display: inline" : "display: none"}">${
    contact.title
  }</span>
    </a>
</div>`

  return buttonTemplate
}
