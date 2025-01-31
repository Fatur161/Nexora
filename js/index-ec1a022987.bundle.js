const hamburgerButton = document.getElementById('hamburgerMenu')
const navbarMenu = document.querySelector('.header__nav')
const body = document.querySelector('body')

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active')
  navbarMenu.classList.toggle('active')
  body.classList.toggle('no-scroll')
})

const tabBtns = document.querySelectorAll('.tab-btn')
const tabContent = document.querySelectorAll('.tab-content__pane')

function open (target) {
  const tabTarget = target.currentTarget
  const button = tabTarget.dataset.button
  tabBtns.forEach((btn) => {
    btn.classList.remove('active')
  })
  tabTarget.classList.add('active')
  tabContent.forEach((content) => {
    content.classList.remove('tab-content__pane--show')
  })

  document.querySelector(`#${button}`).classList.add('tab-content__pane--show')
}

tabBtns.forEach((btn) => {
  btn.addEventListener('click', open)
})
