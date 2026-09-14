const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
);

revealElements.forEach((element) => observer.observe(element));

const heroVideo = document.querySelector('.bg-video');
if (heroVideo) {
  window.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY * 0.08, 40);
    heroVideo.style.transform = `scale(1.06) translateY(${y}px)`;
  });
}
