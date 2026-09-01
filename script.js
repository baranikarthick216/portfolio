/* ==========================================================
   3D CYBER AI PORTFOLIO — SCRIPT
   ========================================================== */

document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============ THEME ============ */
(function initTheme() {
  const saved = localStorage.getItem('bk-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    if (next === 'dark') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('bk-theme', next);
  });
})();

/* ============ LOADER ============ */
(function initLoader() {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loaderBarFill');
  const percentEl = document.getElementById('loaderPercent');
  const statusEl = document.getElementById('loaderStatus');

  const messages = [
    'Initializing AI...',
    'Loading Neural Network...',
    'Connecting Data Nodes...',
    'Processing Intelligence...',
    'Preparing Portfolio...',
    'Launching Experience...'
  ];

  if (prefersReducedMotion) {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    return;
  }

  document.body.style.overflow = 'hidden';
  let progress = 0;
  let msgIndex = 0;
  statusEl.textContent = messages[0];

  const interval = setInterval(() => {
    progress += Math.random() * 14 + 6;
    if (progress >= 100) progress = 100;
    fill.style.width = progress + '%';
    percentEl.textContent = Math.floor(progress) + '%';

    const targetMsg = Math.min(messages.length - 1, Math.floor((progress / 100) * messages.length));
    if (targetMsg !== msgIndex) {
      msgIndex = targetMsg;
      statusEl.textContent = messages[msgIndex];
    }

    if (progress >= 100) {
      clearInterval(interval);
      statusEl.textContent = messages[messages.length - 1];
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 500);
    }
  }, 180);
})();

/* ============ SCROLL PROGRESS + NAV SCROLL STATE ============ */
const nav = document.getElementById('nav');
const scrollProgress = document.getElementById('scrollProgress');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
  nav.classList.toggle('scrolled', scrollTop > 20);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ============ MOBILE NAV ============ */
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinksEl.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinksEl.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

/* ============ ACTIVE SECTION DETECTION ============ */
const sections = document.querySelectorAll('main section[id]');
const navLinkMap = {};
document.querySelectorAll('.nav-link').forEach(link => {
  navLinkMap[link.dataset.section] = link;
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Object.values(navLinkMap).forEach(l => l.classList.remove('active'));
      const link = navLinkMap[entry.target.id];
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
sections.forEach(s => sectionObserver.observe(s));

/* ============ SCROLL REVEAL ============ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveal(el) {
  el.classList.add('reveal');
  revealObserver.observe(el);
}

/* ============ 3D TILT ON CARDS ============ */
function initTilt(el) {
  if (prefersReducedMotion || window.matchMedia('(max-width: 720px)').matches) return;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
}

/* ============ DATA: SKILLS ============ */
const skillGroups = [
  { name: 'Programming', skills: ['Python', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Machine Learning', skills: ['Supervised Learning', 'Model Evaluation', 'NLP', 'Text Classification'] },
  { name: 'Data Analysis', skills: ['Pandas', 'NumPy', 'Data Cleaning', 'EDA', 'Data Visualization'] },
  { name: 'Tools & Platforms', skills: ['Cloud Computing', 'Git', 'GitHub', 'Web Development'] },
];

const skillsGrid = document.getElementById('skillsGrid');
skillGroups.forEach(group => {
  const card = document.createElement('div');
  card.className = 'skill-group';
  card.innerHTML = `
    <h3>${group.name}</h3>
    <div class="skill-chip-list">
      ${group.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
    </div>
  `;
  skillsGrid.appendChild(card);
  observeReveal(card);
});

/* ============ DATA: EXPERIENCE ============ */
const experience = [
  {
    role: 'AI/ML Intern',
    org: 'Akilam Technology LLP',
    duration: 'June – July 2026',
    logo: 'assets/logos/akilam-logo.jpg',
    points: [
      'Engineered an AI-powered student assistance chatbot from concept through implementation.',
      'Applied machine learning and NLP techniques in a real project setting.',
      'Recognized by the mentor and organization for sincere, dedicated project work.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    org: 'E-Soft IT Solutions',
    duration: 'December 2024 – February 2025',
    logo: 'assets/logos/e-soft.jpg',
    points: [
      'Built responsive frontend components using HTML, CSS, and JavaScript.',
      'Implemented backend and server-side logic to support core application functionality.',
      'Connected applications to databases to enable end-to-end web functionality.'
    ]
  },
  {
    role: 'Junior Data Scientist',
    org: 'Judah Code Technologies',
    duration: 'June – August 2025',
    logo: 'assets/logos/judah-logo.png',
    points: [
      'Analyzed real-world datasets using Python, Pandas, and NumPy — cleaning, transforming, and visualizing data.',
      'Preprocessed data and trained baseline machine learning models for prediction tasks.',
      'Applied the core ML workflow end-to-end, from data preparation through model evaluation.'
    ]
  },
];

const experienceTimeline = document.getElementById('experienceTimeline');
experience.forEach(job => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <span class="timeline-node"></span>
    <div class="timeline-card tilt-card">
      <img class="tl-logo" src="${job.logo}" alt="${job.org} logo" onerror="this.style.display='none'">
      <p class="tl-role">${job.role}</p>
      <p class="tl-org">${job.org}</p>
      <p class="tl-duration">${job.duration}</p>
      <ul>${job.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
  `;
  experienceTimeline.appendChild(item);
  observeReveal(item);
  initTilt(item.querySelector('.timeline-card'));
});

/* ============ DATA: EDUCATION ============ */
const education = [
  {
    course: 'B.Tech — Artificial Intelligence and Data Science',
    org: 'Indra Ganesan College of Engineering',
    duration: '2023 – 2027',
    logo: 'assets/logos/ig-logo.png',
    desc: 'Undergraduate degree focused on AI, machine learning, and data science fundamentals.'
  },
  {
    course: 'Higher Secondary Education',
    org: 'Ideal Matric Higher Secondary School',
    duration: '2022 – 2023',
    logo: 'assets/logos/Ideal-logo.png',
    desc: 'Completed higher secondary schooling.'
  },
  {
    course: 'SSLC (Secondary School Leaving Certificate)',
    org: 'Ideal Matric Higher Secondary School',
    duration: '2020 – 2021',
    logo: 'assets/logos/Ideal-logo.png',
    desc: 'Completed secondary schooling.'
  },
];

const educationTimeline = document.getElementById('educationTimeline');
education.forEach(edu => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <span class="timeline-node"></span>
    <div class="timeline-card tilt-card">
      <img class="tl-logo" src="${edu.logo}" alt="${edu.org} logo" onerror="this.style.display='none'">
      <p class="tl-role">${edu.course}</p>
      <p class="tl-org">${edu.org}</p>
      <p class="tl-duration">${edu.duration}</p>
      <p style="color:var(--text-secondary);font-size:14px;margin:0;">${edu.desc}</p>
    </div>
  `;
  educationTimeline.appendChild(item);
  observeReveal(item);
  initTilt(item.querySelector('.timeline-card'));
});

/* ============ DATA: PROJECTS ============ */
// CHANGE PROJECT IMAGE FILE NAME HERE — swap the `image` path for each project below.
const projects = [
  {
    title: 'Student Performance Prediction Dashboard',
    image: 'assets/projects/project1.jpg',
    description: 'End-to-end ML pipeline predicting exam outcomes from study hours, attendance, and past scores across 1,000+ records, with an interactive dashboard for non-technical stakeholders.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    github: '#',
    demo: '#'
  },
  {
    title: 'AI-Powered Student Assistance Chatbot',
    image: 'assets/projects/project2.jpg',
    description: 'An AI chatbot built during an internship with Akilam Technology LLP to assist students with common queries using NLP techniques.',
    technologies: ['Python', 'NLP', 'Machine Learning'],
    github: '#',
    demo: '#'
  },
  {
    title: 'AI Resume Analyzer',
    image: 'assets/projects/project3.jpg',
    description: 'NLP-based resume analyzer that extracts keywords and scores resumes against job descriptions, with custom keyword-matching logic to rank candidate fit.',
    technologies: ['Python', 'NLP', 'Text Processing'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Healthcare Fake News Detection & Doctor Consultation',
    image: 'assets/projects/project4.jpg',
    description: 'Text-classification model that detects fake medical news articles, paired with an integrated doctor consultation feature.',
    technologies: ['Python', 'Text Classification', 'ML'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Encryption and Decryption System',
    image: 'assets/projects/project5.jpg',
    description: 'A secure Python application implementing cryptography algorithms to convert plain text into encrypted format and back.',
    technologies: ['Python', 'Cryptography'],
    github: '#',
    demo: '#'
  },
];

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card tilt-card';
  card.innerHTML = `
    <img class="project-image" src="${p.image}" alt="${p.title} dashboard preview" loading="lazy"
         onerror="this.style.background='var(--gradient-primary)'; this.removeAttribute('src');">
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-tech">${p.technologies.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="project-actions">
        <a href="${p.github}" class="btn btn-outline" target="_blank" rel="noopener">GitHub</a>
        <a href="${p.demo}" class="btn btn-primary" target="_blank" rel="noopener">Live Demo</a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
  observeReveal(card);
  initTilt(card);
});

/* ============ DATA: CERTIFICATIONS ============ */
// CHANGE CERTIFICATE PDF FILE NAME HERE — swap the `file` path for each certificate below.
const certificates = [
  {
    title: 'Internship with Mini Project (AI/ML)',
    organization: 'Akilam Technology LLP',
    date: '2026',
    logo: 'assets/logos/akilam-logo.jpg',
    file: 'assets/certificates/certificate-01.pdf',
    credential: 'N/A'
  },
  {
    title: 'Cloud Computing',
    organization: 'NPTEL Online Certification, IIT Kharagpur',
    date: '2025',
    logo: 'assets/logos/nptel-logo.jpg',
    file: 'assets/certificates/certificate-02.pdf',
    credential: 'N/A'
  },
  {
    title: 'Web Design and Development',
    organization: 'National Skill Development Corporation (NSDC)',
    date: '2026',
    logo: 'assets/logos/nsdc-logo.png',
    file: 'assets/certificates/certificate-03.pdf',
    credential: 'N/A'
  },
  {
    title: 'Generative AI Workshop',
    organization: 'Kongu Engineering College',
    date: '—',
    logo: 'assets/logos/kec-logo.jpg',
    file: 'assets/certificates/certificate-04.pdf',
    credential: 'N/A'
  },
];

const certsGrid = document.getElementById('certsGrid');
certificates.forEach((c, i) => {
  const card = document.createElement('div');
  card.className = 'cert-card tilt-card';
  card.innerHTML = `
    <div class="cert-top">
      <img class="cert-logo" src="${c.logo}" alt="${c.organization} logo" onerror="this.style.display='none'">
      <div>
        <p class="cert-title">${c.title}</p>
        <p class="cert-org">${c.organization}</p>
      </div>
    </div>
    <p class="cert-date">${c.date}</p>
    <div class="cert-cred">
      <span>Credential: ${c.credential}</span>
      <button type="button" data-cred="${c.credential}" class="copy-cred">Copy</button>
    </div>
    <a href="${c.file}" target="_blank" rel="noopener" class="btn btn-outline cert-view">View Certificate</a>
  `;
  certsGrid.appendChild(card);
  observeReveal(card);
  initTilt(card);

  card.querySelector('.copy-cred').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    navigator.clipboard.writeText(btn.dataset.cred).then(() => {
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1600);
    });
  });
});

/* Tilt for static cards already in HTML */
document.querySelectorAll('.about-card, .resume-card').forEach(el => {
  observeReveal(el);
  initTilt(el);
});

/* ============ CONTACT FORM ============ */
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  if (!name) return;
  formNote.textContent = `Thanks, ${name.split(' ')[0]} — this form isn't wired to a backend yet. Please email me directly at baranikarthick19@gmail.com.`;
  contactForm.reset();
});

/* ============ NEURAL NETWORK PARTICLE CANVAS (HERO) ============ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let width, height, particles;
  const hero = document.querySelector('.hero');
  const colors = ['#8B5CF6', '#EC4899', '#EF4444', '#F97316'];

  function resize() {
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    const count = window.matchMedia('(max-width: 720px)').matches ? 30 : 60;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.6,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(139,92,246,${0.12 * (1 - dist / 130)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.8;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    if (!prefersReducedMotion) requestAnimationFrame(step);
  }

  resize();
  createParticles();
  step();
  window.addEventListener('resize', () => { resize(); createParticles(); });
})();

/* ============ HERO PROFILE PARALLAX ON MOUSE ============ */
(function initProfileParallax() {
  if (prefersReducedMotion || window.matchMedia('(max-width: 900px)').matches) return;
  const orbit = document.querySelector('.profile-orbit');
  const hero = document.querySelector('.hero');
  if (!orbit || !hero) return;
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    orbit.style.transform = `translate(${x * 16}px, ${y * 16}px)`;
  });
  hero.addEventListener('mouseleave', () => { orbit.style.transform = ''; });
})();
