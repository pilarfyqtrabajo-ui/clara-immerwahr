(()=>{'use strict';
const ID='clara-cursos-eso-v1', STYLE='clara-cursos-eso-css';
let DATA=null;fetch('cuadernos_eso/datos_cursos.json').then(r=>{if(!r.ok)throw Error('Datos no encontrados');return r.json()}).then(d=>{DATA=d;mount()}).catch(console.error);
if(!document.getElementById(STYLE)){const st=document.createElement('style');st.id=STYLE;st.textContent=`
.ce-landing{display:grid;grid-template-columns:repeat(auto-fit,minmax(245px,1fr));gap:16px;margin:16px 0}.ce-landing-card{background:#f6f0e5;border:1px solid #c6ab78;border-radius:10px;padding:20px}.ce-landing-card h2{margin:8px 0;color:#773d42}.ce-eyebrow{font-size:11px;letter-spacing:.09em;color:#816b4c;font-weight:bold}#ce-selector-cursos,#ce-selector-campo{display:flex;gap:9px;flex-wrap:wrap;margin:16px 0 0}
#ce-selector-cursos button,#ce-selector-campo button,#ce-area button{border:1px solid #9d7951;background:#713e45;color:white;padding:10px 14px;border-radius:6px;cursor:pointer}
#ce-area{font-family:Georgia,serif;color:#263c3e}
#ce-area .ce-paper{background:#f6f0e5;border:1px solid #c6ab78;border-radius:10px;padding:16px;margin:12px 0}
#ce-area .ce-page{display:block;width:100%;max-width:850px;margin:12px auto;border:1px solid #c6ab78}
#ce-area textarea{display:block;box-sizing:border-box;width:100%;min-height:95px;padding:10px;border:1px solid #b5a185;background:#fffdf9;border-radius:6px;font:16px Georgia,serif;resize:vertical}
#ce-area label{display:block;margin:12px 0 5px;font-weight:bold}
#ce-area .ce-buttons{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}
#ce-area .ce-note{font-size:14px;color:#66584c}
`;document.head.append(st)}
let active=null,pageIndex=0;
const get=()=>{try{return JSON.parse(localStorage.getItem(ID+'-'+active)||'{}')}catch{return {}}};
function mount(){
if(!DATA||location.hash!=='#cuadernos')return;
const wrap=document.getElementById('cuaderno-campo');if(!wrap)return;
if(wrap.querySelector('.ce-landing'))return;
active=null;
pageIndex=0;
const selector=document.createElement('div');selector.id='ce-selector';
 const estiloCampo=document.getElementById('clara-visibilidad-campo');
 if(!estiloCampo){
   const estilo=document.createElement('style');
   estilo.id='clara-visibilidad-campo';
   estilo.textContent='#cuaderno-campo.ce-inicio > :not(.ce-landing):not(#ce-area),#cuaderno-campo:not(.ce-campo) > :not(.ce-landing):not(#ce-area){display:none}';
   document.head.append(estilo);
 }
const header=document.createElement('div');header.className='ce-landing';header.innerHTML='<div class="ce-landing-card"><span class="ce-eyebrow">ANTES DE LA INVESTIGACIÓN</span><h2>Lectura y razonamiento</h2><p>Después de leer la historia de Clara Immerwahr, pon a prueba tu comprensión lectora y tu razonamiento matemático. Elige tu curso y completa las actividades.</p><div id="ce-selector-cursos"></div></div><div class="ce-landing-card"><span class="ce-eyebrow">DURANTE LA INVESTIGACIÓN</span><h2>Cuaderno de campo</h2><p>Registra tus observaciones, anota las pistas, contrasta tus hipótesis y construye tus conclusiones mientras resuelves las diez pruebas.</p><div id="ce-selector-campo"></div></div>';
wrap.prepend(header);
[['2','2.º ESO'],['3','3.º ESO'],['4','4.º ESO'],['campo','Cuaderno de campo']].forEach(([k,name])=>{
const b=document.createElement('button');b.type='button';b.textContent=name;b.onclick=()=>{active=k==='campo'?'campo':k;pageIndex=0;render(wrap)};header.querySelector(k==='campo'?'#ce-selector-campo':'#ce-selector-cursos').append(b)});
render(wrap)
}
function render(wrap){
const old=wrap.querySelector('#ce-area');if(old)old.remove();
[...wrap.children].forEach((child,i)=>{if(i>0)child.hidden=active!=='campo'});
wrap.classList.toggle('ce-inicio', !active);
wrap.classList.toggle('ce-campo', active==='campo');
 if(!active||active==='campo')return;
const items=DATA[active],answers=get(),area=document.createElement('div');area.id='ce-area';wrap.append(area);
const page=items[pageIndex],num=page.page;
area.innerHTML=`<div class="ce-paper"><h2>Cuaderno de ${active}.º de ESO</h2><p>Bloque I · Lectura y razonamiento · Actividad ${pageIndex+1} de ${items.length}</p><p class="ce-note">Lee las actividades y escribe tus respuestas. El trabajo se guarda automáticamente en este navegador.</p><div class="ce-buttons"><button id="ce-export">Exportar respuestas</button><button id="ce-clear">Vaciar este cuaderno</button></div><p id="ce-status" role="status">Guardado local activado.</p></div>`;
const img=document.createElement('img');img.className='ce-page';img.src='cuadernos_eso/paginas/'+page.image;img.alt='Página '+num+' del cuadernillo original de '+active+'.º de ESO';img.loading='lazy';area.append(img);
const panel=document.createElement('div');panel.className='ce-paper';
const codes=page.codes.length?page.codes:['Anotaciones de esta página'];
codes.forEach((code,j)=>{
 const key=num+':'+code,label=document.createElement('label'),input=document.createElement('textarea');
 label.textContent=code==='Anotaciones de esta página'?code:'Respuesta a la actividad '+code+' (página '+num+')';
 input.value=answers[key]||'';input.setAttribute('aria-label',label.textContent);
 input.addEventListener('input',()=>{answers[key]=input.value;try{localStorage.setItem(ID+'-'+active,JSON.stringify(answers));area.querySelector('#ce-status').textContent='Respuestas guardadas.'}catch{area.querySelector('#ce-status').textContent='No se ha podido guardar. Exporta tus respuestas.'}});
 panel.append(label,input);
});area.append(panel);
const nav=document.createElement('div');nav.className='ce-buttons';
const prev=document.createElement('button');prev.textContent='← Página anterior';prev.disabled=pageIndex===0;prev.onclick=()=>{pageIndex--;render(wrap);wrap.scrollIntoView({block:'start'})};
const next=document.createElement('button');next.textContent='Página siguiente →';next.disabled=pageIndex===items.length-1;next.onclick=()=>{pageIndex++;render(wrap);wrap.scrollIntoView({block:'start'})};
nav.append(prev,next);area.append(nav);
area.querySelector('#ce-export').onclick=()=>{
const lines=['EL MISTERIOSO CASO DE CLARA IMMERWAHR','CUADERNO '+active+'.º ESO','© M.ª del Pilar Ruiz Lucena',''];
items.forEach(p=>{lines.push('Página '+p.page);(p.codes.length?p.codes:['Anotaciones de esta página']).forEach(c=>lines.push(c,answers[p.page+':'+c]||'(Sin responder)',''))});
const url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='clara_cuaderno_'+active+'_eso.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000)};
area.querySelector('#ce-clear').onclick=()=>{if(!confirm('¿Borrar todas las respuestas del cuaderno de '+active+'.º ESO?'))return;localStorage.removeItem(ID+'-'+active);render(wrap)};
}
window.addEventListener('hashchange',()=>{active=null;setTimeout(mount,80)});
new MutationObserver(()=>{if(location.hash==='#cuadernos')mount()}).observe(document.body,{subtree:true,childList:true});
setTimeout(mount,400);
})();