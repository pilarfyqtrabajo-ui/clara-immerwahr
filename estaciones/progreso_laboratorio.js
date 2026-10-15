(() => {
'use strict';
const key='clara-laboratorio-v1', base=location.pathname;
const match=base.match(/\/estaciones\/(\d{2})\/(?:index\.html)?$/);
const number=match?Number(match[1]):0;
const root=number?'../':'';
const read=()=>{try{return JSON.parse(localStorage.getItem(key)||'{}')}catch{return {}}};
const save=n=>{const data=read();if(!data[n]){data[n]=true;try{localStorage.setItem(key,JSON.stringify(data))}catch{}}};
const bar=document.createElement('div');
bar.style.cssText='position:sticky;top:0;z-index:9999;background:#09242b;color:#f4e7d1;border-bottom:1px solid #c4a66d;padding:10px 16px;display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:center;font:14px Arial,sans-serif';
const link=(label,href)=>{const a=document.createElement('a');a.textContent=label;a.href=href;a.style.cssText='color:#f4d391;text-decoration:underline';return a};
bar.append(link('⌂ Portada',number?'../../index.html':'../index.html'),link('☷ Laboratorio',number?'../index.html':'index.html'));
if(number>1)bar.append(link('← Prueba anterior',`../${String(number-1).padStart(2,'0')}/index.html`));
const count=document.createElement('span');bar.append(count);
if(number<10&&number)bar.append(link('Prueba siguiente →',`../${String(number+1).padStart(2,'0')}/index.html`));
document.body.prepend(bar);
function update(){
 const data=read();const done=Object.keys(data).filter(x=>data[x]&&Number(x)>=1&&Number(x)<=10).length;
 const newCount=`Progreso: ${done}/10 pruebas`;if(count.textContent!==newCount)count.textContent=newCount;
 if(!number){document.querySelectorAll('a.card').forEach(a=>{const m=a.getAttribute('href')?.match(/^(\d{2})\//);if(!m)return;const n=Number(m[1]);let b=a.querySelector('.clara-progress');if(!b){b=document.createElement('small');b.className='clara-progress';b.style.cssText='display:block;margin-top:8px;font-weight:bold';a.append(b)}const label=data[n]?'✓ Completada':'○ Pendiente';if(b.textContent!==label)b.textContent=label})}
}
const isVisible=id=>{const e=document.getElementById(id);return !!e && !e.hidden && !e.classList.contains('hidden') && (id!=='next'||e.classList.contains('show')||number===9)};
function solved(){
 if(!number)return false;
 if(number===1)return document.getElementById('respuesta')?.textContent.startsWith('Correcto.') && document.getElementById('resultado')?.textContent.startsWith('Código correcto');
 if(number===2)return isVisible('unlock');
 if(number===3)return isVisible('next');
 if(number===4)return isVisible('revelacion');
 if(number===5)return isVisible('reveal');
 if(number===6)return isVisible('success');
 if(number===7)return isVisible('reveal');
 if(number===8)return isVisible('reveal');
 if(number===9)return isVisible('next');
 if(number===10)return isVisible('ending');
 return false;
}
let busy=false;
function inspect(){if(busy)return;busy=true;queueMicrotask(()=>{busy=false;if(solved())save(number);update()})}
document.addEventListener('click',()=>setTimeout(inspect,0),true);
document.addEventListener('change',()=>setTimeout(inspect,0),true);
const target=document.querySelector('main')||document.body;
new MutationObserver(inspect).observe(target,{subtree:true,childList:true,attributes:true,characterData:true,attributeFilter:['class','hidden']});
update();
})();