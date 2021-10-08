document.addEventListener("DOMContentLoaded", () => {

    const floatingMenu = document.querySelector(".floating-menu");
    document.querySelector(".menu-icon").addEventListener("click", e => {
        floatingMenu.classList.add("floating-menu-open");

    })
    document.querySelector(".close-icon").addEventListener("click", e => {
        floatingMenu.classList.remove("floating-menu-open");
    })

    const ticker = document.querySelector('.ticker'),
        list = document.querySelector('.ticker-list'),
        clone = list.cloneNode(true)

    ticker.append(clone)
})