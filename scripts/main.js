// Open / Close Menu

let menuButton = document.querySelector(".header-menu");
let headerMobileMenu = document.querySelector(".header-nav-menu");

menuButton.addEventListener("click", () => {
  headerMobileMenu.classList.toggle("active");

  headerMobileMenu.classList.contains('active')
    ? (headerMobileMenu.style.display = "block")
    : (headerMobileMenu.style.display = "none");
});
