// load home page
window.addEventListener('load', () => {
    window.location.hash = ('#home');
})

// GUI elements
const smMenuSideBar = document.querySelector(".sm-menu");


function showSideBar(){
    smMenuSideBar.style.display = "flex";
}


function hideSideBar(){
    smMenuSideBar.style.display = "none";
}