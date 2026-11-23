document.addEventListener('DOMContentLoaded',()=>{
  const header=document.querySelector('.site-header');
  const toggle=document.querySelector('.menu-toggle');
  if(header&&toggle){
    toggle.addEventListener('click',()=>{
      const expanded=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!expanded));
      header.classList.toggle('nav-open',!expanded);
    });
    document.querySelectorAll('.site-nav a').forEach(link=>link.addEventListener('click',()=>{
      header.classList.remove('nav-open');toggle.setAttribute('aria-expanded','false');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(node=>node.textContent=String(new Date().getFullYear()));
});
