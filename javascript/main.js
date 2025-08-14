AOS.init({
    once: true
});
let menuBtn = document.querySelector('.header-nav--menu');
let headerSidebar = document.querySelector('.header-sidebar');
let sidebarClosebtn = document.querySelector('.header-sidebar--closebtn');
let sidebarShadow = document.querySelector('.header-sidebar--shadow');

menuBtn.addEventListener('click', () => {
    headerSidebar.classList.add('active');
    sidebarShadow.classList.add('active');
})
sidebarClosebtn.addEventListener('click', () => {
    headerSidebar.classList.remove('active');
    sidebarShadow.classList.remove('active');
})
sidebarShadow.addEventListener('click', () => {
    headerSidebar.classList.remove('active');
    sidebarShadow.classList.remove('active');
})
