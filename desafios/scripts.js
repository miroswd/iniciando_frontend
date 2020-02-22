const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll(".card")

// Icons

const exit = document.querySelector('.exit')
const fullscreen = document.querySelector('.fullscreen')

for (let card of cards ){
  card.addEventListener("click",function(){
    modalOverlay.classList.add('active');

    const webId = card.getAttribute("id")
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${webId}`
  })
}

modalOverlay.querySelector('.close-modal').addEventListener('click',function(){
  modalOverlay.classList.remove('active');
})

/*Expandindo o modal*/
document.querySelector(".fullscreen").addEventListener("click",function(){
  modal.classList.add('fullscreen')
  fullscreen.classList.add('disable')
  exit.classList.add('active')
})

document.querySelector('.exit').addEventListener('click',function(){
  modal.classList.remove('fullscreen')
  fullscreen.classList.remove('disable')
  exit.classList.remove('active')
})