export default function() {
  const scrollEl = document.getElementById('scroll-down');
  const frontPageEl = document.getElementById('front');
  scrollEl.addEventListener('click', () => window.scrollTo({ top: frontPageEl.clientHeight, behavior: 'smooth' }));
}