const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbarList = document.querySelector('.main-nav ul');

mobileMenuIcon.addEventListener('click', () => {
  navbarList.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.main-nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarList.classList.remove('active');
  });
});

