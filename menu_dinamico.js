"use strict";
(()=>{
const names=['Bloque I · Parte 1 · Relato ilustrado','Bloque I · Parte 2 · Lectura, comprensión lectora y razonamiento matemático','Bloque II · Cuaderno de investigación','Bloque III · Guía docente','Bloque IV · Dossier operativo','Bloque V · Cuaderno de campo','Bloque VI · Inclusión y accesibilidad','Bloque VII · Protocolos','Anexo · Materiales imprimibles'];
const titles=['Huellas en el arma','La copa de vino envenenada','La sangre que no era sangre','El líquido azul de la limpiadora','La carta del gas mostaza','El documento encriptado y el compuesto X','La ciencia ante el espejo','El agua especial','El perfume y el mensaje final','La geometría final y la clave del botiquín'];
const sections={inicio:'Inicio',biblioteca:'Biblioteca digital',pruebas:'Las diez pruebas',cuadernos:'Cuadernos interactivos',audios:'Archivo sonoro',valoraciones:'Valoraciones educativas',privado:'Panel privado'};
const host=document.getElementById('contenido-dinamico');
const getProgress=()=>{try{return JSON.parse(localStorage.getItem('clara-laboratorio-v1')||'{}')}catch{return {}}};
const el=(tag,cls,text)=>{let x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x};
function render(which){if(!sections[which])which='inicio';host.replaceChildren();const panel=el('section','panel-dinamico');host.append(panel);const head=el('div','panel-cabecera');panel.append(head);head.append(el('p','etiqueta','EL MISTERIOSO CASO DE CLARA IMMERWAHR'));head.append(el('h1','',sections[which]));
// clara-accesos-inicio-v1: solo los botones de la presentación inferior.
if(which==='inicio'){
 head.append(el('p','intro','Ciencia, ética y memoria a través de una investigación de laboratorio. Selecciona un apartado en el menú superior.'));
 const actions=el('div','clara-accesos-inicio');
 const add=(label,fn)=>{const btn=el('button','boton-clara',label);btn.type='button';btn.onclick=fn;actions.append(btn)};
 add('Abrir el expediente',()=>{if(typeof window.claraAbrirExpediente==='function')window.claraAbrirExpediente()});
 add('Escuchar el archivo sonoro',()=>render('audios'));
 add('Abrir el laboratorio',()=>render('pruebas'));
 add('Abrir el cuaderno de campo',()=>{
   render('cuadernos');
   const find=()=>{const btn=document.querySelector('#ce-selector-campo button');if(btn){observer.disconnect();clearTimeout(limit);btn.click();return true}return false};
   const observer=new MutationObserver(find);
   observer.observe(host,{subtree:true,childList:true});
   const limit=setTimeout(()=>observer.disconnect(),10000);
   find();
 });
 panel.append(actions);
}
if(which==='biblioteca'){head.append(el('p','intro','Nueve documentos originales disponibles para su lectura en línea.'));const grid=el('div','rejilla-documentos');panel.append(grid);names.forEach((name,i)=>{const card=el('article','documento');const cover=el('img');cover.src=`imagenes/portadas/${i+1}.webp`;cover.alt=`Portada original: ${name}`;cover.loading='lazy';card.append(cover,el('h2','',name));const btn=el('button','boton-clara','Leer documento');btn.onclick=()=>window.abrirDocumentoClara(i,btn);card.append(btn);grid.append(card)})}
if(which==='pruebas'){const progress=getProgress();const n=Object.keys(progress).filter(k=>progress[k]&&Number(k)>=1&&Number(k)<=10).length;head.append(el('p','intro',`Progreso guardado en este navegador: ${n} de 10 estaciones completadas.`));const grid=el('div','rejilla-pruebas');panel.append(grid);titles.forEach((name,i)=>{const card=el('article','prueba');card.append(el('span','etiqueta',`ESTACIÓN ${String(i+1).padStart(2,'0')} / 10`),el('h2','',name),el('p','',progress[i+1]?'✓ Completada':'○ Pendiente'));const a=el('a','boton-clara',progress[i+1]?'Repetir prueba →':'Abrir investigación →');a.href=`estaciones/${String(i+1).padStart(2,'0')}/index.html`;card.append(a);grid.append(card)});const controls=el('div','controles-progreso');
const reset=el('button','boton-clara boton-reiniciar','↻ Reiniciar investigación');reset.type='button';
reset.onclick=()=>{if(window.confirm('¿Quieres comenzar una nueva investigación? Se borrará el progreso de las diez estaciones en este navegador y todas volverán a aparecer como pendientes. La biblioteca no se modificará.')){localStorage.removeItem('clara-laboratorio-v1');window.dispatchEvent(new Event('clara-progreso'));render('pruebas')}};
controls.append(reset);panel.append(controls);
const notice=el('p','aviso','Puedes repetir cualquier prueba sin perder las demás estaciones superadas. El reinicio borra únicamente el progreso de este navegador.');panel.append(notice)}
// clara-audio-integrado-v1
if(which==='audios'){
 head.append(el('p','intro','Escucha el archivo sonoro del proyecto desde esta misma página.'));
 const box=el('div','clara-audio-caja');
 const title=el('h2','','Archivo sonoro de Clara');
 const audio=document.createElement('audio');
 audio.controls=true;audio.preload='metadata';audio.src='audios/clara_audio.mp3';
 audio.setAttribute('aria-label','Reproductor del archivo sonoro de Clara');
 const info=el('p','','Duración aproximada: 1 minuto y 32 segundos. Puedes reproducir, pausar y desplazarte por el audio.');
 const details=document.createElement('details');
 const summary=document.createElement('summary');summary.textContent='Transcripción accesible';
 // clara-transcripcion-completa-v1
 details.append(summary);
 for(const parrafo of ["Si estás escuchando esto, entonces mi lucha por una ciencia al servicio de la paz quizás ya no sea más que un recuerdo. Mi nombre es Clara Immerwahr, y he dedicado mi vida a la química, pero con una convicción que muchos no entienden: la ciencia debe ser una fuerza para proteger la vida, no para destruirla.", "A mi alrededor, no todos comparten este ideal. Mi esposo, mi familia, mis amigos… todos tienen su propia visión del poder de la ciencia. Algunos creen que el fin justifica los medios, que el progreso vale cualquier sacrificio. Pero yo… yo no puedo cerrar los ojos ante el sufrimiento y la muerte que causan nuestras creaciones.", "Quienes me rodean, cada uno de ellos, han sentido en algún momento que mis ideales los traicionaban. Que mi búsqueda de paz es una amenaza para sus ambiciones, sus reputaciones, sus sueños. He sentido sus miradas, he oído sus palabras. Sé que en sus corazones guardan resentimiento, dudas, quizás incluso odio.", "Ahora, todo queda en tus manos. Encuentra la verdad entre las sombras de quienes me rodearon. Observa con cuidado, y quizás entenderás las razones ocultas, los temores y los rencores que han tejido esta red oscura. Busca, porque solo así podrás descubrir el misterio de mi muerte… y hacer justicia a los ideales que definen la ciencia que amé.", "Recuerda, no te dejes engañar por las apariencias. Solo quien se atreva a mirar profundamente podrá desentrañar… el misterioso caso de Clara Immerwahr."]){details.append(el('p','',parrafo));}
 box.append(title,audio,info,details);panel.append(box);
}
if(!['inicio','biblioteca','pruebas','audios'].includes(which)){head.append(el('p','intro','Este apartado está previsto en el diseño original. Su contenido se incorporará en una fase posterior.'));panel.append(el('p','aviso','Todavía no hay contenidos disponibles en esta sección.'))}
document.querySelectorAll('#zonas .zona').forEach(a=>{const dest=a.dataset.destino;a.setAttribute('aria-current',dest===which?'page':'false')});history.replaceState(null,'','#'+which);}
window.claraCambiarSeccion=render;
window.addEventListener('hashchange',()=>render(location.hash.slice(1)));
render(location.hash.slice(1)||'inicio');
})();