let galleryImages = document.querySelectorAll(".gallery-image")
let button = document.querySelectorAll(".question-title + span")
let answers = document.querySelectorAll(".question-answer")
let Dnone = document.querySelectorAll(".d-none")
let buttons = document.querySelectorAll(".zoom")
let images = document.querySelectorAll(".grid-image")
let modal = document.querySelector(".modal")
let closeZoom = document.querySelector(".exit")
let modelMain = document.querySelector(".modal-main-image")
let modelImages = ["url('img/grid-img-1.jpg')", "url('img/grid-img-2.jpg')", "url('img/grid-img-3.jpg')", "url('img/grid-img-4.jpg')"]
let navToggle = document.querySelector(".side-toggle")
let navOpen = document.querySelector(".sidenav")
let navClose = document.querySelector(".sidebar-exit")
let sideLinks = document.querySelectorAll(".sidenav-link")

let buttonClick = false

navToggle.addEventListener("click", function () {
  navOpen.style.display = "block"
  if (buttonClick === false) {
    navOpen.style.animation = "pop-in .3s";
  }
  buttonClick = true
})

navClose.addEventListener("click", function () {
  // navOpen.style.animationDirection = "reverse";
  navOpen.style.display = "none"
  if (buttonClick === true) {
    navOpen.style.animation = "pop-out .3s";
  }
  buttonClick = false
})

for (let i = 0; i < sideLinks.length; i++) {
  sideLinks[i].addEventListener("click", function () {
    navOpen.style.display = "none"
  })
}

for (let i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("mouseover", function () {
    Dnone[i].classList.add("d-block")
  })

  galleryImages[i].addEventListener("mouseout", function () {
    Dnone[i].classList.remove("d-block")
    modelMain.style.background = modelImages[i];
    modelMain.style.backgroundPosition = "center center"
    modelMain.style.backgroundSize = "cover"
  })
}

for (let i = 0; i < answers.length; i++) {
  button[i].addEventListener("click", function () {
    answers[i].classList.toggle("d-block")

  })
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    modal.classList.add("block-display")
    document.body.style.background = "#f3f3f3";
  })
}

closeZoom.addEventListener("click", function () {
  modal.classList.remove("block-display")
})



