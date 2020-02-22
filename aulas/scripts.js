/* Abrindo o modal */
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card') // Pegando uma coleção de valores iguais

// Para um dos card de cards
for(let card of cards){
  card.addEventListener("click", function(){
    modalOverlay.classList.add("active") // Adicionando a class active na div
  
    /* Mudando o conteúdo */
    const videoId = card.getAttribute("id")
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
  
  }) // Função que ouve eventos
}

/* Fechando o modal */
document.querySelector(".close-modal").addEventListener("click",function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = "" // Buscando uma url vazia, removendo o áudio
})

