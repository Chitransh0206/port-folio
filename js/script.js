// Highlight the nav link for the section currently on screen
const links = document.querySelectorAll('nav ul a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('on', l.hash === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('section[id]').forEach(s => observer.observe(s));