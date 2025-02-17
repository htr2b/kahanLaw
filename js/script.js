const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbarList = document.querySelector('.main-nav ul');

mobileMenuIcon.addEventListener('click', () => {
  navbarList.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
