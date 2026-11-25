(function(){
var WA='5511992291024';
window.dataLayer=window.dataLayer||[];
function wa(t){return'https://wa.me/'+WA+'?text='+encodeURIComponent(t)}
window.zwa=wa;
document.addEventListener('click',function(e){var a=e.target.closest('a[href^="https://wa.me"]');if(a)dataLayer.push({event:'whatsapp_click',link_text:(a.textContent||'').trim()})});
document.querySelectorAll('[data-wa]').forEach(function(a){a.href=wa(a.dataset.wa)});
/* serviços */
var S=[['Buffet Completo','Variedade e sofisticação para todos os gostos.','/img/servicos/1.jpg'],['Grazing Table','Mesa com queijos, frios, frutas e petiscos.','/img/servicos/2.jpg'],['Ilha de Canapés','Elegância e sabor em cada mordida.','/img/servicos/3.jpg'],['Welcome Coffee','Café e petiscos para uma recepção acolhedora.','/img/servicos/4.jpg'],['Brunch','O melhor do café da manhã e almoço.','/img/servicos/5.jpg'],['Work Lunch','Praticidade e sabor no seu evento.','/img/servicos/6.jpg'],['Happy Hour','Petiscos e drinks para relaxar.','/img/servicos/7.jpg'],['Mesa de Tortas','Tortas doces e salgadas em uma mesa decorada.','/img/servicos/8.jpg'],['Menus Temáticos','Cardápios personalizados para cada evento.','/img/servicos/9.jpg'],['Carrinhos de Pipoca','Pipoca quentinha para animar o seu evento.','/img/servicos/10.jpg']];
var st=document.getElementById('serv');
if(st)S.forEach(function(s,i){var d=document.createElement('article');d.className='slide';
d.innerHTML='<div class="ph" style="--img:url('+s[2]+')" role="img" aria-label="'+s[0]+'"></div><div class="tx"><h3>'+s[0]+'</h3><p>'+s[1]+'</p><a class="btn sm" href="'+wa('Olá, vi o site da Zimmermann Gastronomia e gostaria de um orçamento de '+s[0]+' para o meu evento.')+'" target="_blank" rel="noopener">Pedir orçamento</a></div>';st.appendChild(d)});
var pt=document.getElementById('prova');
if(pt)[['/img/provas/1.jpg','Nossa equipe'],['/img/provas/2.jpg','GAC'],['/img/provas/3.jpg','NBA House'],['/img/provas/4.jpg','Danone Play'],['/img/provas/5.jpg','QuintoAndar'],['/img/provas/6.jpg','Morumbis'],['/img/provas/7.jpg','Aniversários'],['/img/provas/8.jpg','Cestas']].forEach(function(p){var d=document.createElement('figure');d.className='slide proof';d.innerHTML='<div class="ph" style="--img:url('+p[0]+')" role="img" aria-label="'+p[1]+'"></div><figcaption class="cap">'+p[1]+'</figcaption>';pt.appendChild(d)});
/* carrossel */
function car(id,auto){var t=document.getElementById(id);if(!t)return;var dots=document.getElementById(id+'-d'),sl=[].slice.call(t.children),idx=0,timer,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(id==='prova')t.parentNode.classList.add('pr');['l','r'].forEach(function(s){var a=document.createElement('button');a.className='arr '+s;a.type='button';a.setAttribute('aria-label',s==='l'?'Anterior':'Próximo');a.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="'+(s==='l'?'M15 5l-7 7 7 7':'M9 5l7 7-7 7')+'"/></svg>';a.onclick=function(){go(idx+(s==='l'?-1:1));rs()};t.parentNode.appendChild(a)});
sl.forEach(function(_,i){var b=document.createElement('button');b.setAttribute('aria-label','Ir para item '+(i+1));b.onclick=function(){go(i);rs()};dots.appendChild(b)});
function mark(){[].forEach.call(dots.children,function(b,i){b.setAttribute('aria-current',i===idx)})}
function go(i){idx=(i+sl.length)%sl.length;t.scrollTo({left:dk()?sl[idx].offsetLeft-pad():sl[idx].offsetLeft-(t.clientWidth-sl[idx].offsetWidth)/2,behavior:rm?'auto':'smooth'});mark()}
function dk(){return matchMedia('(min-width:760px)').matches}function pad(){return parseFloat(getComputedStyle(t).paddingLeft)}
var sc;t.addEventListener('scroll',function(){clearTimeout(sc);sc=setTimeout(function(){var d0=dk(),c=d0?t.scrollLeft+pad():t.scrollLeft+t.clientWidth/2,best=0,bd=1e9;sl.forEach(function(s,i){var d=Math.abs(d0?s.offsetLeft-c:s.offsetLeft+s.offsetWidth/2-c);if(d<bd){bd=d;best=i}});if(d0&&t.scrollLeft+t.clientWidth>=t.scrollWidth-2)best=sl.length-1;idx=best;mark()},80)},{passive:true});
function rs(){if(!auto)return;clearInterval(timer);timer=setInterval(function(){go(idx+1)},8000)}
if(auto){['touchstart','pointerdown','mouseenter','focusin'].forEach(function(e){t.addEventListener(e,function(){clearInterval(timer)},{passive:true})});['touchend','mouseleave','focusout'].forEach(function(e){t.addEventListener(e,rs,{passive:true})});
new IntersectionObserver(function(en){en[0].isIntersecting?rs():clearInterval(timer)},{threshold:.4}).observe(t)}
mark()}
car('serv',true);car('prova',false);
/* cookies */
var K='zg_consent',v=null;try{v=localStorage.getItem(K)}catch(e){}
var b=document.createElement('div');b.id='ck';b.hidden=true;b.setAttribute('role','dialog');b.setAttribute('aria-label','Aviso de cookies');
b.innerHTML='<p>Usamos cookies para o funcionamento do site e, com a sua permissão, para medir acessos e melhorar nossos anúncios. Saiba mais na <a href="/privacidade.html">Política de Privacidade</a>.</p><div><button class="btn out" data-c="no">Recusar</button><button class="btn" data-c="yes">Aceitar</button></div>';
document.body.appendChild(b);
function apply(x){dataLayer.push({event:'consent_update',consent:x});if(typeof gtag==='function')gtag('consent','update',{analytics_storage:x,ad_storage:x,ad_user_data:x,ad_personalization:x})}
b.onclick=function(e){var c=e.target.dataset.c;if(!c)return;var x=c==='yes'?'granted':'denied';try{localStorage.setItem(K,x)}catch(_){}apply(x);b.hidden=true};
if(v){apply(v)}else b.hidden=false;
document.querySelectorAll('[data-ck]').forEach(function(a){a.onclick=function(){b.hidden=false}});
document.querySelectorAll('[data-y]').forEach(function(e){e.textContent=new Date().getFullYear()});
})();
