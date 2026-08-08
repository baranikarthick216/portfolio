// =========================================================
// BARANI KARTHICK PORTFOLIO — VANILLA JS
// =========================================================
(function(){
  "use strict";

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------------------------------------------
     LOADING SCREEN
  --------------------------------------------------- */
  (function loadingScreen(){
    const screen = document.getElementById('loading-screen');
    const bar = document.getElementById('loading-bar-fill');
    const pct = document.getElementById('loading-percent');
    const status = document.getElementById('loading-status');
    const particlesWrap = document.getElementById('loading-particles');

    // particles
    if(!reducedMotion){
      for(let i=0;i<26;i++){
        const p = document.createElement('span');
        p.style.left = Math.random()*100 + '%';
        p.style.bottom = '-10px';
        p.style.animationDuration = (3 + Math.random()*4) + 's';
        p.style.animationDelay = (Math.random()*4) + 's';
        particlesWrap.appendChild(p);
      }
    }

    const messages = [
      { t: 0,    msg: 'INITIALIZING NEURAL SYSTEM...' },
      { t: 1000, msg: 'LOADING AI PORTFOLIO...' },
      { t: 2000, msg: 'CONNECTING INTELLIGENCE...' },
      { t: 3000, msg: 'CALIBRATING MACHINE LEARNING...' },
      { t: 4000, msg: 'FINALIZING INTERFACE...' },
      { t: 4800, msg: 'SYSTEM READY' }
    ];
    messages.forEach(m=>{
      setTimeout(()=>{ status.textContent = m.msg; }, m.t);
    });

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
        setTimeout(()=>{
          screen.classList.add('hide');
          document.body.style.overflow = '';
        }, 250);
      }
    }
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(tick);

    // Safety fallback
    setTimeout(()=>{
      screen.classList.add('hide');
      document.body.style.overflow = '';
    }, 6500);
  })();

  /* ---------------------------------------------------
     NAVBAR — scroll state, active link, mobile menu
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
    }
    burger.addEventListener('click', ()=> toggleMenu(!links.classList.contains('open')));
    overlay.addEventListener('click', ()=> toggleMenu(false));
    navLinks.forEach(l=> l.addEventListener('click', ()=> toggleMenu(false)));

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const id = entry.target.getAttribute('id');
          navLinks.forEach(l=>{
            l.classList.toggle('active', l.getAttribute('href') === '#'+id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s=> observer.observe(s));
  })();

  /* ---------------------------------------------------
     THEME TOGGLE
  --------------------------------------------------- */
  (function theme(){
    const btn = document.getElementById('theme-toggle');
    const icon = btn.querySelector('i');
    function apply(light){
      document.body.classList.toggle('light-theme', light);
      icon.className = light ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
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
     HERO — typing animation
  --------------------------------------------------- */
  (function typing(){
    const el = document.getElementById('typed-role');
    const roles = ['Machine Learning Engineer','AI Engineer','Data Science Student','Full Stack Developer','NLP Enthusiast'];
    if(reducedMotion){ el.textContent = roles[0]; return; }
    let ri = 0, ci = 0, deleting = false;

    function step(){
      const word = roles[ri];
      if(!deleting){
        ci++;
        el.textContent = word.slice(0, ci);
        if(ci === word.length){
          deleting = true;
          setTimeout(step, 1400);
          return;
        }
      } else {
        ci--;
        el.textContent = word.slice(0, ci);
        if(ci === 0){
          deleting = false;
          ri = (ri+1) % roles.length;
        }
      }
      setTimeout(step, deleting ? 40 : 75);
    }
    setTimeout(step, 900);
  })();

  /* ---------------------------------------------------
     HERO — particles
  --------------------------------------------------- */
  (function heroParticles(){
    if(reducedMotion) return;
    const wrap = document.getElementById('hero-particles');
    for(let i=0;i<30;i++){
      const p = document.createElement('span');
      p.style.left = Math.random()*100 + '%';
      p.style.bottom = '-10px';
      p.style.animationDuration = (5 + Math.random()*6) + 's';
      p.style.animationDelay = (Math.random()*6) + 's';
      wrap.appendChild(p);
    }
  })();

  /* ---------------------------------------------------
     HERO — mouse parallax on floating cards (desktop only)
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
        card.style.setProperty('--px', x + 'px');
        card.style.setProperty('--py', y + 'px');
        card.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  })();

  /* ---------------------------------------------------
     STAT COUNTERS
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
          const target = parseFloat(el.dataset.decimal);
          animateValue(el, 0, target, 1400, true, suffix);
        } else if(el.dataset.target){
          const target = parseInt(el.dataset.target, 10);
          animateValue(el, 0, target, 1200, false, suffix);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(s=> observer.observe(s));

    function animateValue(el, start, end, duration, decimal, suffix){
      if(reducedMotion){
        el.textContent = (decimal ? end.toFixed(2) : end) + suffix;
        return;
      }
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
     NEURAL SKILL MATRIX — build cards dynamically
  --------------------------------------------------- */
  (function skillMatrix(){
    const skills = [
      { name:'Python', cat:'Programming', logo:'assets/logos/Python-logo.png', pct:90 },
      { name:'Machine Learning', cat:'Machine Learning', logo:'assets/logos/machine-learning-logo.png', pct:88 },
      { name:'Artificial Intelligence', cat:'Artificial Intelligence', logo:'assets/logos/ai-logo.png', pct:85 },
      { name:'Deep Learning', cat:'Deep Learning', logo:'assets/logos/Deep-learning-logo.png', pct:82 },
      { name:'Data Science', cat:'Data Science', logo:'assets/logos/machine-learning-logo.png', pct:85 },
      { name:'NLP', cat:'NLP', logo:'assets/logos/NLP.logo.png', pct:80 },
      { name:'Computer Vision', cat:'Computer Vision', logo:'assets/logos/Computer-vision-logo.png', pct:78 },
      { name:'JavaScript', cat:'Frontend Development', logo:'assets/logos/javascript-logo.png', pct:75 },
      { name:'HTML5', cat:'Frontend Development', logo:'assets/logos/HTML5_logo.png', pct:90 },
      { name:'CSS3', cat:'Frontend Development', logo:'assets/logos/CSS3_logo.png', pct:88 },
      { name:'Node.js', cat:'Backend Development', logo:'assets/logos/node-js-icon.png', pct:72 },
      { name:'SQL', cat:'Backend Development', logo:'assets/logos/sql-logo.webp', pct:82 },
      { name:'Git', cat:'Developer Tools', logo:'assets/logos/git-logo.png', pct:80 },
      { name:'TensorFlow', cat:'Deep Learning', logo:'assets/logos/Tensorflow-logo.png', pct:80 },
      { name:'PyTorch', cat:'Deep Learning', logo:'assets/logos/pytorch-logo.png', pct:75 },
      { name:'Power BI', cat:'Data Science', logo:'assets/logos/Power-BI-Logo.png', pct:78 },
      { name:'Scikit-learn', cat:'Machine Learning', logo:'assets/logos/Scikit-learn-logo.png', pct:88 },
      { name:'Java', cat:'Programming', logo:'assets/logos/java-logo.png', pct:70 },
      { name:'Cloud Computing', cat:'Cloud Computing', logo:'assets/logos/cloud-logo.webp', pct:74 },
      { name:'ChatGPT', cat:'Generative AI', logo:'assets/logos/ChatGPT-Logo.png', pct:85 },
      { name:'Claude AI', cat:'Generative AI', logo:'assets/logos/Claude-AI-logo.png', pct:85 },
      { name:'mongodb', cat:'Backend Devlopment', logo:'assets/logos/mongodb-logo.png', pct:90 }
    ];

    const durations = ['4.8s','5.2s','5.8s','6.2s','6.8s','7.2s'];
    const grid = document.getElementById('skill-grid');
    const frag = document.createDocumentFragment();

    skills.forEach((s, i)=>{
      const card = document.createElement('div');
      card.className = 'skill-card reveal';
      card.style.setProperty('--dur', durations[i % durations.length]);
      card.innerHTML = `
        <div class="skill-logo-wrap"><img src="${s.logo}" alt="${s.name} logo" loading="lazy"></div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-category">${s.cat}</div>
        <div class="skill-bar-track"><div class="skill-bar-fill" data-pct="${s.pct}"></div></div>
        <span class="skill-percent">${s.pct}%</span>
        <div class="skill-status">Active</div>
      `;
      frag.appendChild(card);
    });
    grid.appendChild(frag);

    // animate bars on scroll into view
    const bars = grid.querySelectorAll('.skill-bar-fill');
    const barObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const fill = entry.target;
          fill.style.width = fill.dataset.pct + '%';
          barObserver.unobserve(fill);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b=> barObserver.observe(b));

    // subtle 3D tilt on hover, desktop only
    if(!isTouch && !reducedMotion){
      grid.querySelectorAll('.skill-card').forEach(card=>{
        card.addEventListener('mousemove', (e)=>{
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left)/rect.width - 0.5;
          const y = (e.clientY - rect.top)/rect.height - 0.5;
          card.style.transform = `perspective(600px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', ()=>{
          card.style.transform = '';
        });
      });
    }

    // neural background nodes
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
     3D TILT ON FLOATING HERO CARDS (desktop only)
  --------------------------------------------------- */
  (function heroTilt(){
    if(isTouch || reducedMotion) return;
    document.querySelectorAll('.fcard').forEach(card=>{
      card.style.pointerEvents = 'auto';
      card.addEventListener('mousemove', (e)=>{
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left)/rect.width - 0.5;
        const y = (e.clientY - rect.top)/rect.height - 0.5;
        card.style.transform += ` rotateY(${x*5}deg) rotateX(${-y*5}deg)`;
      });
    });
  })();

  /* ---------------------------------------------------
     PROJECT & CERTIFICATE LIGHTBOX
  --------------------------------------------------- */
  (function lightbox(){
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');

    function open(src, text){
      img.src = src;
      caption.textContent = text || '';
      lb.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
    function close(){
      lb.classList.remove('show');
      document.body.style.overflow = '';
    }
    closeBtn.addEventListener('click', close);
    lb.addEventListener('click', (e)=>{ if(e.target === lb) close(); });
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });

    document.querySelectorAll('.project-card').forEach(card=>{
      card.addEventListener('click', ()=>{
        open(card.dataset.img, card.dataset.title);
      });
    });
    document.querySelectorAll('.cert-card').forEach(card=>{
      card.addEventListener('click', ()=>{
        const title = card.querySelector('h3').textContent;
        open(card.dataset.img, title);
      });
    });
  })();

  /* ---------------------------------------------------
     SCROLL REVEAL — generic fade-up for section content
  --------------------------------------------------- */
  (function scrollReveal(){
    const targets = document.querySelectorAll(
      '.about-text, .about-card, .exp-item, .project-card, .edu-card, .cert-card, .achieve-card, .contact-card, .skill-card'
    );
    targets.forEach(t=> t.classList.add('reveal'));
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
