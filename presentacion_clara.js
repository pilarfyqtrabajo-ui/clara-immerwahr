'use strict';
(()=>{
 const footer='© 2025–2026 Nicolás López Alcolea · © 2025–2027 M.ª del Pilar Ruiz Lucena. Todos los derechos reservados.';
 const paragraphs=[
 '¿Puede un descubrimiento científico convertirse en una amenaza? ¿Hasta dónde llega la responsabilidad de quienes investigan? ¿Qué ocurre cuando el progreso avanza sin preguntarse por sus consecuencias?',
 'El misterioso caso de Clara Immerwahr es una experiencia educativa inmersiva que invita a descubrir la vida de una química alemana en una época marcada por la desigualdad de género, la Primera Guerra Mundial y la utilización de la ciencia con fines bélicos.',
 'El alumnado se convierte en protagonista de una investigación: examina documentos históricos, interpreta evidencias, realiza experimentos, resuelve enigmas y contrasta hipótesis para reconstruir los acontecimientos que rodearon la vida de Clara y comprender su contexto científico y social.',
 'La propuesta integra Física y Química, Historia, comprensión lectora, razonamiento matemático y pensamiento crítico. Sus diez pruebas, la biblioteca documental, el archivo sonoro y los cuadernos interactivos permiten investigar desde distintas perspectivas.',
 'El propósito va más allá de resolver un misterio: comprender que la ciencia no se desarrolla al margen de la sociedad y que sus aplicaciones tienen consecuencias humanas. Recuperar la memoria de Clara es también reconocer el papel de las mujeres en la historia de la ciencia.',
 'Porque educar científicamente no consiste únicamente en aprender cómo funciona el mundo, sino también en preguntarse qué mundo queremos construir con ese conocimiento.'
 ];
 const caseText=[
 'En la madrugada del 2 de mayo de 1915, Clara Immerwahr murió en el jardín de su residencia en Dahlem, Berlín.',
 'Clara no era una mujer cualquiera. Doctora en Química, había desarrollado su carrera en una sociedad que apenas concedía espacio a las mujeres en el mundo científico. Estaba casada con Fritz Haber, un químico cuyo trabajo adquirió una importancia decisiva durante la Primera Guerra Mundial.',
 'Pocos días antes, las tropas alemanas habían empleado gas cloro en el frente de Ypres. Haber había desempeñado un papel fundamental en el desarrollo de esta nueva forma de guerra.',
 'La muerte de Clara fue considerada un suicidio. Sin embargo, las circunstancias de sus últimos días y las tensiones entre ciencia, guerra y conciencia siguen despertando preguntas e interés histórico.',
 'El expediente ha sido reabierto con fines educativos. Formas parte de un equipo que deberá examinar documentos, reconstruir acontecimientos, analizar sustancias, realizar experimentos y resolver diez pruebas científicas.',
 'Cada hallazgo ayudará a comprender quién fue Clara Immerwahr, qué sucedía en su entorno y qué dilemas éticos marcaron aquella época.',
 'No puedes confundir una sospecha con una prueba, ni una interpretación con un hecho demostrado.',
 '¿Hasta dónde llega la responsabilidad de una persona científica cuando sus descubrimientos pueden utilizarse para destruir vidas?'
 ];
 function make(tag,cls,txt){const n=document.createElement(tag);if(cls)n.className=cls;if(txt)n.textContent=txt;return n}
 function apply(){
  const note=document.querySelector('main > .nota');if(note && note.textContent!==footer)note.textContent=footer;
  const host=document.getElementById('contenido-dinamico');if(!host||location.hash.replace('#','')!=='inicio')return;
  const panel=host.querySelector('.panel-dinamico');if(!panel||panel.querySelector('.clara-presentacion'))return;
  const head=panel.querySelector('.panel-cabecera');if(!head)return;
  const intro=head.querySelector('.intro');if(intro)intro.remove();
  const block=make('div','clara-presentacion');
  block.append(make('h2','','Una investigación científica. Una historia silenciada. Una decisión que nos interpela.'));
  block.append(make('p','clara-subtitulo','Una experiencia inmersiva sobre ciencia, ética y memoria histórica'));
  const questions=make('p','clara-preguntas',paragraphs[0]);block.append(questions);
  const columns=make('div','clara-presentacion-columnas');
  const left=make('section','clara-presentacion-columna');
  const right=make('section','clara-presentacion-columna');
  left.append(make('h3','','La historia que vamos a investigar'));
  [1,2].forEach(i=>left.append(make('p','',paragraphs[i])));
  right.append(make('h3','','Una experiencia para aprender y reflexionar'));
  [3,4].forEach(i=>right.append(make('p','',paragraphs[i])));
  columns.append(left,right);block.append(columns);
  block.append(make('p','clara-cierre',paragraphs[5]));
  head.append(block);
 }
 window.claraAbrirExpediente=openCase;
 function openCase(){
  if(document.getElementById('clara-expediente'))return;
  const backdrop=make('div','clara-expediente-fondo');backdrop.id='clara-expediente';backdrop.setAttribute('role','dialog');backdrop.setAttribute('aria-modal','true');backdrop.setAttribute('aria-label','Expediente de Clara Immerwahr');
  const panel=make('section','clara-expediente-panel');
  const close=make('button','clara-expediente-cerrar','Cerrar ×');close.type='button';close.onclick=()=>backdrop.remove();
  panel.append(close,make('p','clara-expediente-etiqueta','EXPEDIENTE DE INVESTIGACIÓN · BERLÍN, 2 DE MAYO DE 1915'),make('h2','','El misterioso caso de Clara Immerwahr'));
  caseText.forEach((p,i)=>{if(i===4)panel.append(make('h3','','Tu misión comienza ahora'));panel.append(make('p',i===6||i===7?'clara-destacado':'',p))});
  panel.append(make('p','clara-expediente-etiqueta','EXPEDIENTE ABIERTO · INVESTIGACIÓN PENDIENTE'));
  const start=make('button','boton-clara clara-comenzar','Comenzar la investigación →');start.type='button';start.onclick=()=>{backdrop.remove();if(typeof window.claraCambiarSeccion==='function')window.claraCambiarSeccion('pruebas');else location.hash='#pruebas'};panel.append(start);
  backdrop.append(panel);backdrop.addEventListener('click',e=>{if(e.target===backdrop)backdrop.remove()});document.body.append(backdrop);close.focus();
 }
 // El botón rojo de la portada es un enlace transparente generado por app.js.
 // Capturamos ese enlace por su etiqueta accesible; no dependemos de coordenadas.
 document.addEventListener('click',e=>{
  const target=e.target;
  const anchor=target && target.closest ? target.closest('a.zona[aria-label="Abrir el expediente"]') : null;
  if(!anchor)return;
  e.preventDefault();e.stopImmediatePropagation();openCase();
 },true);
 // Observar solo el contenedor del menú; nunca observar el documento entero.
 const host=document.getElementById('contenido-dinamico');if(host)new MutationObserver(()=>apply()).observe(host,{childList:true});
 window.addEventListener('hashchange',()=>setTimeout(apply,0));apply();
})();
