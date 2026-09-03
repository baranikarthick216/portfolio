/**
 * 3D OBSIDIAN QUANTUM AI PORTFOLIO — MASTER JAVASCRIPT
 * Barani Karthick | AI & Data Science Student
 */

// ======================================
// GLOBAL CONFIGURATION
// ======================================
const CONFIG = {
    appName: "Barani Karthick Portfolio",
    author: "Barani Karthick M",
    role: "Machine Learning Engineer | AI & Data Science",
    bootSpeed: 20, // Milliseconds per progress tick for bootloader
    enableSoundFx: false,
    particlesCount: 55,
    enable3DTilt: true
};

// ======================================
// ASSET PATHS
// ======================================
const ASSETS = {
    profile: "assets/profile.jpg",
    resume: "assets/resume/Resume.pdf",
    projects: "assets/projects/",
    certificates: "assets/certificates/",
    logos: "assets/logos/"
};

// ======================================
// PROJECT DATA
// ======================================
const projects = [
    {
        id: "proj-1",
        // CHANGE PROJECT TITLE HERE
        title: "Student Performance Prediction Dashboard",
        // CHANGE PROJECT IMAGE FILE NAME HERE
        image: "assets/projects/project1.png",
        description: "Built an end-to-end ML pipeline predicting student exam outcomes from study hours, attendance, and past scores using 1,000+ records. Features EDA, Random Forest classifier (~85% accuracy), and interactive dashboards.",
        technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML Dashboard"],
        // CHANGE GITHUB LINK HERE
        github: "https://github.com/baranikarthick216",
        // CHANGE LIVE DEMO LINK HERE
        demo: "https://github.com/baranikarthick216",
        status: "CORE ML"
    },
    {
        id: "proj-2",
        // CHANGE PROJECT TITLE HERE
        title: "AI-Powered Student Assistance Chatbot",
        // CHANGE PROJECT IMAGE FILE NAME HERE
        image: "assets/projects/project2.png",
        description: "Engineered an intelligent conversational chatbot to support students with academic inquiries, applying natural language processing, entity recognition, and contextual intent classification.",
        technologies: ["Python", "NLP", "Machine Learning", "Chatbot Dev"],
        // CHANGE GITHUB LINK HERE
        github: "https://github.com/baranikarthick216",
        // CHANGE LIVE DEMO LINK HERE
        demo: "https://github.com/baranikarthick216",
        status: "AI PROJECT"
    },
    {
        id: "proj-3",
        // CHANGE PROJECT TITLE HERE
        title: "AI Resume Analyzer",
        // CHANGE PROJECT IMAGE FILE NAME HERE
        image: "assets/projects/project3.png",
        description: "Developed an NLP-driven resume evaluator that parses unstructured candidate CVs, extracts technical keywords, and calculates a precision fit-score against target job descriptions.",
        technologies: ["Python", "NLP", "Text Classification", "Data Mining"],
        // CHANGE GITHUB LINK HERE
        github: "https://github.com/baranikarthick216",
        // CHANGE LIVE DEMO LINK HERE
        demo: "https://github.com/baranikarthick216",
        status: "NLP ENGINE"
    },
    {
        id: "proj-4",
        // CHANGE PROJECT TITLE HERE
        title: "Healthcare Fake News Detection & Doctor Consultation",
        // CHANGE PROJECT IMAGE FILE NAME HERE
        image: "assets/projects/project4.png",
        description: "Created a dual-purpose health technology system featuring an NLP text-classification model to filter deceptive medical claims alongside an integrated virtual doctor consultation interface.",
        technologies: ["Python", "Machine Learning", "NLP", "Healthcare AI"],
        // CHANGE GITHUB LINK HERE
        github: "https://github.com/baranikarthick216",
        // CHANGE LIVE DEMO LINK HERE
        demo: "https://github.com/baranikarthick216",
        status: "HEALTH AI"
    },
    {
        id: "proj-5",
        // CHANGE PROJECT TITLE HERE
        title: "Encryption and Decryption Security Engine",
        // CHANGE PROJECT IMAGE FILE NAME HERE
        image: "assets/projects/project5.png",
        description: "Implemented a robust cryptographic suite in Python to convert plaintext into encrypted cipher formats with high-entropy keys and secure mathematical decryption routines.",
        technologies: ["Python", "Cryptography", "Security Algorithms", "Data Privacy"],
        // CHANGE GITHUB LINK HERE
        github: "https://github.com/baranikarthick216",
        // CHANGE LIVE DEMO LINK HERE
        demo: "https://github.com/baranikarthick216",
        status: "SECURITY"
    }
];

// ======================================
// SKILLS DATA
// ======================================
const skills = [
    // Programming / Development
    { name: "Python", category: "programming", badge: "CORE", logo: "assets/logos/python.svg" },
    { name: "Java", category: "programming", badge: "ACTIVE", logo: "assets/logos/java.svg" },
    { name: "JavaScript", category: "programming", badge: "ACTIVE", logo: "assets/logos/javascript.svg" },
    { name: "HTML5", category: "programming", badge: "ACTIVE", logo: "assets/logos/html5.svg" },
    { name: "CSS3", category: "programming", badge: "ACTIVE", logo: "assets/logos/css3.svg" },
    { name: "Node.js", category: "programming", badge: "ACTIVE", logo: "assets/logos/nodejs.svg" },

    // AI / Machine Learning
    { name: "Artificial Intelligence", category: "ai", badge: "AI", logo: "assets/logos/ai.svg" },
    { name: "Machine Learning", category: "ai", badge: "CORE", logo: "assets/logos/machine-learning.svg" },
    { name: "Deep Learning", category: "ai", badge: "AI", logo: "assets/logos/deep-learning.svg" },
    { name: "Scikit-learn", category: "ai", badge: "TOOLS", logo: "assets/logos/scikit-learn.svg" },
    { name: "PyTorch", category: "ai", badge: "AI", logo: "assets/logos/pytorch.svg" },
    { name: "TensorFlow", category: "ai", badge: "AI", logo: "assets/logos/tensorflow.svg" },
    { name: "NLP", category: "ai", badge: "CORE", logo: "assets/logos/nlp.svg" },
    { name: "Computer Vision", category: "ai", badge: "AI", logo: "assets/logos/computer-vision.svg" },

    // Data / Database / Cloud
    { name: "SQL", category: "data", badge: "DATA", logo: "assets/logos/sql.svg" },
    { name: "Cloud Computing", category: "data", badge: "CLOUD", logo: "assets/logos/cloud.svg" },
    { name: "Power BI", category: "data", badge: "DATA", logo: "assets/logos/power-bi.svg" },

    // Tools / AI Platforms
    { name: "Git", category: "tools", badge: "TOOLS", logo: "assets/logos/git.svg" },
    { name: "ChatGPT", category: "tools", badge: "AI", logo: "assets/logos/chatgpt.svg" },
    { name: "Claude AI", category: "tools", badge: "AI", logo: "assets/logos/claude.svg" }
];

// ======================================
// INTERNSHIP DATA
// ======================================
const internships = [
    {
        role: "AI/ML Intern",
        organization: "Akilam Technology LLP",
        duration: "June – July 2026",
        logo: "assets/logos/akilam.svg",
        bullets: [
            "Completed an intensive internship mini-project in AI/ML, engineering an AI-powered student assistance chatbot from concept through deployment.",
            "Designed and developed natural language processing pipelines to assist students with real-time academic workflows.",
            "Recognized by mentors and organizational leadership for sincere, dedicated technical contributions."
        ],
        skills: ["Python", "Machine Learning", "NLP", "Chatbot Development"]
    },
    {
        role: "Full Stack Developer Intern",
        organization: "E-Soft IT Solutions",
        duration: "December – February 2025",
        logo: "assets/logos/esoft.svg",
        bullets: [
            "Built responsive, accessible frontend interface components using HTML5, CSS3, and modern JavaScript.",
            "Implemented backend server-side endpoints and routing logic to power core data exchange.",
            "Connected dynamic web interfaces to relational database systems for full-stack prototype execution."
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "Backend Logic", "Databases"]
    },
    {
        role: "Junior Data Scientist",
        organization: "Judah Code Technologies",
        duration: "June – August 2025",
        logo: "assets/logos/judah.svg",
        bullets: [
            "Analyzed real-world complex datasets using Python, Pandas, and NumPy, conducting rigorous data cleaning, transformations, and exploratory data analysis (EDA).",
            "Preprocessed multi-variable features and trained baseline machine learning models for classification and regression tasks.",
            "Applied complete end-to-end ML workflows from data validation to model performance evaluation."
        ],
        skills: ["Python", "Pandas", "NumPy", "Data Cleaning", "Baseline ML"]
    }
];

// ======================================
// EDUCATION DATA
// ======================================
const education = [
    {
        institution: "Indra Ganesan College of Engineering",
        course: "B.Tech — Artificial Intelligence and Data Science",
        duration: "2023 – 2027",
        grade: "CGPA: 7.26",
        logo: "assets/logos/ig-logo.png",
        description: "Comprehensive undergraduate engineering degree focusing on core machine learning algorithms, deep learning architectures, statistical data modeling, cloud systems, and software engineering principles."
    },
    {
        institution: "Ideal Matric Higher Secondary School",
        course: "Higher Secondary Education (HSC)",
        duration: "2022 – 2023",
        grade: "Percentage: 69%",
        logo: "assets/logos/Ideal-logo.png",
        description: "Mathematics, Physics, Chemistry, and Computer Science foundation with a rigorous grounding in analytical reasoning and mathematical computation."
    },
    {
        institution: "Ideal Matric Higher Secondary School",
        course: "Secondary School Leaving Certificate (SSLC)",
        duration: "2020 – 2021",
        grade: "Completed",
        logo: "assets/logos/Ideal-logo.png",
        description: "Secondary education establishing academic distinction in core sciences and computational logic."
    }
];

// ======================================
// CERTIFICATE DATA
// ======================================
const certificates = [
    {
        // CHANGE CERTIFICATE TITLE HERE
        title: "Web Design and Development",
        // CHANGE CERTIFICATE ORGANIZATION HERE
        organization: "National Skill Development Corporation (NSDC)",
        date: "2026",
        // CHANGE CERTIFICATE IMAGE FILE NAME HERE
        image: "assets/certificates/nsdc-certificate.png",
        logo: "assets/logos/nsdc.svg",
        // CHANGE CREDENTIAL ID HERE
        credential: "NSDC-WDD-2026-771"
    },
    {
        // CHANGE CERTIFICATE TITLE HERE
        title: "Cloud Computing Online Certification",
        // CHANGE CERTIFICATE ORGANIZATION HERE
        organization: "NPTEL Online Certification (IIT Kharagpur)",
        date: "2025",
        // CHANGE CERTIFICATE IMAGE FILE NAME HERE
        image: "assets/certificates/nptel-cloud-computing.jpg",
        logo: "assets/logos/nptel-cloud-computing-preview.png",
        // CHANGE CREDENTIAL ID HERE
        credential: "NPTEL25CS42S109"
    },
    {
        // CHANGE CERTIFICATE TITLE HERE
        title: "Internship with Mini Project (AI/ML)",
        // CHANGE CERTIFICATE ORGANIZATION HERE
        organization: "Akilam Technology LLP",
        date: "2026",
        // CHANGE CERTIFICATE IMAGE FILE NAME HERE
        image: "assets/certificates/akilam-internship.jpg",
        logo: "assets/logos/akilam-preview.jpg",
        // CHANGE CREDENTIAL ID HERE
        credential: "AK-AIML-2026-984"
    },
    {
        // CHANGE CERTIFICATE TITLE HERE
        title: "Full Stack Development Internship",
        // CHANGE CERTIFICATE ORGANIZATION HERE
        organization: "E-Soft IT Solutions",
        date: "2025",
        // CHANGE CERTIFICATE IMAGE FILE NAME HERE
        image: "assets/certificates/e-soft-internship.jpg",
        logo: "assets/logos/esoft-imternship.jpg",
        // CHANGE CREDENTIAL ID HERE
        credential: "ESOFT-FS-2025-115"
    },
    {
        // CHANGE CERTIFICATE TITLE HERE
        title: "Junior Data Science Program",
        // CHANGE CERTIFICATE ORGANIZATION HERE
        organization: "Judah Code Technologies",
        date: "2025",
        // CHANGE CERTIFICATE IMAGE FILE NAME HERE
        image: "assets/certificates/judah-datascience.png",
        logo: "assets/logos/judah-datascience.jpg",
        // CHANGE CREDENTIAL ID HERE
        credential: "JCT-DS-2025-318"
    },
    {
        // CHANGE CERTIFICATE TITLE HERE
        title: "Generative AI Workshop",
        // CHANGE CERTIFICATE ORGANIZATION HERE
        organization: "Kongu Engineering College (KEC)",
        date: "2025",
        // CHANGE CERTIFICATE IMAGE FILE NAME HERE
        image: "assets/certificates/genai-workshop.jpg",
        logo: "assets/logos/kec.svg",
        // CHANGE CREDENTIAL ID HERE
        credential: "KEC-GENAI-2025-042"
    }
];

function getTechLogo(name) {
    const map = {
        "Python": "assets/logos/python.svg",
        "Pandas": "assets/logos/python.svg",
        "NumPy": "assets/logos/python.svg",
        "Scikit-learn": "assets/logos/scikit-learn.svg",
        "Baseline ML": "assets/logos/scikit-learn.svg",
        "Machine Learning": "assets/logos/machine-learning.svg",
        "Data Cleaning": "assets/logos/machine-learning.svg",
        "Deep Learning": "assets/logos/deep-learning.svg",
        "PyTorch": "assets/logos/pytorch.svg",
        "TensorFlow": "assets/logos/tensorflow.svg",
        "NLP": "assets/logos/nlp.svg",
        "Text Classification": "assets/logos/nlp.svg",
        "Computer Vision": "assets/logos/computer-vision.svg",
        "Chatbot Dev": "assets/logos/ai.svg",
        "Healthcare AI": "assets/logos/ai.svg",
        "Artificial Intelligence": "assets/logos/ai.svg",
        "SQL": "assets/logos/sql.svg",
        "Databases": "assets/logos/sql.svg",
        "Data Mining": "assets/logos/sql.svg",
        "Data Privacy": "assets/logos/sql.svg",
        "Power BI": "assets/logos/power-bi.svg",
        "ML Dashboard": "assets/logos/power-bi.svg",
        "Cloud Computing": "assets/logos/cloud.svg",
        "Security Algorithms": "assets/logos/cloud.svg",
        "Git": "assets/logos/git.svg",
        "Cryptography": "assets/logos/git.svg",
        "Node.js": "assets/logos/nodejs.svg",
        "Backend Logic": "assets/logos/nodejs.svg",
        "JavaScript": "assets/logos/javascript.svg",
        "Java": "assets/logos/java.svg",
        "HTML5": "assets/logos/html5.svg",
        "CSS3": "assets/logos/css3.svg"
    };
    return map[name] || null;
}

// ======================================
// LOADING SCREEN (CINEMATIC BOOT SEQUENCE)
// ======================================
const bootLogs = [
    "Initializing AI...",
    "Loading Neural Network...",
    "Connecting Data Nodes...",
    "Processing Intelligence...",
    "Calibrating Quantum Core...",
    "Activating Aurora Interface...",
    "Loading Portfolio Assets...",
    "Preparing Experience...",
    "Launching Portfolio..."
];

function initLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.getElementById("loader-bar");
    const progressPercent = document.getElementById("loader-percent");
    const terminalLog = document.getElementById("loader-log");

    if (!loadingScreen || !progressBar) return;

    let progress = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
        progress += 2;
        if (progress > 100) progress = 100;

        progressBar.style.width = `${progress}%`;
        if (progressPercent) progressPercent.textContent = `${progress}%`;

        // Update log message based on progress
        const targetLogIndex = Math.min(Math.floor((progress / 100) * bootLogs.length), bootLogs.length - 1);
        if (targetLogIndex !== logIndex && terminalLog) {
            logIndex = targetLogIndex;
            terminalLog.textContent = bootLogs[logIndex];
        }

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add("hidden");
                triggerHeroEntrance();
            }, 400);
        }
    }, CONFIG.bootSpeed);
}

function triggerHeroEntrance() {
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    reveals.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            setTimeout(() => {
                el.classList.add("revealed");
            }, index * 80);
        }
    });
}

// ======================================
// NAVIGATION & SCROLL TRACKING
// ======================================
function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
    const sections = document.querySelectorAll("section[id]");
    const progressBar = document.getElementById("scroll-progress");

    // Scroll progress bar
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) {
            progressBar.style.width = `${scrolled}%`;
        }

        // Active link tracking
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (winScroll >= sectionTop && winScroll < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }, { passive: true });
}

// ======================================
// THEME SWITCHER (DARK OBSIDIAN / LIGHT)
// ======================================
function initThemeSwitcher() {
    const themeBtn = document.getElementById("theme-toggle");
    let currentTheme = localStorage.getItem("quantum_theme");
    // Switch to light mode by default as explicitly requested by user
    if (!currentTheme || currentTheme === "dark") {
        currentTheme = "light";
        localStorage.setItem("quantum_theme", "light");
    }

    document.documentElement.setAttribute("data-theme", currentTheme);
    if (document.body) {
        document.body.classList.toggle("light-theme", currentTheme === "light");
    }
    updateThemeIcon(currentTheme);

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const activeTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", activeTheme);
            if (document.body) {
                document.body.classList.toggle("light-theme", activeTheme === "light");
            }
            localStorage.setItem("quantum_theme", activeTheme);
            updateThemeIcon(activeTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById("theme-toggle");
    if (!themeBtn) return;
    themeBtn.innerHTML = theme === "light" 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
}

// ======================================
// PROJECT RENDERING (3D AI PROJECT LAB)
// ======================================
function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = projects.map(proj => `
        <div class="card-3d-wrap reveal-on-scroll" data-tilt>
            <div class="project-card card-3d">
                <div class="project-media-wrap">
                    <img src="${proj.image}" alt="${proj.title}" class="project-img" onerror="handleAssetFallback(this, 'PROJECT', '${proj.title}')" />
                    <div class="project-status-badge">${proj.status}</div>
                </div>
                <div class="project-body">
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-desc">${proj.description}</p>
                    <div class="project-tech-tags">
                        ${proj.technologies.map(t => {
                            const logoPath = getTechLogo(t);
                            return `
                                <span class="project-tech-pill">
                                    ${logoPath ? `<img src="${logoPath}" alt="${t}" class="project-pill-logo" onerror="this.style.display='none'" />` : ''}
                                    ${t}
                                </span>
                            `;
                        }).join("")}
                    </div>
                    <div class="project-actions">
                        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            GitHub
                        </a>
                        <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

// ======================================
// SKILLS RENDERING
// ======================================
function getSkillFallbackIcon(name) {
    const iconMap = {
        "Python": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
        "Java": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
        "JavaScript": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FACC15" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 16c0 1.5 1 2 2.5 2s2-.5 2-2v-4"></path><path d="M16 13c.5-.5 1-1 1-2 0-1.5-1-2-2.5-2s-2.5 1-2.5 2.5"></path></svg>`,
        "HTML5": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2"><polyline points="4 4 6 20 12 22 18 20 20 4 4 4"></polyline><line x1="12" y1="4" x2="12" y2="22"></line></svg>`,
        "CSS3": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="2"><polyline points="4 4 6 20 12 22 18 20 20 4 4 4"></polyline><line x1="4" y1="9" x2="20" y2="9"></line><line x1="6" y1="15" x2="18" y2="15"></line></svg>`,
        "Node.js": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"></path><path d="M12 22V12"></path></svg>`,
        "Artificial Intelligence": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C084FC" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M3 12h3m12 0h3M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1"></path></svg>`,
        "Machine Learning": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" stroke-width="2"><path d="M12 2v4m0 12v4M2 12h4m12 0h4"></path><circle cx="12" cy="12" r="4"></circle><circle cx="6" cy="6" r="2"></circle><circle cx="18" cy="6" r="2"></circle><circle cx="6" cy="18" r="2"></circle><circle cx="18" cy="18" r="2"></circle></svg>`,
        "Deep Learning": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><circle cx="6" cy="6" r="2"></circle><circle cx="6" cy="18" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="18" cy="6" r="2"></circle><circle cx="18" cy="18" r="2"></circle><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="18" x2="16" y2="18"></line><line x1="6" y1="8" x2="12" y2="12"></line><line x1="12" y1="12" x2="18" y2="8"></line><line x1="6" y1="16" x2="12" y2="12"></line><line x1="12" y1="12" x2="18" y2="16"></line></svg>`,
        "Scikit-learn": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><circle cx="8" cy="8" r="4"></circle><circle cx="16" cy="16" r="4"></circle><line x1="10.8" y1="10.8" x2="13.2" y2="13.2"></line></svg>`,
        "PyTorch": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
        "TensorFlow": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
        "NLP": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 9h8m-8 4h5"></path></svg>`,
        "Computer Vision": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
        "SQL": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
        "Cloud Computing": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
        "Power BI": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2"><rect x="3" y="12" width="4" height="9" rx="1"></rect><rect x="10" y="7" width="4" height="14" rx="1"></rect><rect x="17" y="3" width="4" height="18" rx="1"></rect></svg>`,
        "Git": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F05032" stroke-width="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 15V9a3 3 0 0 0-3-3H9"></path><line x1="6" y1="9" x2="6" y2="15"></line></svg>`,
        "ChatGPT": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10A37F" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>`,
        "Claude AI": `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
    };
    return iconMap[name] || `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
}

function renderSkills(filter = "all") {
    const container = document.getElementById("skills-container");
    if (!container) return;

    const filteredSkills = filter === "all" 
        ? skills 
        : skills.filter(s => s.category === filter);

    container.innerHTML = filteredSkills.map((s, idx) => `
        <div class="skill-card reveal-on-scroll revealed" data-tilt style="animation-delay: ${idx * 30}ms">
            <div class="skill-logo-wrap">
                <img src="${s.logo}" alt="${s.name} logo" class="skill-logo-img" onerror="handleAssetFallback(this, 'SKILL', '${s.name}')" />
            </div>
            <div class="skill-name">${s.name}</div>
            <span class="skill-badge">${s.badge}</span>
        </div>
    `).join("");

    attachTiltEvents();
}

function initSkillFilters() {
    const filterBtns = document.querySelectorAll(".skill-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter") || "all";
            renderSkills(filter);
        });
    });
}

// ======================================
// INTERNSHIP RENDERING
// ======================================
function renderInternships() {
    const container = document.getElementById("internships-container");
    if (!container) return;

    container.innerHTML = internships.map(item => `
        <div class="timeline-item reveal-on-scroll">
            <div class="timeline-node">
                <div class="timeline-node-inner"></div>
            </div>
            <div class="timeline-card">
                <div class="timeline-header-row">
                    <div class="timeline-title-group">
                        <div class="timeline-logo-space" title="${item.organization}">
                            <img src="${item.logo}" alt="${item.organization} logo" class="timeline-org-logo" onerror="handleAssetFallback(this, 'ORG', '${item.organization}')" />
                            <span class="logo-space-glow"></span>
                        </div>
                        <div>
                            <h3 class="timeline-role">${item.role}</h3>
                            <div class="timeline-org">${item.organization}</div>
                        </div>
                    </div>
                    <div class="timeline-duration-badge">${item.duration}</div>
                </div>
                <div class="timeline-desc">
                    <ul>
                        ${item.bullets.map(b => `<li>${b}</li>`).join("")}
                    </ul>
                </div>
                <div class="timeline-tags">
                    ${item.skills.map(s => `<span class="tech-tag">${s}</span>`).join("")}
                </div>
            </div>
        </div>
    `).join("");
}

// ======================================
// EDUCATION RENDERING
// ======================================
function renderEducation() {
    const container = document.getElementById("education-container");
    if (!container) return;

    container.innerHTML = education.map(item => `
        <div class="timeline-item reveal-on-scroll">
            <div class="timeline-node">
                <div class="timeline-node-inner"></div>
            </div>
            <div class="timeline-card">
                <div class="timeline-header-row">
                    <div class="timeline-title-group">
                        <div class="timeline-logo-space" title="${item.institution}">
                            <img src="${item.logo}" alt="${item.institution} logo" class="timeline-org-logo" onerror="handleAssetFallback(this, 'EDU', '${item.institution}')" />
                            <span class="logo-space-glow"></span>
                        </div>
                        <div>
                            <h3 class="timeline-role">${item.course}</h3>
                            <div class="timeline-org">${item.institution}</div>
                        </div>
                    </div>
                    <div class="timeline-duration-badge">${item.duration} • ${item.grade}</div>
                </div>
                <p class="timeline-desc">${item.description}</p>
            </div>
        </div>
    `).join("");
}

// ======================================
// CERTIFICATE RENDERING (HOLOGRAPHIC GALLERY)
// ======================================
function renderCertificates() {
    const container = document.getElementById("certificates-container");
    if (!container) return;

    container.innerHTML = certificates.map((cert, index) => `
        <div class="card-3d-wrap reveal-on-scroll" data-tilt>
            <div class="cert-card card-3d">
                <div class="cert-preview-box" onclick="openCertificateModal(${index})">
                    <img src="${cert.image}" alt="${cert.title}" class="cert-img" onerror="handleAssetFallback(this, 'CERT', '${cert.title}')" />
                    <div class="cert-view-overlay">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        <span>View Certificate</span>
                    </div>
                </div>
                <div class="cert-body">
                    <div class="cert-org-row">
                        <div class="cert-logo-space" title="${cert.organization}">
                            <img src="${cert.logo}" alt="${cert.organization}" class="cert-logo" onerror="handleAssetFallback(this, 'LOGO', '${cert.organization}')" />
                        </div>
                        <span class="cert-org-name">${cert.organization}</span>
                    </div>
                    <h3 class="cert-title">${cert.title}</h3>
                    <div class="cert-date">${cert.date}</div>
                    
                    <div class="cert-credential-box">
                        <span class="cred-id-text" id="cred-${index}">ID: ${cert.credential}</span>
                        <button class="copy-cred-btn" onclick="copyCredential('${cert.credential}', this)" title="Copy Credential ID">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                            <span>Copy</span>
                        </button>
                    </div>

                    <button class="btn btn-outline btn-sm w-full" onclick="openCertificateModal(${index})">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View Certificate
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// ======================================
// CERTIFICATE MODAL PREVIEW
// ======================================
window.openCertificateModal = function(index) {
    const cert = certificates[index];
    if (!cert) return;

    const modal = document.getElementById("cert-modal");
    const modalTitle = document.getElementById("modal-cert-title");
    const modalImage = document.getElementById("modal-cert-img");
    const modalOpenTab = document.getElementById("modal-open-tab");

    if (modalTitle) modalTitle.textContent = `${cert.title} — ${cert.organization}`;
    if (modalImage) modalImage.src = cert.image;
    if (modalOpenTab) {
        modalOpenTab.onclick = () => window.open(cert.image, "_blank");
    }

    if (modal) {
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById("cert-modal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
};

// ======================================
// COPY CREDENTIAL WITH NOTIFICATION
// ======================================
window.copyCredential = function(text, btnElement) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyFeedback(btnElement);
        }).catch(() => {
            fallbackCopyText(text, btnElement);
        });
    } else {
        fallbackCopyText(text, btnElement);
    }
};

function fallbackCopyText(text, btnElement) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showCopyFeedback(btnElement);
}

function showCopyFeedback(btn) {
    if (!btn) return;
    const originalHTML = btn.innerHTML;
    btn.classList.add("copied");
    btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Copied!</span>
    `;
    setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = originalHTML;
    }, 2000);
}

// ======================================
// 3D CARD TILT EFFECTS
// ======================================
function attachTiltEvents() {
    if (!CONFIG.enable3DTilt || window.innerWidth < 768) return;

    const cards = document.querySelectorAll("[data-tilt]");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            const innerCard = card.querySelector(".card-3d") || card;
            innerCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            innerCard.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
            innerCard.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
        });

        card.addEventListener("mouseleave", () => {
            const innerCard = card.querySelector(".card-3d") || card;
            innerCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
}

// ======================================
// 3D INTERACTIVE PROFILE SYSTEM
// ======================================
function initProfile3DInteractive() {
    const heroVisual = document.querySelector(".hero-visual");
    const profileRig = document.getElementById("profile-3d-rig");
    const glassCard = document.getElementById("profile-card-glass");
    if (!heroVisual || !profileRig || !glassCard) return;

    let isHovered = false;
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let animFrame = null;

    function updateParallax() {
        if (!isHovered) return;
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;

        profileRig.style.transform = `perspective(1200px) rotateX(${currentY.toFixed(2)}deg) rotateY(${currentX.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
        animFrame = requestAnimationFrame(updateParallax);
    }

    heroVisual.addEventListener("mousemove", (e) => {
        if (!CONFIG.enable3DTilt || window.innerWidth < 768) return;

        const rect = profileRig.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const maxTilt = 15;
        targetX = Math.max(-maxTilt, Math.min(maxTilt, (deltaX / (rect.width / 2)) * maxTilt));
        targetY = Math.max(-maxTilt, Math.min(maxTilt, (deltaY / (rect.height / 2)) * -maxTilt));

        // Specular Glare light coordinate tracking
        const glareX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const glareY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
        glassCard.style.setProperty("--glare-x", `${glareX.toFixed(1)}%`);
        glassCard.style.setProperty("--glare-y", `${glareY.toFixed(1)}%`);

        if (!isHovered) {
            isHovered = true;
            profileRig.style.animationPlayState = "paused";
            cancelAnimationFrame(animFrame);
            updateParallax();
        }
    });

    heroVisual.addEventListener("mouseleave", () => {
        if (!isHovered) return;
        isHovered = false;
        cancelAnimationFrame(animFrame);

        // Smoothly spring back to rest position
        profileRig.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)";
        profileRig.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

        setTimeout(() => {
            if (!isHovered) {
                profileRig.style.transition = "";
                profileRig.style.animationPlayState = "running";
            }
        }, 500);

        glassCard.style.setProperty("--glare-x", "35%");
        glassCard.style.setProperty("--glare-y", "35%");
    });
}

// ======================================
// SCROLL REVEAL (INTERSECTION OBSERVER)
// ======================================
let scrollObserverInstance = null;

function initScrollReveal() {
    if (scrollObserverInstance) {
        scrollObserverInstance.disconnect();
    }

    scrollObserverInstance = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    }, {
        threshold: 0.02,
        rootMargin: "0px 0px 100px 0px"
    });

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
            el.classList.add("revealed");
        }
        scrollObserverInstance.observe(el);
    });
}

// ======================================
// PARTICLES & NEURAL NETWORK CANVAS
// ======================================
function initParticleCanvas() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const count = window.innerWidth < 768 ? 25 : CONFIG.particlesCount;

    let mouse = { x: null, y: null, radius: 120 };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.size = Math.random() * 2 + 1;
            this.color = Math.random() > 0.6 ? "#7C3AED" : (Math.random() > 0.3 ? "#2563EB" : "#06B6D4");
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse repulsion/attraction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx / dist) * force * 1.5;
                    this.y -= (dy / dist) * force * 1.5;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 110)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        // Update and draw particles
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// ======================================
// CUSTOM CURSOR
// ======================================
function initCustomCursor() {
    const dot = document.querySelector(".custom-cursor-dot");
    const ring = document.querySelector(".custom-cursor-ring");

    if (!dot || !ring || window.innerWidth < 768) return;

    window.addEventListener("mousemove", (e) => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;

        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
    });

    const interactiveTargets = document.querySelectorAll("a, button, input, textarea, .card-3d, .cert-preview-box");
    interactiveTargets.forEach(el => {
        el.addEventListener("mouseenter", () => ring.classList.add("active"));
        el.addEventListener("mouseleave", () => ring.classList.remove("active"));
    });
}

// ======================================
// MOBILE MENU
// ======================================
function initMobileMenu() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileDrawer = document.getElementById("mobile-nav-drawer");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    if (!hamburgerBtn || !mobileDrawer) return;

    hamburgerBtn.addEventListener("click", () => {
        const isOpen = hamburgerBtn.classList.toggle("open");
        mobileDrawer.classList.toggle("open", isOpen);
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburgerBtn.classList.remove("open");
            mobileDrawer.classList.remove("open");
        });
    });
}

// ======================================
// CONTACT FORM
// ======================================
function initContactForm() {
    const form = document.getElementById("contact-form");
    const alertBox = document.getElementById("contact-alert");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("form-name");
        const emailInput = document.getElementById("form-email");
        const msgInput = document.getElementById("form-message");

        if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
            if (alertBox) {
                alertBox.className = "form-status-alert error";
                alertBox.textContent = "Please fill in all communication fields.";
                alertBox.style.display = "block";
            }
            return;
        }

        // Feedback simulation
        const submitBtn = form.querySelector("button[type='submit']");
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Transmitting message...</span>`;

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            form.reset();

            if (alertBox) {
                alertBox.className = "form-status-alert success";
                alertBox.textContent = "✓ Message successfully transmitted to Barani Karthick's AI Terminal!";
                alertBox.style.display = "block";
                setTimeout(() => {
                    alertBox.style.display = "none";
                }, 5000);
            }
        }, 1200);
    });
}

// ======================================
// ASSET FALLBACK SYSTEM
// ======================================
window.handleAssetFallback = function(imgElement, category, name) {
    imgElement.onerror = null; // Prevent infinite loop
    const parent = imgElement.parentElement;
    if (!parent) return;
    
    if (category === "SKILL") {
        imgElement.style.display = "none";
        const fallbackIcon = getSkillFallbackIcon(name);
        const iconWrap = document.createElement("div");
        iconWrap.className = "skill-fallback-icon-wrap";
        iconWrap.innerHTML = fallbackIcon;
        parent.appendChild(iconWrap);
        return;
    }

    if (category === "ORG" || category === "EDU" || category === "LOGO") {
        imgElement.style.display = "none";
        const monogram = (name || "BK").split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
        const badge = document.createElement("div");
        badge.className = "org-fallback-badge";
        badge.textContent = monogram || "BK";
        parent.appendChild(badge);
        return;
    }

    const fallbackDiv = document.createElement("div");
    fallbackDiv.className = "asset-placeholder-fallback";
    fallbackDiv.innerHTML = `
        <div class="asset-fallback-tag">${category}: ${name || 'UNAVAILABLE'}</div>
        <div class="asset-fallback-sub">DIGITAL ASSET PREVIEW</div>
    `;

    imgElement.style.display = "none";
    parent.appendChild(fallbackDiv);
};

// ======================================
// INITIALIZATION RUNNER
// ======================================
document.addEventListener("DOMContentLoaded", () => {
    initLoadingScreen();
    initThemeSwitcher();
    initNavigation();
    initMobileMenu();

    // Render Data Dynamic Modules
    renderProjects();
    renderSkills("all");
    initSkillFilters();
    renderInternships();
    renderEducation();
    renderCertificates();

    // Interactive 3D & Effects
    initParticleCanvas();
    initCustomCursor();
    attachTiltEvents();
    initProfile3DInteractive();
    initScrollReveal();
    initContactForm();
});
