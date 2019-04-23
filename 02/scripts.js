const form = document.querySelector('form')
const switchTo25 = document.querySelector('.switch.is-left')
const switchTo5 = document.querySelector('.switch.is-right')
let taskTime = 5000
const timerLink = document.querySelector('#timer-link')
const statsLink = document.querySelector('#stats-link')
const timerSection = document.querySelector('#timer-section')
const statsSection = document.querySelector('#stats-section')
const footerImg = document.querySelector('footer > img')

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

timerLink.onclick = function () {
  if (timerLink.classList.contains('is-active')) {
    return
  }
  statsSection.style.display = 'none'
  timerSection.style.display = 'block'
  timerLink.classList.toggle('is-active')
  statsLink.classList.toggle('is-active')
  footerImg.src = 'img/timer-section.svg'
}

statsLink.onclick = function () {
  if (statsLink.classList.contains('is-active')) {
    return
  }
  timerSection.style.display = 'none'
  statsSection.style.display = 'block'
  statsLink.classList.toggle('is-active')
  timerLink.classList.toggle('is-active')
  footerImg.src = 'img/stats-section.svg'

  const historySize = localStorage.length
  if (historySize > 0) {
    for (let i = 0; i < historySize; i++) {
      const key = localStorage.key(i)
      const taskName = localStorage.getItem(key)

      const tr = document.createElement('tr')
      const tdDate = document.createElement('td')
      const tdTime = document.createElement('td')
      const tdTask = document.createElement('td')
      tdTask.innerText = taskName
      const tdRemove = document.createElement('td')
      tr.appendChild(tdDate)
      tr.appendChild(tdTime)
      tr.appendChild(tdTask)
      tr.appendChild(tdRemove)
      // const listItem = document.createElement('li')
      // listItem.innerText = taskName
      // tasks.appendChild(listItem)
    }
  }
}

form.onsubmit = function startTimer(e) {
  e.preventDefault()

  const input = e.target.querySelector('input[type=text]')
  const key = Date.now()
  localStorage.setItem(key, input.value)

  setTimeout(function () {
    input.value = ''
  }, taskTime)
}

if (window.location.hash === '#timer-section') {
  statsLink.click()
}

if (window.location.hash === '#stats-section') {
  timerLink.click()
}
