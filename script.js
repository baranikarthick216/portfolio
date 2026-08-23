/* ==========================================================================
   BARANIKARTHICK M — PORTFOLIO SCRIPT
   ========================================================================== */

document.getElementById('year').textContent = new Date().getFullYear();

/* ==========================================================================
   1. LOADING SCREEN — boot sequence + neural network canvas
   ========================================================================== */
(function loaderSequence(){
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loader-bar-fill');
  const percentEl = document.getElementById('loader-percent');
  const msgEl = document.getElementById('loader-message');

  const messages = [
    'Initializing AI...',
    'Loading Neural Network...',
    'Preparing Portfolio...',
    'Launching Experience...'
  ];

  let progress = 0;
  let msgIndex = 0;
  msgEl.textContent = messages[0];

  const msgInterval = setInterval(() => {
    msgIndex = (msgIndex + 1) % messages.length;
    msgEl.style.opacity = 0;
    setTimeout(() => { msgEl.textContent = messages[msgIndex]; msgEl.style.opacity = 1; }, 200);
  }, 650);

  const progressInterval = setInterval(() => {
    progress += Math.random() * 14 + 6;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      clearInterval(msgInterval);
      msgEl.textContent = messages[messages.length - 1];
      setTimeout(() => {
        loader.classList.add('loader-hidden');
        document.body.style.overflow = '';
        triggerReveal();
      }, 400);
    }
    fill.style.width = progress + '%';
    percentEl.textContent = Math.floor(progress) + '%';
  }, 220);

  document.body.style.overflow = 'hidden';

  /* neural network ambient canvas */
  const canvas = document.getElementById('loader-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, nodes = [];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const NODE_COUNT = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 22000));
  for (let i = 0; i < NODE_COUNT; i++){
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4
    });
  }

  let rafId;
  function drawNetwork(){
    ctx.clearRect(0, 0, w, h);
    for (const n of nodes){
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++){
      for (let j = i + 1; j < nodes.length; j++){
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 140){
          ctx.strokeStyle = `rgba(79, 195, 247, ${0.12 * (1 - dist / 140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    for (const n of nodes){
      ctx.fillStyle = 'rgba(79, 195, 247, 0.55)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    rafId = requestAnimationFrame(drawNetwork);
  }
  drawNetwork();

  setTimeout(() => cancelAnimationFrame(rafId), 4000);
})();

/* ==========================================================================
   2. NAVIGATION — sticky glass, scroll blur, active link, mobile menu, theme
   ========================================================================== */
(function nav(){
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const scrollIndicator = document.getElementById('scroll-indicator');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll(){
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollIndicator.style.width = docHeight > 0 ? (y / docHeight) * 100 + '%' : '0%';

    let current = sections[0]?.id;
    sections.forEach(sec => {
      if (y >= sec.offsetTop - 140) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.dataset.nav === current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  links.forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }));

  /* theme toggle */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = (() => { try { return localStorage.getItem('bk-theme'); } catch(e){ return null; } })();
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('bk-theme', next); } catch(e){}
  });
})();

/* ==========================================================================
   3. SCROLL REVEAL
   ========================================================================== */
let revealObserver;
function triggerReveal(){
  const items = document.querySelectorAll('.reveal');
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => revealObserver.observe(item));
}

/* ==========================================================================
   4. SKILL BARS + STAT COUNTERS (animate once in view)
   ========================================================================== */
(function animatedCounters(){
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.style.width = entry.target.dataset.fill + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  skillFills.forEach(el => skillObserver.observe(el));

  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const target = +entry.target.dataset.count;
        const duration = 1200;
        const start = performance.now();
        function step(now){
          const p = Math.min((now - start) / duration, 1);
          entry.target.textContent = Math.floor(p * target);
          if (p < 1) requestAnimationFrame(step);
          else entry.target.textContent = target;
        }
        requestAnimationFrame(step);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  statNums.forEach(el => statObserver.observe(el));
})();

/* ==========================================================================
   5. CERTIFICATE / PROJECT DASHBOARD VIEWER MODAL
   To swap in real images later: update the `src` in the maps below
   to point at files inside assets/certificates/ and assets/projects/.
   ========================================================================== */
(function viewerModal(){
  const modal = document.getElementById('viewer-modal');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.getElementById('modal-close');
  const backdrop = document.getElementById('modal-backdrop');

  const certImages = {
    akilam: 'assets/certificates/akilam-certificate.jpg',
    nptel: 'assets/certificates/nptel-certificate.jpg',
    nsdc: 'assets/certificates/nsdc-certificate.jpg',
    kec: 'assets/certificates/kec-certificate.jpg'
  };
  const projectImages = {
    'student-performance': 'assets/projects/student-performance-dashboard.jpg',
    'chatbot': 'assets/projects/chatbot-dashboard.jpg',
    'resume-analyzer': 'assets/projects/resume-analyzer-dashboard.jpg',
    'fake-news': 'assets/projects/fake-news-dashboard.jpg',
    'encryption': 'assets/projects/encryption-dashboard.jpg'
  };

  function openModal(src, alt){
    modalImg.src = src;
    modalImg.alt = alt;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.view-certificate-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const key = link.dataset.cert;
      openModal(certImages[key], link.closest('.cert-card').querySelector('h3').textContent + ' — Certificate');
    });
  });
  document.querySelectorAll('.project-dashboard-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const key = link.dataset.project;
      openModal(projectImages[key], link.closest('.project-card').querySelector('h3').textContent + ' — Dashboard');
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
})();

/* ==========================================================================
   6. THREE.JS 3D HERO — geometric particle sphere
   ========================================================================== */
(function heroScene(){
  const canvas = document.getElementById('hero-canvas');
  if (!window.THREE || !canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 9;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const group = new THREE.Group();
  scene.add(group);

  /* core sphere made of small cubes distributed on a Fibonacci sphere */
  const CUBE_COUNT = window.innerWidth < 700 ? 220 : 420;
  const radius = 3.1;
  const cubeGeo = new THREE.BoxGeometry(0.11, 0.11, 0.11);

  const colorA = new THREE.Color(0x2F5AD9);
  const colorB = new THREE.Color(0x4FC3F7);

  const cubes = new THREE.InstancedMesh(
    cubeGeo,
    new THREE.MeshStandardMaterial({ metalness: 0.4, roughness: 0.35, vertexColors: false }),
    CUBE_COUNT
  );

  const dummy = new THREE.Object3D();
  const colorArray = new Float32Array(CUBE_COUNT * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < CUBE_COUNT; i++){
    const y = 1 - (i / (CUBE_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    const jitter = 1 + (Math.random() - 0.5) * 0.05;
    dummy.position.set(x * radius * jitter, y * radius * jitter, z * radius * jitter);
    dummy.lookAt(0, 0, 0);
    const s = 0.6 + Math.random() * 0.8;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    cubes.setMatrixAt(i, dummy.matrix);

    const mix = colorA.clone().lerp(colorB, (y + 1) / 2);
    colorArray[i * 3] = mix.r;
    colorArray[i * 3 + 1] = mix.g;
    colorArray[i * 3 + 2] = mix.b;
  }
  cubes.instanceColor = new THREE.InstancedBufferAttribute(colorArray, 3);
  cubes.material.vertexColors = true;
  group.add(cubes);

  /* thin wireframe shell for structure */
  const wireGeo = new THREE.IcosahedronGeometry(radius + 0.35, 2);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x4FC3F7, wireframe: true, transparent: true, opacity: 0.06 });
  group.add(new THREE.Mesh(wireGeo, wireMat));

  /* floating particle dust field */
  const dustCount = 300;
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++){
    dustPos[i*3] = (Math.random() - 0.5) * 16;
    dustPos[i*3+1] = (Math.random() - 0.5) * 16;
    dustPos[i*3+2] = (Math.random() - 0.5) * 16;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dustMat = new THREE.PointsMaterial({ color: 0x8AB4F8, size: 0.02, transparent: true, opacity: 0.5 });
  const dust = new THREE.Points(dustGeo, dustMat);
  scene.add(dust);

  /* lighting */
  scene.add(new THREE.AmbientLight(0x6a8fe0, 0.8));
  const key = new THREE.PointLight(0x4FC3F7, 2.2, 30);
  key.position.set(6, 4, 6);
  scene.add(key);
  const rim = new THREE.PointLight(0x2F5AD9, 1.6, 30);
  rim.position.set(-6, -3, -4);
  scene.add(rim);

  /* offset the sphere to the right on desktop, centered on mobile */
  function positionGroup(){
    group.position.x = window.innerWidth > 860 ? 2.6 : 0;
    group.position.y = window.innerWidth > 860 ? 0 : -1.2;
  }
  positionGroup();

  let targetRotX = 0, targetRotY = 0;
  window.addEventListener('mousemove', (e) => {
    targetRotY = (e.clientX / window.innerWidth - 0.5) * 0.6;
    targetRotX = (e.clientY / window.innerHeight - 0.5) * 0.4;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    positionGroup();
  });

  const clock = new THREE.Clock();
  function animate(){
    const t = clock.getElapsedTime();
    group.rotation.y += 0.0018;
    group.rotation.y += (targetRotY - group.rotation.y) * 0.02;
    group.rotation.x += (targetRotX - group.rotation.x) * 0.02;
    dust.rotation.y = t * 0.02;
    dust.rotation.x = t * 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
})();
