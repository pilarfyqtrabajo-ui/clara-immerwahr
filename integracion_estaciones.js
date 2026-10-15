"use strict";
// Intercepta solo los enlaces de pruebas; no altera el lector ni los documentos.
document.addEventListener("click", function(e){
  const a=e.target.closest("a");
  if(!a || !a.closest("#zonas")) return;
  const label=(a.getAttribute("aria-label") || a.title || "").trim().toLowerCase();
  if(label === "las diez pruebas" || label === "ver pruebas") {
    e.preventDefault();e.stopImmediatePropagation();
    window.location.href="estaciones/index.html";
  }
},true);
