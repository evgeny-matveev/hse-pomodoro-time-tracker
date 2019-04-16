const form = document.querySelector('form')
const switchTo25 = document.querySelector('.switch.is-left')
const switchTo5 = document.querySelector('.switch.is-right')
let taskTime = 5000

switchTo25.onclick = function handleTimeSwitch() {
  if (switchTo25.classList.contains('is-active')) {
    return
  }
  switchTo25.classList.toggle('is-active')
  switchTo5.classList.toggle('is-active')
  taskTime = 5000
}

switchTo5.onclick = function handleTimeSwitch() {
  if (switchTo5.classList.contains('is-active')) {
    return
  }
  switchTo5.classList.toggle('is-active')
  switchTo25.classList.toggle('is-active')
  taskTime = 1000
}

form.onsubmit = function startTimer(e) {
  e.preventDefault()

  const input = e.target.querySelector('input[type=text]')

  setTimeout(function () {
    console.log(input.value)
  }, taskTime)
}
