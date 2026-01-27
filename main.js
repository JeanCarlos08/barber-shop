// Mobile Menu & Essential Logic
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

mobileBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileBtn.classList.toggle('active');
});

// Intersection Observer for Reveal animations (THE REVEAL EFFECT)
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
});

document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
});

// Scroll Header Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(5, 5, 5, 0.98)';
    header.style.padding = '0.5rem 0';
  } else {
    header.style.backgroundColor = 'rgba(5, 5, 5, 0.85)';
    header.style.padding = '1rem 0';
  }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        nav.classList.remove('active'); 
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
