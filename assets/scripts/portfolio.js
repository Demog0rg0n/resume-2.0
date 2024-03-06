const tabs = document.querySelectorAll(".portfolio__tab")

const portfolioItems = document.querySelectorAll('.portfolio__item')

setPortfolioType("React/JS")

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active")
        })
        const type = tab.textContent
        tab.classList.add("active")
        setPortfolioType(type)
    })
})

function setPortfolioType(type) {
    portfolioItems.forEach((item) => {
        if(item.getAttribute("data-portfolio-type") == type) {
            item.classList.remove("hidden")
            item.classList.add("visible")
        } else {
            item.classList.remove("visible")
            item.classList.add("hidden")
        }
    })
}