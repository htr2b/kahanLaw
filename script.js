document.addEventListener('DOMContentLoaded', function() {
    /* Preloader Kaldırma */
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    });
  
    /* Hamburger Menü Aç/Kapa */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  
    /* Intersection Observer ile Fade-in Animasyonları */
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
    /* Back to Top Butonu */
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
  
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    /* Hızlı Yardım (Quick Help) Modal Fonksiyonelliği */
    const quickHelpBtn = document.getElementById('quickHelpBtn');
    const quickHelpModal = document.getElementById('quickHelpModal');
    const modalClose = document.querySelector('.modal-content .close');
  
    quickHelpBtn.addEventListener('click', function() {
      quickHelpModal.style.display = 'block';
    });
  
    modalClose.addEventListener('click', function() {
      quickHelpModal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == quickHelpModal) {
        quickHelpModal.style.display = 'none';
      }
    });
  });
  