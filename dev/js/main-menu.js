const toggleMenu = document.getElementById("toggle-menu");
const sideBar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", (e)=>{
    if(e.target.id==='toggle-menu' || e.target.parentElement.id==='toggle-menu'){
        sideBar.classList.toggle("show");
        toggleMenu.classList.toggle("show");
    }
});