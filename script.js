// =========================================================
// BARANI KARTHICK PORTFOLIO — VANILLA JS
// =========================================================
(function(){
  "use strict";

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------------------------------------------
     1-7. LOADING SCREEN
  --------------------------------------------------- */
  (function loadingScreen(){
    const screen = document.getElementById('loading-screen');
    const bar = document.getElementById('loading-bar-fill');
    const pct = document.getElementById('loading-percent');
    const status = document.getElementById('loading-status');
    const canvas = document.getElementById('loading-particles');

    document.body.style.overflow = 'hidden';

    // particle canvas for loading screen
    let particles = [];
    if(canvas && !reducedMotion){
      const ctx = canvas.getContext('2d');
      function resize(){ canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
      resize();
      window.addEventListener('resize', resize);
      const count = isTouch ? 14 : 24;
      for(let i=0;i<count;i++){
        particles.push({
          x: Math.random()*canvas.width,
          y: canvas.height + Math.random()*100,
          r: 1 + Math.random()*1.5,
          speed: 0.3 + Math.random()*0.6,
          drift: (Math.random()-0.5)*0.3,
          alpha: 0.3 + Math.random()*0.4
        });
      }
      let raf;
      function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p=>{
          p.y -= p.speed; p.x += p.drift;
          if(p.y < -10){ p.y = canvas.height+10; p.x = Math.random()*canvas.width; }
          ctx.beginPath();
          ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
          ctx.fillStyle = `rgba(16,185,129,${p.alpha})`;
          ctx.shadowColor = '#10B981';
          ctx.shadowBlur = 6;
          ctx.fill();
        });
        raf = requestAnimationFrame(draw);
      }
      draw();
      window.addEventListener('bk-loading-done', ()=> cancelAnimationFrame(raf), { once:true });
    }

    const messages = [
      { t: 0,    msg: 'INITIALIZING NEURAL SYSTEM...' },
      { t: 1000, msg: 'LOADING AI PORTFOLIO...' },
      { t: 2000, msg: 'CONNECTING INTELLIGENCE...' },
      { t: 3000, msg: 'CALIBRATING MACHINE LEARNING...' },
      { t: 4000, msg: 'FINALIZING INTERFACE...' },
      { t: 4800, msg: 'SYSTEM READY' }
    ];
    messages.forEach(m=> setTimeout(()=>{ status.textContent = m.msg; }, m.t));

    const duration = 5000;
    const start = performance.now();
    function tick(now){
      const elapsed = now - start;
      const progress = Math.min(elapsed/duration, 1);
      const val = Math.round(progress*100);
      bar.style.width = val + '%';
      pct.textContent = val + '%';
      if(progress < 1){
        requestAnimationFrame(tick);
      } else {
        setTimeout(finish, 250);
      }
    }
    function finish(){
      screen.classList.add('hide');
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('bk-loading-done'));
    }
    requestAnimationFrame(tick);
    setTimeout(finish, 6500); // safety fallback
  })();

  /* ---------------------------------------------------
     8-10. NAVBAR — mobile menu, scroll effect, active nav
  --------------------------------------------------- */
  (function nav(){
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('nav-burger');
    const links = document.getElementById('nav-links');
    const overlay = document.getElementById('mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], header[id]');

    window.addEventListener('scroll', ()=>{
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    function toggleMenu(open){
      links.classList.toggle('open', open);
      overlay.classList.toggle('show', open);
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    }
    burger.addEventListener('click', ()=> toggleMenu(!links.classList.contains('open')));
    overlay.addEventListener('click', ()=> toggleMenu(false));
    navLinks.forEach(l=> l.addEventListener('click', ()=> toggleMenu(false)));
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape' && links.classList.contains('open')) toggleMenu(false);
    });

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const id = entry.target.getAttribute('id');
          navLinks.forEach(l=> l.classList.toggle('active', l.getAttribute('href') === '#'+id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s=> observer.observe(s));

    // 11. Smooth scrolling for same-page anchors (CSS scroll-behavior handles most; JS fallback for focus mgmt)
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const id = a.getAttribute('href');
        if(id.length > 1){
          const target = document.querySelector(id);
          if(target){
            e.preventDefault();
            target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
            history.pushState(null, '', id);
          }
        }
      });
    });
  })();

  /* ---------------------------------------------------
     17-18. THEME TOGGLE + localStorage
  --------------------------------------------------- */
  (function theme(){
    const btn = document.getElementById('theme-toggle');
    const icon = btn.querySelector('i');
    function apply(light){
      document.body.classList.toggle('light-theme', light);
      icon.className = light ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      btn.setAttribute('aria-pressed', String(light));
    }
    let saved = null;
    try { saved = localStorage.getItem('bk-theme'); } catch(e){}
    apply(saved === 'light');
    btn.addEventListener('click', ()=>{
      const nowLight = !document.body.classList.contains('light-theme');
      apply(nowLight);
      try { localStorage.setItem('bk-theme', nowLight ? 'light' : 'dark'); } catch(e){}
    });
  })();

  /* ---------------------------------------------------
     19. CURSOR GLOW (desktop only)
  --------------------------------------------------- */
  (function cursorGlow(){
    if(isTouch || reducedMotion) return;
    document.body.classList.add('has-cursor-glow');
    const glow = document.getElementById('cursor-glow');
    window.addEventListener('mousemove', (e)=>{
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  })();

  /* ---------------------------------------------------
     12. HERO — typing animation
  --------------------------------------------------- */
  (function typing(){
    const el = document.getElementById('typed-role');
    const roles = ['Machine Learning Engineer','AI Engineer','Data Science Student','Full Stack Developer','NLP Enthusiast'];
    if(reducedMotion){ el.textContent = roles[0]; return; }
    let ri = 0, ci = 0, deleting = false;
    function step(){
      const word = roles[ri];
      if(!deleting){
        ci++; el.textContent = word.slice(0, ci);
        if(ci === word.length){ deleting = true; setTimeout(step, 1400); return; }
      } else {
        ci--; el.textContent = word.slice(0, ci);
        if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
      }
      setTimeout(step, deleting ? 40 : 75);
    }
    setTimeout(step, 900);
  })();

  /* ---------------------------------------------------
     25-26. NEURAL PARTICLES + CONNECTIONS (background canvas)
  --------------------------------------------------- */
  (function bgParticles(){
    const canvas = document.getElementById('bg-particles');
    if(!canvas || reducedMotion) return;
    const ctx = canvas.getContext('2d');
    function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    const count = isTouch ? 16 : 42; // spec: desktop 30-50, mobile 10-20
    const maxDist = isTouch ? 90 : 130;
    const particles = [];
    for(let i=0;i<count;i++){
      particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        vx: (Math.random()-0.5)*0.25,
        vy: (Math.random()-0.5)*0.25,
        r: 1 + Math.random()*1.4
      });
    }

    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p=>{
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = 'rgba(16,185,129,0.55)';
        ctx.fill();
      });
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if(dist < maxDist){
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34,211,238,${0.12 * (1 - dist/maxDist)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  })();

  /* ---------------------------------------------------
     27. PARALLAX — mouse parallax on floating hero cards (desktop only)
  --------------------------------------------------- */
  (function parallax(){
    if(isTouch || reducedMotion) return;
    const cards = document.querySelectorAll('.fcard');
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e)=>{
      const rect = hero.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      cards.forEach(card=>{
        const depth = parseFloat(card.dataset.depth || 0.4);
        const x = cx * depth * 26;
        const y = cy * depth * 26;
        card.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  })();

  /* ---------------------------------------------------
     13. HERO STAT COUNTERS
  --------------------------------------------------- */
  (function statCounters(){
    const stats = document.querySelectorAll('.stat-number[data-target], .stat-number[data-decimal]');
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        const el = entry.target;
        observer.unobserve(el);
        const suffix = el.dataset.suffix || '';
        if(el.dataset.decimal){
          animateValue(el, 0, parseFloat(el.dataset.decimal), 1400, true, suffix);
        } else if(el.dataset.target){
          animateValue(el, 0, parseInt(el.dataset.target, 10), 1200, false, suffix);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(s=> observer.observe(s));

    function animateValue(el, start, end, duration, decimal, suffix){
      if(reducedMotion){ el.textContent = (decimal ? end.toFixed(2) : end) + suffix; return; }
      const startTime = performance.now();
      function frame(now){
        const progress = Math.min((now-startTime)/duration, 1);
        const eased = 1 - Math.pow(1-progress, 3);
        const val = start + (end-start)*eased;
        el.textContent = (decimal ? val.toFixed(2) : Math.round(val)) + suffix;
        if(progress < 1) requestAnimationFrame(frame);
        else el.textContent = (decimal ? end.toFixed(2) : end) + suffix;
      }
      requestAnimationFrame(frame);
    }
  })();

  /* ---------------------------------------------------
     28-30. NEURAL SKILL MATRIX — build cards, progress bars, 3D tilt
  --------------------------------------------------- */
  (function skillMatrix(){
    const skills = [
      { name:'Python', cat:'Programming', logo:'assets/logos/Python-logo.png', pct:90 },
      { name:'Java', cat:'Programming', logo:'assets/logos/java-logo.png', pct:70 },
      { name:'JavaScript', cat:'Programming', logo:'assets/logos/javascript-logo.png', pct:75 },
      { name:'HTML5', cat:'Frontend', logo:'assets/logos/HTML5_logo.png', pct:90 },
      { name:'CSS3', cat:'Frontend', logo:'assets/logos/CSS3_logo.png', pct:88 },
      { name:'Node.js', cat:'Backend', logo:'assets/logos/node-js-icon.png', pct:72 },
      { name:'SQL', cat:'Database', logo:'assets/logos/sql-logo.webp', pct:82 },
      { name:'MongoDB', cat:'Database', logo:'assests/logos/mongodb-logo.png', pct:78 },
      { name:'Artificial Intelligence', cat:'AI', logo:'assets/logos/ai-logo.png', pct:85 },
      { name:'Machine Learning', cat:'AI', logo:'assets/logos/machine-learning-logo.png', pct:88 },
      { name:'Deep Learning', cat:'AI', logo:'assets/logos/Deep-learning-logo.png', pct:82 },
      { name:'Scikit-learn', cat:'Data Science', logo:'assets/logos/Scikit-learn-logo.png', pct:85 },
      { name:'Power BI', cat:'Data Science', logo:'assets/logos/Power-BI-Logo.png', pct:78 },
      { name:'NLP', cat:'NLP', logo:'assets/logos/NLP.logo.png', pct:80 },
      { name:'Computer Vision', cat:'Computer Vision', logo:'assets/logos/Computer-vision-logo.png', pct:78 },
      { name:'TensorFlow', cat:'Deep Learning', logo:'assets/logos/Tensorflow-logo.png', pct:80 },
      { name:'PyTorch', cat:'Deep Learning', logo:'assets/logos/pytorch-logo.png', pct:75 },
      { name:'Cloud Computing', cat:'Cloud', logo:'assets/logos/cloud-logo.webp', pct:75 },
      { name:'Git', cat:'Developer Tools', logo:'assets/logos/git-logo.png', pct:80 },
      { name:'ChatGPT', cat:'Generative AI', logo:'assets/logos/ChatGPT-Logo.png', pct:90 },
      { name:'Claude AI', cat:'Generative AI', logo:'assets/logos/Claude-AI-logo.png', pct:85 }
    ];

    const durations = ['4.8s','5.2s','5.8s','6.2s','6.8s','7.2s'];
    const grid = document.getElementById('skill-grid');
    const frag = document.createDocumentFragment();

    skills.forEach((s, i)=>{
      const card = document.createElement('div');
      card.className = 'skill-card reveal';
      card.style.setProperty('--dur', durations[i % durations.length]);
      const logoHtml = s.icon
        ? `<i class="${s.icon}" aria-hidden="true"></i>`
        : `<img src="${s.logo}" alt="${s.name} logo" loading="lazy">`;
      card.innerHTML = `
        <div class="skill-logo-wrap">${logoHtml}</div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-category">${s.cat}</div>
        <div class="skill-bar-track"><div class="skill-bar-fill" data-pct="${s.pct}"></div></div>
        <span class="skill-percent">${s.pct}%</span>
        <div class="skill-status">● Active</div>
      `;
      frag.appendChild(card);
    });
    grid.appendChild(frag);

    const bars = grid.querySelectorAll('.skill-bar-fill');
    const barObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.style.width = entry.target.dataset.pct + '%';
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b=> barObserver.observe(b));

    if(!isTouch && !reducedMotion){
      grid.querySelectorAll('.skill-card').forEach(card=>{
        card.addEventListener('mousemove', (e)=>{
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left)/rect.width - 0.5;
          const y = (e.clientY - rect.top)/rect.height - 0.5;
          card.style.transform = `perspective(600px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
      });
    }

    const bg = document.getElementById('neural-bg');
    if(bg && !reducedMotion){
      for(let i=0;i<18;i++){
        const dot = document.createElement('span');
        dot.style.left = Math.random()*100 + '%';
        dot.style.top = Math.random()*100 + '%';
        bg.appendChild(dot);
      }
    }
  })();

  /* ---------------------------------------------------
     PROJECT MODAL (15, 21-24)
  --------------------------------------------------- */
  (function projectModal(){
    const modal = document.getElementById('project-modal');
    const img = document.getElementById('pm-img');
    const title = document.getElementById('pm-title');
    const desc = document.getElementById('pm-desc');
    const tagsWrap = document.getElementById('pm-tags');

    function open(card){
      img.src = card.dataset.img;
      img.alt = card.dataset.title;
      title.textContent = card.dataset.title;
      desc.textContent = card.dataset.desc;
      tagsWrap.innerHTML = card.dataset.tags.split(',').map(t=>`<span>${t.trim()}</span>`).join('');
      modal.classList.add('show');
      document.body.classList.add('modal-open');
      modal.querySelector('.modal-close').focus();
    }
    function close(){
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
    document.querySelectorAll('.project-card').forEach(card=>{
      card.addEventListener('click', ()=> open(card));
      card.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(card); }
      });
    });
    modal.querySelectorAll('[data-close]').forEach(el=> el.addEventListener('click', close));
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modal.classList.contains('show')) close(); });
  })();

  /* ---------------------------------------------------
     CERTIFICATE MODAL (16, 21-24)
  --------------------------------------------------- */
  (function certModal(){
    const modal = document.getElementById('cert-modal');
    const img = document.getElementById('cm-img');
    const title = document.getElementById('cm-title');
    const org = document.getElementById('cm-org');
    const download = document.getElementById('cm-download');

    function open(card){
      img.src = card.dataset.img;
      img.alt = card.dataset.title;
      title.textContent = card.dataset.title;
      org.textContent = card.dataset.org;
      download.href = card.dataset.img;
      modal.classList.add('show');
      document.body.classList.add('modal-open');
      modal.querySelector('.modal-close').focus();
    }
    function close(){
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
    document.querySelectorAll('.cert-card').forEach(card=>{
      card.addEventListener('click', ()=> open(card));
      card.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(card); }
      });
    });
    modal.querySelectorAll('[data-close]').forEach(el=> el.addEventListener('click', close));
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modal.classList.contains('show')) close(); });
  })();

  /* ---------------------------------------------------
     20. BACK TO TOP
  --------------------------------------------------- */
  (function backToTop(){
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', ()=>{
      btn.classList.toggle('show', window.scrollY > 500);
    });
    btn.addEventListener('click', ()=>{
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  })();

  /* ---------------------------------------------------
     21. CONTACT FORM — client-side validation + mailto fallback
  --------------------------------------------------- */
  (function contactForm(){
    const form = document.getElementById('contact-form');
    const note = document.getElementById('form-note');

    function setError(id, msg){
      const row = document.getElementById(id).closest('.form-row');
      const err = document.getElementById('err-' + id.replace('cf-',''));
      if(msg){ row.classList.add('invalid'); err.textContent = msg; }
      else { row.classList.remove('invalid'); err.textContent = ''; }
    }

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const subject = document.getElementById('cf-subject').value.trim();
      const message = document.getElementById('cf-message').value.trim();
      let valid = true;

      if(!name){ setError('cf-name', 'Please enter your name.'); valid = false; }
      else setError('cf-name', '');

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email || !emailPattern.test(email)){ setError('cf-email', 'Please enter a valid email.'); valid = false; }
      else setError('cf-email', '');

      if(!subject){ setError('cf-subject', 'Please enter a subject.'); valid = false; }
      else setError('cf-subject', '');

      if(!message){ setError('cf-message', 'Please enter a message.'); valid = false; }
      else setError('cf-message', '');

      if(!valid){
        note.textContent = '';
        return;
      }

      const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailSubject = encodeURIComponent(subject);
      window.location.href = `mailto:baranikarthick19@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      note.textContent = 'Opening your email client to send this message…';
      form.reset();
    });
  })();

  /* ---------------------------------------------------
     14, 31. SCROLL REVEAL for section content
  --------------------------------------------------- */
  (function scrollReveal(){
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(t=> observer.observe(t));
  })();

})();
