const preloader = document.querySelector('.preloder')
// активирует прелоадер
preloader.classList.add('active')

//удаляет класс active через 500 секунд
setTimeout(() => {
    preloader.classList.remove('active')
}, 500)