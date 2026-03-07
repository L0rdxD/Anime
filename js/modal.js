const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = modal.querySelector('.search-close-switch')

//отвечает за открытие окна поиска
modalBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})
//отвечает за закрытие окна поиска
modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})