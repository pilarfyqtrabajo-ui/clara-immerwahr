'use strict';
const $=id=>document.getElementById(id);
const phases=[{cls:'violet',label:'FASE INICIAL',name:'Violeta',desc:'Permanganato, MnO₄⁻: manganeso en estado de oxidación +VII.'},{cls:'green',label:'CAMBIO TRANSITORIO',name:'Verde fugaz',desc:'Manganato, MnO₄²⁻: manganeso en estado de oxidación +VI. Puede resultar difícil de distinguir.'},{cls:'brown',label:'OBSERVACIÓN FINAL DURANTE EL JUEGO',name:'Pardo / amarillento-pardo',desc:'Formación de MnO₂: manganeso en estado de oxidación +IV. Puede observarse como suspensión parda.'}];
let phase=0,validSequence=false,validRedox=false;
function render(){const p=phases[phase];$('liquid').className='liquid '+p.cls;$('phase').textContent=p.label;$('phasename').textContent=p.name;$('phasedesc').textContent=p.desc;$('next').disabled=phase===2;$('next').textContent=phase===2?'Fin de la secuencia':'Observar evolución →';}
$('next').addEventListener('click',()=>{if(phase<2)phase++;render()});$('reset').addEventListener('click',()=>{phase=0;render()});
function feedback(id,correct,good,bad){const el=$(id);el.className='feedback'+(correct?'':' error');el.textContent=correct?good:bad;}
$('checksequence').addEventListener('click',()=>{validSequence=$('sequence').value==='a';feedback('sequencefeedback',validSequence,'Registro correcto. El verde puede ser fugaz y no debe exigirse si no se distingue.','Revisa el orden observado durante el juego: violeta, verde fugaz y pardo.');checkUnlock()});
$('checkredox').addEventListener('click',()=>{validRedox=$('redox').value==='b';feedback('redoxfeedback',validRedox,'Correcto. El manganeso se reduce: su número de oxidación disminuye de +VII a +VI y posteriormente a +IV.','Recuerda: reducción significa disminución del número de oxidación.');checkUnlock()});
$('checkconclusion').addEventListener('click',()=>{const selected=document.querySelector('input[name="conclusion"]:checked');const correct=selected?.value==='b';feedback('conclusionfeedback',correct,'Conclusión justificada. La manipulación de la copa no permite identificar al responsable.','No confundas una evidencia de manipulación con una prueba de autoría.');checkUnlock()});
function checkUnlock(){const selected=document.querySelector('input[name="conclusion"]:checked');$('unlock').hidden=!(validSequence&&validRedox&&selected?.value==='b')}
render();
