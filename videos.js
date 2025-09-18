 
// Lazy play friendly (keeps YouTube lightweight)
document.querySelectorAll('iframe').forEach((f)=>{
  f.setAttribute('loading','lazy');
  f.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
});
// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));