// Write your functin here
const toolBar = document.querySelector('.menu-img');
const mobileNav = document.querySelector('.mobile-menu');
const cancelX = document.querySelector('.cancel');
const navList = document.querySelector('#mobile-nav-bar');

const displayMobileMenu = () => {
  mobileNav.style.display = (mobileNav.style.display === 'none') ? 'block' : 'none';
};

const hideMobileMenu = () => {
  mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
};

const hideMenu = () => {
  mobileNav.style.display = 'none';
};

cancelX.addEventListener('click', hideMobileMenu);
toolBar.addEventListener('click', displayMobileMenu);
navList.addEventListener('click', hideMenu);
