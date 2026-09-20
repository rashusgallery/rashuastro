/* ═════════════════════════════════════════════
   RASHU ASTRO · app.js
   powered by rashu infos : info-ai
   ═════════════════════════════════════════════ */

/* ── DATA : 12 ZODIAC SIGNS ──────────────── */
const SIGNS = [
  {name:'Aries', hindi:'मेष', dates:'21 Mar – 19 Apr', element:'Fire', glyph:'♈',
   color:'rgba(239,68,68,.25)',
   traits:['Bold','Energetic','Leader','Optimistic'],
   hi:'आज नए अवसर दस्तक देंगे — हिम्मत से आगे बढ़ें।',
   horo:[
    'Today brings fresh energy to your goals. A bold decision at work could open new doors. Keep your temper in check and channel passion into productivity.',
    'Your confidence is your superpower today. Someone senior may notice your efforts. Health looks strong — great day to start a fitness routine.',
    'Unexpected support from a friend will lift your spirits. Finances steady, but avoid impulsive spending. Evening promises pleasant family time.']},
  {name:'Taurus', hindi:'वृषभ', dates:'20 Apr – 20 May', element:'Earth', glyph:'♉',
   color:'rgba(34,197,94,.25)',
   traits:['Patient','Reliable','Sensual','Practical'],
   hi:'धैर्य से किया काम आज रंग लाएगा — पैसों का लेन-देन सोचकर करें।',
   horo:[
    'Patience pays off — a delayed project finally moves forward. Good day for financial planning. Indulge in comfort food but watch the wallet.',
    'Stability surrounds you today. Family matters resolve smoothly. A new investment idea deserves attention — research before committing.',
    'Romance blooms in quiet moments. Your practical advice helps a close friend. Avoid stubbornness in discussions; flexibility wins.']},
  {name:'Gemini', hindi:'मिथुन', dates:'21 May – 20 Jun', element:'Air', glyph:'♊',
   color:'rgba(34,211,238,.25)',
   traits:['Witty','Curious','Adaptable','Social'],
   hi:'आज आपकी बातचीत का जादू चलेगा — नए लोगों से मिलें।',
   horo:[
    'Your words carry magic today — presentations, pitches and conversations all favor you. New contacts could become valuable allies.',
    'Curiosity leads you to an exciting opportunity. Short travel is indicated. Keep documents organized; an important message may arrive.',
    'Social life sparkles. A sibling or cousin brings good news. Multi-tasking works, but finish what you start before moving on.']},
  {name:'Cancer', hindi:'कर्क', dates:'21 Jun – 22 Jul', element:'Water', glyph:'♋',
   color:'rgba(59,130,246,.25)',
   traits:['Caring','Intuitive','Loyal','Emotional'],
   hi:'घर-परिवार का साथ मन को शांति देगा — भावनाओं को बहने दें।',
   horo:[
    'Home and family bring deep satisfaction today. Trust your intuition in a tricky situation — it will not mislead you. Emotional healing is underway.',
    'A family gathering refreshes your soul. Property or vehicle decisions look favorable. Take care of your mother’s health with gentle attention.',
    'Your empathy attracts someone special. Creative pursuits flourish in the evening. Avoid overthinking small remarks from others.']},
  {name:'Leo', hindi:'सिंह', dates:'23 Jul – 22 Aug', element:'Fire', glyph:'♌',
   color:'rgba(244,192,77,.28)',
   traits:['Confident','Generous','Dramatic','Warm'],
   hi:'सफलता आपके कदम चूमेगी — रोशनी से दूर मत भागें।',
   horo:[
    'The spotlight finds you today — accept applause gracefully. Leadership opportunities arise; step forward without hesitation.',
    'Your generosity returns to you in beautiful ways. Creative projects shine. Romance is dramatic and delightful; plan something special.',
    'Recognition at workplace boosts your morale. Avoid ego clashes with authority. Children bring joyful news. Invest in self-care.']},
  {name:'Virgo', hindi:'कन्या', dates:'23 Aug – 22 Sep', element:'Earth', glyph:'♍',
   color:'rgba(52,211,153,.25)',
   traits:['Analytical','Kind','Hardworking','Perfectionist'],
   hi:'मेहनत का फल मीठा होगा — छोटी-छोटी चीज़ों पर ध्यान दें।',
   horo:[
    'Details you perfect today will impress the right people. Health improves with better routines. Organize your workspace — clarity brings luck.',
    'Hard work gets noticed by someone influential. A health check-up is a good idea. Help a colleague; karma remembers kindness.',
    'Perfectionism serves you well at work, but relax at home. A practical solution to an old problem appears. Finances stable.']},
  {name:'Libra', hindi:'तुला', dates:'23 Sep – 22 Oct', element:'Air', glyph:'♎',
   color:'rgba(236,72,153,.25)',
   traits:['Charming','Fair','Social','Graceful'],
   hi:'संतुलन ही आज की ताकत है — हर फैसले में न्याय रखें।',
   horo:[
    'Balance is your theme today — a fair decision earns you respect. Social invitations multiply; choose quality over quantity.',
    'Romance and harmony bless your relationships. Legal or partnership matters move positively. Beauty surrounds you — appreciate it.',
    'Your charm opens closed doors. Financial negotiations favor you. Avoid people-pleasing; speak your truth gently but firmly.']},
  {name:'Scorpio', hindi:'वृश्चिक', dates:'23 Oct – 21 Nov', element:'Water', glyph:'♏',
   color:'rgba(168,85,247,.28)',
   traits:['Intense','Brave','Passionate','Mysterious'],
   hi:'छुपी हुई ताकत आज जागेगी — रहस्य से दूर रहें।',
   horo:[
    'Hidden strengths surface today — use them wisely. Research and investigation bring breakthroughs. Keep secrets; trust is precious.',
    'Passion fuels your ambitions. A financial matter clarifies in your favor. Deep conversations strengthen a close bond.',
    'Transformation is underway — release what no longer serves you. Intuition peaks tonight; journal your insights. Avoid jealousy.']},
  {name:'Sagittarius', hindi:'धनु', dates:'22 Nov – 21 Dec', element:'Fire', glyph:'♐',
   color:'rgba(249,115,22,.25)',
   traits:['Adventurous','Optimistic','Honest','Philosophical'],
   hi:'नई ऊँचाइयाँ इंतज़ार कर रही हैं — तीर को सीधा निशाने पर रखें।',
   horo:[
    'Adventure calls — a journey or new learning excites you. Optimism attracts lucky breaks. Higher education or foreign links prosper.',
    'Your honesty inspires others, though soften the delivery. Travel plans take shape. Sports or outdoor activity rejuvenates you.',
    'Philosophical clarity guides a big decision. Money from unexpected sources possible. Share your wisdom generously.']},
  {name:'Capricorn', hindi:'मकर', dates:'22 Dec – 19 Jan', element:'Earth', glyph:'♑',
   color:'rgba(100,116,139,.35)',
   traits:['Disciplined','Ambitious','Wise','Patient'],
   hi:'धीरे-धीरे ही सही, मंज़िल ज़रूर मिलेगी — कर्म करते रहें।',
   horo:[
    'Discipline brings tangible rewards today. Career moves you make now have long-term impact. Authority figures favor your plans.',
    'Slow and steady wins your race. A property or asset matter progresses. Elders’ blessings strengthen your resolve.',
    'Ambition is high — pace yourself to avoid burnout. Financial discipline pays off. Recognition comes quietly but surely.']},
  {name:'Aquarius', hindi:'कुंभ', dates:'20 Jan – 18 Feb', element:'Air', glyph:'♒',
   color:'rgba(34,211,238,.28)',
   traits:['Innovative','Independent','Humanitarian','Visionary'],
   hi:'नया विचार दुनिया बदल सकता है — अपनी यूनिकनेस को पहचानें।',
   horo:[
    'Innovative ideas win applause today. Team projects benefit from your vision. A humanitarian gesture brings inner peace.',
    'Your uniqueness is your power — do not conform. Technology and networking open new income streams. Friends rally around you.',
    'Visionary planning sets up future success. A quirky new interest captivates you. Community work brings unexpected joy.']},
  {name:'Pisces', hindi:'मीन', dates:'19 Feb – 20 Mar', element:'Water', glyph:'♓',
   color:'rgba(129,140,248,.3)',
   traits:['Artistic','Compassionate','Dreamy','Gentle'],
   hi:'सपने आज सच होने को हैं — कल्पना की उड़ान भरें।',
   horo:[
    'Dreams carry messages tonight — keep a notebook nearby. Artistic pursuits flow effortlessly. Compassion heals an old wound.',
    'Imagination and intuition merge beautifully. Music, art or meditation brings deep peace. A gentle soul enters your orbit.',
    'Spiritual practices ground you. Avoid escapism; face reality with your natural grace. Romance feels otherworldly.']},
];

/* ── DATA : NAVAGRAHA ─────────────────────── */
const PLANETS = [
  {glyph:'☉', name:'Sun', hindi:'सूर्य', color:'rgba(244,192,77,.35)', desc:'आत्मा, पिता, अधिकार और vitality का कारक।'},
  {glyph:'☽', name:'Moon', hindi:'चंद्र', color:'rgba(226,232,240,.3)', desc:'मन, मां, भावनाएँ और शांति का स्वामी।'},
  {glyph:'♂', name:'Mars', hindi:'मंगल', color:'rgba(239,68,68,.35)', desc:'साहस, ऊर्जा, भाई और action का ग्रह।'},
  {glyph:'☿', name:'Mercury', hindi:'बुध', color:'rgba(34,197,94,.3)', desc:'बुद्धि, व्यापार, communication और विद्या।'},
  {glyph:'♃', name:'Jupiter', hindi:'गुरु', color:'rgba(245,158,11,.32)', desc:'ज्ञान, संतान, धन और expansion के देवगुरु।'},
  {glyph:'♀', name:'Venus', hindi:'शुक्र', color:'rgba(236,72,153,.32)', desc:'प्रेम, कला, सुख और luxury की देवी।'},
  {glyph:'♄', name:'Saturn', hindi:'शनि', color:'rgba(100,116,139,.4)', desc:'कर्म, अनुशासन, परिश्रम और न्याय के दंडाधिकारी।'},
  {glyph:'☊', name:'Rahu', hindi:'राहु', color:'rgba(124,58,237,.32)', desc:'Ambition, illusion और worldly desires का छाया ग्रह।'},
  {glyph:'☋', name:'Ketu', hindi:'केतु', color:'rgba(148,163,184,.3)', desc:'Moksha, intuition और past karma का छाया ग्रह।'},
];

/* ── DATA : NUMEROLOGY ────────────────────── */
const NUMEROLOGY = {
  1:{planet:'सूर्य · Sun', title:'The Leader', desc:'आप natural leader हैं — independent, ambitious और creative। Authority और fame आपकी तरफ आकर्षित होते हैं।', color:'Gold', day:'रविवार'},
  2:{planet:'चंद्र · Moon', title:'The Peacemaker', desc:'आप sensitive, diplomatic और intuitive हैं। दूसरों की भावनाओं को समझना आपकी सबसे बड़ी ताकत है।', color:'White', day:'सोमवार'},
  3:{planet:'गुरु · Jupiter', title:'The Creator', desc:'आप optimistic, expressive और wise हैं। Communication, teaching और creative fields में सफलता मिलती है।', color:'Yellow', day:'गुरुवार'},
  4:{planet:'राहु · Rahu', title:'The Builder', desc:'आप practical, disciplined और dependable हैं। Mehnat से बनी सफलता आपकी पहचान है — कभी हार मत मानिए।', color:'Blue', day:'शनिवार'},
  5:{planet:'बुध · Mercury', title:'The Communicator', desc:'आप quick-witted, adaptable और curious हैं। Business, writing और travel में भाग्य साथ देता है।', color:'Green', day:'बुधवार'},
  6:{planet:'शुक्र · Venus', title:'The Lover', desc:'आप loving, artistic और responsible हैं। Beauty, harmony और relationships आपके जीवन का केंद्र हैं।', color:'Pink', day:'शुक्रवार'},
  7:{planet:'केतु · Ketu', title:'The Mystic', desc:'आप spiritual, analytical और unique हैं। Research, occult sciences और deep thinking में genius छुपा है।', color:'Violet', day:'सोमवार'},
  8:{planet:'शनि · Saturn', title:'The Achiever', desc:'आप determined, hardworking और just हैं। धीरे-धीरे बनाया गया empire सबसे मजबूत होता है — शनि आपका साथ देंगे।', color:'Black', day:'शनिवार'},
  9:{planet:'मंगल · Mars', title:'The Warrior', desc:'आप courageous, passionate और humanitarian हैं। Leadership और sports में आप unbeatable हैं।', color:'Red', day:'मंगलवार'},
};

const LUCKY_COLORS = ['Gold','Crimson','Emerald','Royal Blue','Violet','Amber','Silver','Teal','Rose'];
const MATCH = {Fire:'Aries', Earth:'Taurus', Air:'Gemini', Water:'Cancer'};

/* ── SPLASH SCREEN ────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('splash').classList.add('hide'), 2300);
});

/* ── STARFIELD CANVAS ─────────────────────── */
(function starfield(){
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], meteors = [];

  function init(){
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
    stars = Array.from({length: Math.min(180, W/7)}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.5 + .3,
      s: Math.random()*.35 + .05,
      tw: Math.random()*Math.PI*2,
      hue: Math.random() < .18 ? '244,192,77' : (Math.random() < .5 ? '199,180,255' : '255,255,255')
    }));
  }
  init();
  addEventListener('resize', init);

  function spawnMeteor(){
    meteors.push({ x: Math.random()*W*.7, y: Math.random()*H*.3, len: 0, life: 1, vx: 7+Math.random()*4, vy: 3+Math.random()*2 });
  }
  setInterval(() => { if(Math.random() < .55) spawnMeteor(); }, 3800);

  (function draw(){
    ctx.clearRect(0,0,W,H);
    for(const st of stars){
      st.y += st.s; st.tw += .03;
      if(st.y > H){ st.y = -2; st.x = Math.random()*W; }
      const a = .35 + Math.sin(st.tw)*.3;
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${st.hue},${a})`;
      ctx.fill();
    }
    meteors = meteors.filter(m => m.life > 0);
    for(const m of meteors){
      m.x += m.vx; m.y += m.vy; m.len += 4; m.life -= .02;
      const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.len*2.2, m.y - m.len);
      grad.addColorStop(0, `rgba(255,255,255,${.9*m.life})`);
      grad.addColorStop(1, 'rgba(167,139,250,0)');
      ctx.strokeStyle = grad; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x - m.len*2.2, m.y - m.len); ctx.stroke();
    }
    requestAnimationFrame(draw);
  })();
})();

/* ── NAVBAR (scroll + mobile) ─────────────── */
const navbar = document.getElementById('navbar');
addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 24));

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open'); navLinks.classList.remove('open');
}));

/* ── SCROLL SPY ───────────────────────────── */
const sections = ['home','zodiac','planets','numerology'];
addEventListener('scroll', () => {
  let current = 'home';
  for(const id of sections){
    const el = document.getElementById(id);
    if(el && el.getBoundingClientRect().top <= innerHeight*.4) current = id;
  }
  document.querySelectorAll('.nav-link').forEach(a =>
    a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

/* ── BUILD : ZODIAC WHEEL (hero) ──────────── */
(function buildWheel(){
  const wheel = document.getElementById('zodiacWheel');
  let html = '<div class="wheel-ring"></div><div class="wheel-ring inner"></div>';
  SIGNS.forEach((s, i) => {
    const ang = (i * 30 - 90) * Math.PI/180;
    const R = wheel.offsetWidth ? wheel.offsetWidth/2 : 200;
    const x = Math.cos(ang)*R, y = Math.sin(ang)*R;
    html += `<div class="wheel-glyph" style="transform: translate(${x}px,${y}px) rotate(${-(i*30)}deg)" data-i="${i}">${s.glyph}</div>`;
  });
  wheel.innerHTML = html;
})();

/* ── BUILD : MARQUEE ──────────────────────── */
(function buildMarquee(){
  const mq = document.getElementById('marquee');
  const seq = SIGNS.map(s => `<div class="m-item"><b>${s.glyph}</b> ${s.name} · ${s.hindi}</div>`).join('');
  mq.innerHTML = seq + seq; /* duplicate for seamless loop */
})();

/* ── BUILD : ZODIAC GRID ──────────────────── */
(function buildZodiac(){
  const grid = document.getElementById('zodiacGrid');
  grid.innerHTML = SIGNS.map((s, i) => `
    <div class="z-card reveal" style="--zc:${s.color}" data-i="${i}">
      <div class="z-top">
        <div class="z-symbol">${s.glyph}</div>
        <div><span class="z-name">${s.name}</span><span class="z-hindi">${s.hindi}</span></div>
      </div>
      <div class="z-dates"><span>${s.dates}</span><span class="z-element el-${s.element}">${s.element}</span></div>
      <div class="z-view">आज का राशिफल</div>
    </div>`).join('');
  grid.querySelectorAll('.z-card').forEach(c => c.addEventListener('click', () => openHoroscope(+c.dataset.i)));
})();

/* ── BUILD : PLANETS ──────────────────────── */
(function buildPlanets(){
  document.getElementById('planetGrid').innerHTML = PLANETS.map(p => `
    <div class="p-card reveal" style="--pc:${p.color}">
      <div class="p-glyph">${p.glyph}</div>
      <span class="p-name">${p.name}</span>
      <span class="p-hindi">${p.hindi}</span>
      <p class="p-desc">${p.desc}</p>
    </div>`).join('');
})();

/* ── HOROSCOPE MODAL ──────────────────────── */
const backdrop = document.getElementById('modalBackdrop');

function dayOfYear(){
  const now = new Date();
  return Math.floor((now - new Date(now.getFullYear(),0,0)) / 864e5);
}

function openHoroscope(i){
  const s = SIGNS[i];
  const doy = dayOfYear();
  document.getElementById('mSymbol').textContent = s.glyph;
  document.getElementById('mName').textContent = `${s.name} · ${s.hindi}`;
  document.getElementById('mDates').textContent = `${s.dates} · ${s.element} Element`;
  document.getElementById('mHindi').textContent = s.hi;
  document.getElementById('mHoro').textContent = s.horo[doy % s.horo.length];
  document.getElementById('mTraits').innerHTML = s.traits.map(t => `<span class="m-tag">${t}</span>`).join('');
  document.getElementById('mLuckyNum').textContent = ((doy*7 + i*3) % 9) + 1;
  document.getElementById('mLuckyColor').textContent = LUCKY_COLORS[(doy + i*2) % LUCKY_COLORS.length];
  document.getElementById('mMatch').textContent = MATCH[s.element];
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if(e.target === backdrop) closeModal(); });
addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* ── NUMEROLOGY ───────────────────────────── */
function reduceNum(n){
  while(n > 9 && n !== 11 && n !== 22){
    n = String(n).split('').reduce((a,b) => a + +b, 0);
  }
  return n > 9 ? ((n % 9) || 9) : n;
}

document.getElementById('numForm').addEventListener('submit', e => {
  e.preventDefault();
  const dob = document.getElementById('numDob').value;
  if(!dob) return;
  const digits = dob.replace(/\D/g, '').split('').map(Number);
  const mool = reduceNum(digits.reduce((a,b) => a+b, 0));
  const n = NUMEROLOGY[mool];

  const detail = document.getElementById('numDetail');
  detail.hidden = false;
  document.querySelector('.num-placeholder').style.display = 'none';
  document.getElementById('numBig').textContent = mool;
  document.getElementById('numTitle').textContent = n.title;
  document.getElementById('numPlanet').textContent = 'ग्रह स्वामी: ' + n.planet;
  document.getElementById('numDesc').textContent = n.desc;
  document.getElementById('numLuckyNum').textContent = mool;
  document.getElementById('numLuckyColor').textContent = n.color;
  document.getElementById('numDay').textContent = n.day;

  /* re-trigger pop animation */
  const big = document.getElementById('numBig');
  big.style.animation = 'none'; void big.offsetWidth; big.style.animation = '';
});

/* ── SCROLL REVEAL ────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((en, idx) => {
    if(en.isIntersecting){
      en.target.style.transitionDelay = (idx % 4) * 70 + 'ms';
      en.target.classList.add('visible');
      revealObs.unobserve(en.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── 3D TILT (desktop only) ───────────────── */
if(matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove', e => {
    const card = e.target.closest?.('.z-card, .p-card, .feature-card');
    if(!card) return;
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - .5) * -8;
    const ry = ((e.clientX - r.left) / r.width - .5) * 8;
    card.style.transform = `translateY(-8px) perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  document.addEventListener('mouseout', e => {
    const card = e.target.closest?.('.z-card, .p-card, .feature-card');
    if(card) card.style.transform = '';
  });
}
