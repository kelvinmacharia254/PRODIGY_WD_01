// load home page on initial load
window.addEventListener('load', () => {
    window.location.hash = ('#home');
})

// GUI elements
const smMenuSideBar = document.querySelector(".sm-menu");
const toggleButton = document.querySelector("#toggle-button");
const closeSideBarButton = document.querySelector("#close-side-bar");


// open sidebar nav menu
toggleButton.addEventListener("click", () => smMenuSideBar.style.display = "flex");
// close sider nav menu
closeSideBarButton.addEventListener("click", () => smMenuSideBar.style.display = "none");
