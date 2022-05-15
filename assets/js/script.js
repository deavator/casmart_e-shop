'use strict';

// Navbar toggle by using buttons
const   overlay = document.querySelector("[data-overlay]"),
        navOpenBtn = document.querySelector("[data-nav-open-btn]"),
        navCloseBtn = document.querySelector("[data-nav-close-btn]"),
        navbar = document.querySelector("[data-navbar]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

navElemArr.forEach(item => {
    item.addEventListener('click', () => {
        overlay.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});

// Add active class on header when scrolled 200px from top
const header = document.querySelector("[data-header]");

window.addEventListener('scroll', () => {
    window.scrollY >= 200 ? 
    header.classList.add("active") :  
    header.classList.remove("active");
});