//отвечает за вывод картинок
const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg')

    elements.forEach((elem) => {
        //отвечает за подключеине пути картинки
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`
    })
}

bgElements()

