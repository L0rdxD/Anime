const scrollToTop = () => {
    const topBtn = document.querySelector('#scrollToTopButton')

    if (!topBtn) {
        return
    }

    topBtn.addEventListener('click', (event) => {
        event.preventDefault()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

scrollToTop()
