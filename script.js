// Write your functin here
const toolBar = document.querySelector('.menu-img');
const mobileNav = document.querySelector('.mobile-menu');
const cancelX = document.querySelector('.cancel');
const navList = document.querySelector('#mobile-nav-bar');

function displayMobileMenu() {
  if (mobileNav.style.display === 'none') mobileNav.style.display = 'block';
  else mobileNav.style.display = 'none';
}