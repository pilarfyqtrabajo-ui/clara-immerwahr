(()=>{
"use strict";
const KEY="clara-laboratorio-v1";
const m=location.pathname.match(/\/estaciones\/(\d{2})\/(?:index\.html)?$/);
const n=m?Number(m[1]):0;
if(!n||n>10)return;
const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||"{}")}catch{return {}}};
const write=()=>{const v=read();if(!v[n]){v[n]=true;localStorage.setItem(KEY,JSON.stringify(v));window.dispatchEvent(new Event("clara-progreso"))}};
const $=id=>document.getElementById(id);
const shown=id=>{const e=$(id);return !!e&&!e.hidden&&!e.classList.contains("hidden")&&!e.classList.contains("locked")&&getComputedStyle(e).display!=="none"};
function completed(){
 switch(n){
 case 1:return ($("respuesta")?.textContent||"").startsWith("Correcto.")&&($("resultado")?.textContent||"").startsWith("Código correcto");
 case 2:return shown("unlock");
 case 3:return $("next")?.classList.contains("show")===true;
 case 4:return shown("revelacion");
 case 5:return shown("reveal");
 case 6:return shown("success");
 case 7:return shown("reveal");
 case 8:return shown("reveal");
 case 9:return shown("next");
 case 10:return shown("ending");
 }
 return false;
}
const nav=document.createElement("nav");
nav.id="clara-navegacion-global";
nav.setAttribute("aria-label","Navegación del laboratorio");
nav.innerHTML='<a href="../../index.html#inicio">⌂ Inicio</a><a href="../../index.html#pruebas">⚗ Laboratorio</a><span id="clara-contador" aria-live="polite"></span><a id="clara-siguiente" hidden href="#">Siguiente prueba →</a>';
document.body.prepend(nav);
const next=$("clara-siguiente");
if(n<10)next.href=`../${String(n+1).padStart(2,"0")}/index.html`;
const notice=document.createElement("div");
notice.id="clara-estado-superado";notice.setAttribute("role","status");
notice.hidden=true;
notice.textContent=n===10?"✓ Has completado las diez estaciones. Puedes volver al Laboratorio.":`✓ Prueba ${n} superada. Ya puedes continuar a la prueba ${n+1}.`;
nav.after(notice);
function refresh(){
 const data=read();
 const total=Array.from({length:10},(_,i)=>data[i+1]?1:0).reduce((a,b)=>a+b,0);
 $("clara-contador").textContent=`Progreso: ${total}/10`;
 const done=!!data[n];
 notice.hidden=!done;
 if(n<10)next.hidden=!done;
}
function check(){
 if(completed())write();
 refresh();
}
let pending=false;
const schedule=()=>{if(pending)return;pending=true;setTimeout(()=>{pending=false;check()},0)};
document.addEventListener("click",schedule,true);
document.addEventListener("input",schedule,true);
document.addEventListener("change",schedule,true);
new MutationObserver(schedule).observe(document.querySelector("main")||document.body,{subtree:true,childList:true,attributes:true,characterData:true,attributeFilter:["class","hidden"]});
refresh();
schedule();
})();