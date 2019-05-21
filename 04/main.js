let button = document.querySelector('button')
let nav = document.querySelector('nav')

function toggleMenuVisible() {
  nav.classList.toggle('is-hidden')
}

button.onclick = toggleMenuVisible
