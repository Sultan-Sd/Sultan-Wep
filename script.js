const langButton=document.getElementById('lang');
const nav=document.getElementById('nav');
const hamb=document.getElementById('hamb');
const toast=document.getElementById('toast');
let lang=localStorage.getItem('portfolio-language')||(navigator.language.toLowerCase().startsWith('ar')?'ar':'en');
function setLang(next){lang=next;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.classList.toggle('en',lang==='en');document.querySelectorAll('[data-ar][data-en]').forEach(el=>el.textContent=el.dataset[lang]);langButton.textContent=lang==='ar'?'EN ↗':'عربي ↗';hamb.setAttribute('aria-label',lang==='ar'?'فتح القائمة':'Open menu');document.title=lang==='ar'?'سلطان الحربي | الموقع الشخصي':'Sultan Alharbi | Personal Portfolio';localStorage.setItem('portfolio-language',lang)}
setLang(lang);langButton.addEventListener('click',()=>setLang(lang==='ar'?'en':'ar'));hamb.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
let timer;function message(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('show'),2300)}
document.getElementById('copy').addEventListener('click',async()=>{const url='https://www.linkedin.com/in/sultandakil';try{await navigator.clipboard.writeText(url);message(lang==='ar'?'تم نسخ رابط LinkedIn':'LinkedIn URL copied')}catch(e){window.prompt(lang==='ar'?'انسخ الرابط:':'Copy URL:',url)}});
