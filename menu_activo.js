/* Indicador accesible de la sección actual; no modifica el contenido de la app. */
(()=>{
 const destinos=['inicio','biblioteca','pruebas','cuadernos','audios','valoraciones','privado'];
 const css=document.createElement('style');css.textContent=`
 #zonas .zona.clara-menu-seleccionado{box-shadow:inset 0 -4px 0 #e2b66a;background:linear-gradient(to top,rgba(226,182,106,.20),transparent 45%);}
 #zonas .zona.clara-menu-seleccionado:focus-visible{outline:2px solid #f2cf85;outline-offset:-2px;}
 `;document.head.append(css);
 function actualizar(){
  const destino=decodeURIComponent(location.hash.slice(1))||'inicio';
  const botones=[...document.querySelectorAll('#zonas .zona')].filter(a=>destinos.includes(a.dataset.destino)&&parseFloat(a.style.top)<3);
  botones.forEach(a=>{
   const activo=a.dataset.destino===destino;
   a.classList.toggle('clara-menu-seleccionado',activo);
   if(activo)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
 }
 window.addEventListener('hashchange',actualizar);
 document.addEventListener('click',e=>{if(e.target.closest('#zonas'))setTimeout(actualizar,0)});
 document.addEventListener('DOMContentLoaded',actualizar);
 actualizar();
})();
