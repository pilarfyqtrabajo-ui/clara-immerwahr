"use strict";
(()=>{
const names=["Bloque I · Parte 1 · Clara Immerwahr", "Bloque I · Parte 2 · Lectura, comprensión lectora y razonamiento matemático", "Bloque II · Evaluación y concreción curricular", "Bloque III · Guía docente para la implementación", "Bloque IV · Dossier operativo del profesorado", "Bloque V · Cuaderno de campo del alumnado", "Bloque VI · Accesibilidad e inclusión", "Bloque VII · Memoria de implementación, transferencia e innovación", "Anexos y materiales imprimibles"];
const fichasInformacion=[["Libro narrativo e ilustrado sobre la vida de Clara Immerwahr, su formación científica, las dificultades que encontró como mujer investigadora y su relación con Fritz Haber. Se organiza en cinco capítulos y un epílogo que recorren su infancia, el acceso a la universidad, el desarrollo del proceso Haber-Bosch, la Primera Guerra Mundial y las consecuencias humanas del uso militar de la química. Incluye una introducción de la autora, aclaraciones sobre los hechos documentados y las escenas recreadas, orientaciones para acompañar la lectura, vocabulario y fuentes bibliográficas.", "Proporciona el contexto histórico, científico y humano del proyecto. Permite comprender los dilemas éticos que posteriormente aparecen en el escape room y trabajar la lectura crítica y la responsabilidad científica.", "Antes de la experiencia. Lectura previa recomendada para contextualizar la investigación. Es especialmente importante para el profesorado que vaya a dirigir la actividad."], ["Materiales de trabajo vinculados al libro Clara Immerwahr, organizados para 2.º, 3.º y 4.º de ESO. Incluye cuadernillos del alumnado con actividades graduadas de comprensión lectora, interpretación de información, razonamiento matemático, cálculos, tablas, gráficos y argumentación. Incorpora espacios para desarrollar las respuestas y una guía del profesorado con orientaciones metodológicas, progresión entre niveles, solucionarios razonados, procedimientos de resolución, errores previsibles, criterios de valoración y propuestas de apoyo.", "Permite aprovechar la lectura como recurso curricular, adaptando la profundidad de las actividades a cada curso. Ayuda a relacionar conocimientos científicos, interpretación de textos y razonamiento matemático, y facilita la corrección y evaluación de las tareas.", "Antes y después de la lectura. Imprescindible para el profesorado que utilice los cuadernillos; complementario para quienes realicen únicamente el escape room."], ["Documento de referencia curricular para Física y Química de 4.º de ESO y 1.º de Bachillerato. Presenta la vinculación del escape room con competencias específicas, criterios de evaluación, saberes básicos y objetivos didácticos. Relaciona las diez pruebas con los aprendizajes y las evidencias que pueden observarse. Incluye cuatro rúbricas sobre resolución científica, evidencias y argumentación, trabajo cooperativo, y ciencia, ética y responsabilidad. También incorpora hojas de observación, orientaciones para evaluar e instrumentos de autoevaluación, coevaluación y valoración final.", "Ayuda a justificar curricularmente la experiencia, seleccionar los criterios de evaluación y recoger evidencias de aprendizaje. Su enfoque prioriza el razonamiento, la participación y la calidad de las conclusiones, no la velocidad de resolución.", "Antes, durante y después. Lectura imprescindible para planificar la evaluación y utilizar correctamente los instrumentos."], ["Guía general para comprender y organizar El misterioso caso de Clara Immerwahr. Explica la justificación del proyecto, su contexto histórico y científico, los objetivos didácticos, la metodología, la atención a la diversidad y la preparación del espacio. Describe cómo iniciar la experiencia, desarrollar las diez pruebas, conducir sus transiciones narrativas y resolver el caso. Incluye orientaciones para la puesta en común, la evaluación, la seguridad, la gestión de riesgos y la diferenciación entre hechos históricos y recreación didáctica. Contiene además una guía rápida con secuencia de claves y recomendaciones de organización.", "Ofrece una visión completa de la experiencia y permite comprender cómo encajan la narrativa, la investigación científica y la reflexión ética.", "Antes de organizar la actividad. Lectura imprescindible para el profesorado responsable. Sus apartados de seguimiento también resultan útiles durante el desarrollo y el cierre."], ["Documentación práctica para preparar, montar y dirigir las diez pruebas. Se divide en tres partes: preparación técnica, reactivos y seguridad; fichas técnicas de las pruebas; y solucionario y dirección del juego. Incluye inventarios de materiales y sustancias, indicaciones de preparación, normas de laboratorio, gestión de residuos y contingencias. Las diez fichas ilustradas presentan el contexto narrativo, los materiales, los procedimientos, los resultados esperados y los ajustes de viabilidad. El solucionario recoge las claves, la secuencia de pistas, las transiciones y las orientaciones para resolver incidencias durante el recorrido.", "Es la referencia operativa para organizar las estaciones, comprobar las evidencias y dirigir el juego sin perder la continuidad de la investigación.", "Antes del montaje y durante las pruebas. Lectura imprescindible para el profesorado que prepara y supervisa las estaciones."], ["Cuaderno de investigación destinado a los equipos participantes. Comienza con la asignación de roles y la formulación de hipótesis iniciales. Explica cómo distinguir evidencia, interpretación y conclusión, y ofrece una hoja de registro para cada una de las diez pruebas. En ellas, el alumnado debe anotar observaciones, cambios experimentales, documentos examinados, razonamientos y claves obtenidas. Incluye un mapa final de evidencias, un informe de resolución del caso, preguntas de reflexión sobre ciencia, ética y responsabilidad, una autoevaluación del equipo y una última anotación individual.", "Permite documentar el proceso de investigación y comprobar cómo el alumnado construye sus conclusiones. Evita que la experiencia se reduzca a descubrir claves sin justificar las respuestas.", "Durante toda la experiencia y al finalizar. Uso imprescindible para los equipos que trabajen con este sistema de registro. El profesorado debe conocerlo previamente."], ["Orientaciones para favorecer la participación activa y autónoma de todo el alumnado. Incluye principios de inclusión, preparación universal del escape room y apoyos para diferentes barreras de acceso, comunicación, lectura, cálculo, visión, audición, movilidad y autorregulación. Presenta adaptaciones específicas para las diez pruebas, con propuestas de materiales accesibles, alternativas de representación, comunicación y manipulación, y criterios para mantener el aprendizaje científico. Incorpora matrices de adaptación por necesidad, instrumentos de observación, pautas de seguridad, referencias especializadas y un protocolo de validación previo a la aplicación.", "Ayuda a anticipar barreras y organizar apoyos sin excluir al alumnado de la investigación ni sustituir su razonamiento por el de otras personas.", "Antes de preparar las estaciones. Lectura imprescindible para planificar una participación inclusiva; documento de consulta durante la actividad y su revisión posterior."], ["Documento organizado en dos partes. La primera recoge la implementación inicial del proyecto durante el curso 2025-2026 con 20 estudiantes de 1.º de Bachillerato, su organización mediante teatralización e investigación, la evolución de los materiales, las posibilidades de transferencia y el alcance de la experiencia documentada. La segunda reúne la preparación técnica y la validación experimental para futuras aplicaciones: niveles de control, inventarios, preparación y conservación de reactivos, protocolos de las pruebas, gestión de residuos, contingencias y registros de comprobación previa. Distingue expresamente entre la experiencia realizada y las propuestas técnicas elaboradas posteriormente.", "Facilita la reproducción responsable del proyecto, la documentación de nuevas aplicaciones y la revisión de su viabilidad experimental.", "Antes de reproducir las pruebas. Lectura imprescindible para la validación técnica y la evaluación de riesgos; complementaria para estudiar la experiencia inicial y su transferencia."], ["Colección organizada en seis secciones: infografías de presentación, personajes y teatralización, fichas técnicas de las diez pruebas, documentos y pistas imprimibles, rúbricas de evaluación, y registros de valoración. Incluye el expediente de personajes, el guion teatralizado completo, las fichas ilustradas, La Gazeta de Madrid, la rueda recortable del cifrado César, el póster de metales, la carta de Fritz y los documentos encriptados. Reúne también cuatro rúbricas, hojas de observación, un mapa de evaluación por pruebas y formularios de autoevaluación, coevaluación y valoración final.", "Concentra los recursos visuales, narrativos y documentales necesarios para preparar las estaciones, representar la historia y recoger evidencias de aprendizaje.", "Antes del montaje, durante la preparación de materiales y después de la experiencia. Consulta imprescindible para seleccionar y preparar los elementos imprimibles que se vayan a utilizar."]];
const titles=['Huellas en el arma','La copa de vino envenenada','La sangre que no era sangre','El líquido azul de la limpiadora','La carta del gas mostaza','El documento encriptado y el compuesto X','La ciencia ante el espejo','El agua especial','El perfume y el mensaje final','La geometría final y la clave del botiquín'];
const sections={inicio:'Inicio',biblioteca:'Biblioteca digital',pruebas:'Las diez pruebas',cuadernos:'Cuadernos interactivos',audios:'Archivo sonoro',valoraciones:'Valoraciones educativas',privado:'Panel privado'};
const host=document.getElementById('contenido-dinamico');
const getProgress=()=>{try{return JSON.parse(localStorage.getItem('clara-laboratorio-v1')||'{}')}catch{return {}}};
const el=(tag,cls,text)=>{let x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x};
function render(which){if(which==='valoraciones'){window.location.href='valoracion-educativa.html';return;}if(!sections[which])which='inicio';host.replaceChildren();const panel=el('section','panel-dinamico');host.append(panel);const head=el('div','panel-cabecera');panel.append(head);head.append(el('p','etiqueta','EL MISTERIOSO CASO DE CLARA IMMERWAHR'));head.append(el('h1','',sections[which]));
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
if(which==='biblioteca'){head.append(el('p','intro','Nueve documentos originales disponibles para su lectura en línea.'));const grid=el('div','rejilla-documentos');panel.append(grid);names.forEach((name,i)=>{const card=el('article','documento');const cover=el('img');cover.src=`imagenes/portadas/${i+1}.webp`;cover.alt=`Portada original: ${name}`;cover.loading='lazy';card.append(cover,el('h2','',name));const btn=el('button','boton-clara','Leer documento');btn.onclick=()=>window.abrirDocumentoClara(i,btn);card.append(btn);
const info=el('button','boton-clara','Información');
info.type='button';
info.style.display='block';
info.style.marginTop='8px';
info.onclick=()=>{
  const modal=el('div','clara-modal-informacion');
  modal.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;';
  modal.setAttribute('role','presentation');

  const ventana=el('section','clara-ventana-informacion');
  ventana.style.cssText='background:#fffaf0;color:#29241e;width:min(680px,100%);max-height:85vh;overflow-y:auto;padding:28px;border-radius:12px;box-sizing:border-box;box-shadow:0 12px 45px rgba(0,0,0,.4);';
  ventana.setAttribute('role','dialog');
  ventana.setAttribute('aria-modal','true');

  const titulo=el('h2','',name);
  titulo.id='clara-titulo-informacion';
  ventana.setAttribute('aria-labelledby',titulo.id);

  const cerrar=el('button','boton-clara','Cerrar ×');
  cerrar.type='button';
  cerrar.style.marginBottom='16px';

  const cerrarVentana=()=>{
    document.removeEventListener('keydown',teclado);
    modal.remove();
    info.focus();
  };

  const teclado=(evento)=>{
    if(evento.key==='Escape')cerrarVentana();
    if(evento.key==='Tab'){
      const controles=[...ventana.querySelectorAll('button')];
      if(controles.length){
        evento.preventDefault();
        controles[0].focus();
      }
    }
  };

  cerrar.onclick=cerrarVentana;
  modal.onclick=(evento)=>{
    if(evento.target===modal)cerrarVentana();
  };

  ventana.append(cerrar,titulo);

  ['¿Qué contiene?','¿Para qué sirve?','¿Cuándo consultarlo?'].forEach((apartado,j)=>{
    const subtitulo=el('h3','',apartado);
    subtitulo.style.marginTop='20px';
    const texto=el('p','',fichasInformacion[i][j]);
    texto.style.lineHeight='1.65';
    ventana.append(subtitulo,texto);
  });

  modal.append(ventana);
  document.body.append(modal);
  document.addEventListener('keydown',teclado);
  cerrar.focus();
};
card.append(info);grid.append(card)})}
if(which==='pruebas'){const progress=getProgress();const n=Object.keys(progress).filter(k=>progress[k]&&Number(k)>=1&&Number(k)<=10).length;head.append(el('p','intro',`Progreso guardado en este navegador: ${n} de 10 estaciones completadas.`));

const grid=el('div','rejilla-pruebas');panel.append(grid);titles.forEach((name,i)=>{const card=el('article','prueba');card.append(el('span','etiqueta',`ESTACIÓN ${String(i+1).padStart(2,'0')} / 10`),el('h2','',name),el('p','',progress[i+1]?'✓ Completada':'○ Pendiente'));const a=el('a','boton-clara',progress[i+1]?'Repetir prueba →':'Abrir investigación →');a.href=`estaciones/${String(i+1).padStart(2,'0')}/index.html`;card.append(a);grid.append(card)});
// clara-tarjeta-profesorado-v1
const tarjetaProfesorado=el('article','prueba clara-tarjeta-profesorado');
tarjetaProfesorado.append(
 el('span','etiqueta','ESPACIO PARA EL PROFESORADO'),
 el('h2','','Preparar el escape room'),
 el('p','','Guía de montaje, materiales, teatralización y recursos para organizar la investigación.')
);
const accesoProfesorado=el('a','boton-clara','Abrir guía de preparación →');
accesoProfesorado.href='preparacion-profesorado.html';
tarjetaProfesorado.append(accesoProfesorado);
grid.append(tarjetaProfesorado);

const controls=el('div','controles-progreso');
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


// clara-autores-biografias-v2
// clara-autores-diseno-v3
if(which==='privado'){
  const contenedor=el('div','clara-autores');
  contenedor.style.cssText='max-width:980px;margin:24px auto;color:#332b2b;';

  const estiloAutores=document.createElement('style');
  estiloAutores.textContent=`
    .clara-autores .clara-introduccion {
      max-width:800px;
      margin:0 auto 16px;
      text-align:center;
    }
    .clara-autores .clara-introduccion p {
      text-align:center !important;
    }
    .clara-autores .clara-rejilla {
      display:grid;
      grid-template-columns:minmax(0,1fr) minmax(0,1fr);
      gap:22px;
      align-items:stretch;
      margin-top:30px;
    }
    .clara-autores .clara-tarjeta {
      min-width:0;
      margin:0 !important;
      height:100%;
      box-sizing:border-box;
    }
    .clara-autores .clara-foto {
      display:block;
      width:180px;
      height:180px;
      object-fit:cover;
      object-position:center 25%;
      border-radius:50%;
      margin:0 auto 20px;
      border:4px solid #e4d1bf;
    }
    .clara-autores .clara-cabecera {
      text-align:center;
      margin-bottom:20px;
    }
    .clara-autores .clara-cabecera h3 {
      line-height:1.3;
    }
    @media(max-width:760px) {
      .clara-autores .clara-rejilla {
        grid-template-columns:1fr;
      }
    }
  `;
  contenedor.append(estiloAutores);

  const introduccionAutores=el('div','clara-introduccion');
  contenedor.append(introduccionAutores);

  function parrafo(destino,contenido){
    const p=el('p','');
    p.style.cssText='line-height:1.8;margin:0 0 15px;text-align:left;';
    const partes=contenido.split(/(\*[^*]+\*)/g);
    partes.forEach(parte=>{
      if(parte.startsWith('*') && parte.endsWith('*')){
        const cursiva=document.createElement('em');
        cursiva.textContent=parte.slice(1,-1);
        p.append(cursiva);
      }else{
        p.append(document.createTextNode(parte));
      }
    });
    destino.append(p);
  }

  const titulo=el('h2','','Un espacio para conocer a los autores');
  titulo.style.cssText='color:#713749;font-size:1.55rem;margin-bottom:16px;';
  introduccionAutores.append(titulo);

  parrafo(introduccionAutores,
    'Este apartado está dedicado a las personas que han creado y desarrollado *El misterioso caso de Clara Immerwahr*.');

  parrafo(introduccionAutores,
    'A través de sus biografías, podrás conocer sus trayectorias académicas y profesionales, su experiencia docente y las motivaciones que los llevaron a desarrollar esta propuesta educativa. Sus perfiles reflejan dos maneras complementarias de abordar la enseñanza de las ciencias, desde la investigación, la experimentación y la innovación tecnológica hasta la recuperación de memorias silenciadas y la reflexión sobre la responsabilidad ética del conocimiento científico.');

  const rejilla=el('div','clara-rejilla');
  contenedor.append(rejilla);

  function autor(nombre,subtitulo,foto,parrafos){
    const tarjeta=el('article','clara-tarjeta');
    tarjeta.style.cssText='background:#fffaf2;border:1px solid #dbc9ba;border-radius:14px;padding:25px;margin:25px 0;box-shadow:0 3px 12px rgba(60,30,30,.07);';

    const cabecera=el('div','clara-cabecera');

    const imagen=document.createElement('img');
    imagen.className='clara-foto';
    imagen.src=foto;
    imagen.alt='Fotografía de '+nombre;
    imagen.loading='lazy';
    cabecera.append(imagen);

    const nombreEl=el('h3','',nombre);
    nombreEl.style.cssText='color:#713749;font-size:1.4rem;margin:0 0 8px;';
    cabecera.append(nombreEl);

    const especialidad=el('p','',subtitulo);
    especialidad.style.cssText='font-weight:600;color:#795b54;margin:0 0 20px;';
    cabecera.append(especialidad);
    tarjeta.append(cabecera);

    parrafos.forEach(contenido=>parrafo(tarjeta,contenido));
    rejilla.append(tarjeta);
  }

  autor(
    'M.ª del Pilar Ruiz Lucena',
    'Profesora de Física y Química | Educación científica, cuidado e invisibilidades',
    'pilar_autora.jpg',
    [
      'M.ª del Pilar Ruiz Lucena es licenciada en Química, posee un Máster Universitario en Simulación Molecular y cuenta con la acreditación C1 en Competencia Digital Docente. Acumula 15 años de experiencia docente en Educación Secundaria y Bachillerato.',

      'Su manera de entender la educación parte del cuidado del alumnado, de escuchar sus necesidades, reconocer sus capacidades y crear oportunidades para que nadie se sienta invisible en el aula. Defiende una enseñanza en la que aprender ciencia implique investigar, experimentar, crear y descubrir que el conocimiento puede ayudar a comprender y transformar la realidad.',

      'Esta perspectiva ha dado lugar a una línea de trabajo centrada en las invisibilidades educativas, científicas y sociales. Sus proyectos recuperan historias de mujeres científicas olvidadas, memorias silenciadas y conocimientos escasamente representados en el currículo. También abordan cuestiones relacionadas con la salud, la accesibilidad, la sostenibilidad y el bienestar, integrando ciencia, tecnología, arte y memoria histórica en experiencias de investigación escolar.',

      'Ha desempeñado funciones de coordinación en iniciativas educativas de la Junta de Andalucía, como *Investiga y Descubre* y *CIMA*, así como en ámbitos STEM y programas culturales. También ha participado en proyectos de la Red PLANEA, entre ellos *Futuros Transformadores* y *Atlas del Aire*.',

      'Entre sus trabajos destacan *Genios Invisibles*, *Comer sin miedo* y *Camino al exilio*. Es, además, coautora de *InnovaCare Solar*, proyecto que ha recibido diversos reconocimientos nacionales.',

      'Su trayectoria ha sido distinguida con el Primer Premio Nacional IRENE 2025 por *Genios Invisibles*, el primer premio de Apadrina la Ciencia y Merck por *InnovaCare Solar*, el tercer premio ACIERTAS-COSCE, el premio al Mejor Proyecto Chicas STEAM en FANTEC 2026 y una mención de honor en Ciencia en Acción. Asimismo, *Camino al exilio* obtuvo un reconocimiento en el certamen Todos los Nombres 2026.',

      'Ha publicado experiencias educativas en *Cuadernos de Pedagogía*, *ANIDA* y la revista del CEP de Cádiz, además de participar en encuentros y certámenes de divulgación científica.',

      'Es coautora de *El misterioso caso de Clara Immerwahr*, una propuesta que refleja su interés por recuperar voces silenciadas, contextualizar históricamente los avances científicos y promover una reflexión crítica sobre sus consecuencias éticas.'
    ]
  );

  autor(
    'Nicolás López Alcolea',
    'Ingeniero industrial | Educación científica, ingeniería e innovación tecnológica',
    'nicolas_autor.jpg',
    [
      'Nicolás López Alcolea es ingeniero industrial y profesor de Física y Química. Su trayectoria profesional combina la investigación científica, el ejercicio de la ingeniería, la enseñanza y la gestión educativa.',

      'En 2005 participó como coautor en el trabajo *Incidencia oblicua de ondas elásticas guiadas en el borde de una placa semi-infinita*, presentado en el Congreso de Métodos Numéricos en Ingeniería, celebrado en Granada. También cuenta con experiencia en la elaboración y dirección de proyectos técnicos de ingeniería industrial.',

      'En el ámbito educativo, ha desempeñado el cargo de jefe de estudios y actualmente ejerce como secretario del IES Maestro Francisco Gallardo, en Los Corrales (Sevilla). Como miembro del equipo directivo, colaboró en la implantación del Ciclo Formativo de Grado Superior en Energías Renovables, incorporado a la oferta educativa del centro en 2023. El instituto recibió el Premio Eólica Marina 2024, concedido por la Asociación Empresarial Eólica, en reconocimiento a su apuesta por la formación vinculada a las energías renovables.',

      'Es coautor de *InnovaCare Solar*, un proyecto de investigación educativa que combina energías renovables, electrónica y tecnología aplicada al autocuidado. La experiencia fue seleccionada para Ciencia en Acción 2025 y recibió, entre otros reconocimientos, el primer premio de Apadrina la Ciencia y Merck y el tercer premio ACIERTAS-COSCE 2025 en la categoría «Experiencia más innovadora».',

      'También es coautor de *El misterioso caso de Clara Immerwahr*, una propuesta interdisciplinar que integra experimentación química, investigación histórica y reflexión sobre la responsabilidad ética de la ciencia.',

      'Actualmente, explora soluciones tecnológicas destinadas a mejorar la gestión administrativa de los centros educativos, simplificar procedimientos y facilitar el trabajo del profesorado.',

      'Su trayectoria conecta la ingeniería, la educación científica y la innovación tecnológica, tanto en el desarrollo de experiencias de aprendizaje como en la búsqueda de soluciones que contribuyan a mejorar el funcionamiento de los centros educativos.'
    ]
  );

  const institucional=el('section','');
  institucional.style.cssText='background:#f1e9dc;border:1px solid #d7c5af;border-radius:14px;padding:25px;margin-top:28px;';

  const tituloInstitucional=el('h3','','Información institucional y financiación');
  tituloInstitucional.style.cssText='color:#713749;margin:0 0 14px;';
  institucional.append(tituloInstitucional);

  parrafo(institucional,
    '*El misterioso caso de Clara Immerwahr* es un proyecto educativo elaborado en el marco de la convocatoria de Proyectos de elaboración de materiales curriculares y recursos didácticos de la Junta de Andalucía correspondiente a 2025.');

  parrafo(institucional,
    'El proyecto cuenta con una dotación económica concedida de 800 euros, destinada a apoyar la elaboración de sus materiales y recursos didácticos.');

  const financiacion=el('p','',
    'Financiado por la Consejería de Educación de la Junta de Andalucía.');
  financiacion.style.cssText='font-weight:700;color:#713749;line-height:1.7;margin:15px 0;';
  institucional.append(financiacion);



  contenedor.append(institucional);
  panel.append(contenedor);
}
if(!['inicio','biblioteca','pruebas','audios','privado'].includes(which)){
  head.append(el('p','intro','Este apartado está previsto en el diseño original. Su contenido se incorporará en una fase posterior.'));
  panel.append(el('p','aviso','Todavía no hay contenidos disponibles en esta sección.'));
}

document.querySelectorAll('#zonas .zona').forEach(a=>{const dest=a.dataset.destino;a.setAttribute('aria-current',dest===which?'page':'false')});history.replaceState(null,'','#'+which);}
window.claraCambiarSeccion=render;
window.addEventListener('hashchange',()=>render(location.hash.slice(1)));
render(location.hash.slice(1)||'inicio');
})();