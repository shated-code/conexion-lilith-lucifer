const elements=document.querySelectorAll(".sombra p,.card");
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.2});
elements.forEach(el=>observer.observe(el));
const mainCta = document.getElementById('main-cta');
const paymentOptions = document.getElementById('payment-options');

mainCta.addEventListener('click', () => {
  // Alterna visibilidad con efecto suave
  paymentOptions.classList.toggle('hidden');
  setTimeout(() => paymentOptions.classList.toggle('show'), 50);
});