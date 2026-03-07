const elements = document.querySelectorAll('.set-bg')

//отвечает за вывод картинок
for (let i = 0; i < elements.length; i++) {
    const src = elements[i].dataset.setbg

    //отвечает за подключеине пути картинки
    elements[i].style.backgroundImage = `url(${src})`
}