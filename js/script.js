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

document.addEventListener("DOMContentLoaded", function () {
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
      if (targetId === "#main" || targetId === "#about" || targetId === "#contact") {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          smoothScrollTo(targetSection, 500);
        }
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const servicesItem = document.querySelector('.services > a');
  servicesItem.addEventListener('click', function (e) {
    e.preventDefault();
    const parentLi = this.parentElement;
    parentLi.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const submenuParent = document.querySelector('.submenu-parent');
  const submenuToggle = document.querySelector('.submenu-toggle');
  const submenu = document.querySelector('.submenu');

  submenuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    submenu.classList.toggle('active');
  });

  document.addEventListener('click', function (e) {
    if (!submenuParent.contains(e.target)) {
      submenu.classList.remove('active');
    }
  });
});
document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const submenu = this.nextElementSibling;
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.submenu-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const parentLi = this.parentElement;
      const submenu = parentLi.querySelector('.submenu');
      submenu.classList.toggle('open');
    });
  });
});