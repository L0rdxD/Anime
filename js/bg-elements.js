//отвечает за вывод картинок
const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg')

    elements.forEach((elem, index) => {
        const src = elem.dataset.setbg
        if (!src) return

        const img = new Image()

        img.onload = () => {
            elem.style.backgroundImage = `url(${src})`
        }

        img.onerror = () => {
            // запасная локальная картинка, если внешний хост блокирует
            const fallbackIndex = (index % 6) + 1
            const fallback = `img/trending/trend-${fallbackIndex}.jpg`
            elem.style.backgroundImage = `url(${fallback})`
        }

        img.src = src
    })
}

bgElements()

