document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const navbarList = document.querySelector('.main-nav ul');
  mobileMenuIcon.addEventListener('click', () => {
    navbarList.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.main-nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const parent = this.closest('.submenu-parent');
      if (!parent || !parent.querySelector('.submenu')) {
        navbarList.classList.remove('active');
      }
    });
  });

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  
  function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top;
    const startTime = performance.now();
  
    function scroll() {
      const currentTime = performance.now();
      const time = Math.min(1, (currentTime - startTime) / duration);
      const easedTime = easeInOutQuad(time);
      window.scrollTo(0, start + targetPosition * easedTime);
      if (time < 1) {
        requestAnimationFrame(scroll);
      }
    }
    scroll();
  }
  
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#main" || targetId === "#about" || targetId === "#footer") {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          smoothScrollTo(targetSection, 500);
        }
      }
    });
  });
  
  const submenuParents = document.querySelectorAll('.submenu-parent');
  submenuParents.forEach(item => {
    const anchor = item.querySelector('a');
    if (item.querySelector('.submenu')) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        item.classList.toggle('active');
      });
    }
  });
});
