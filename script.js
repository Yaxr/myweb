// ===== PROJECT DATA =====
const projectData = {
    'data-ai': {
        title: 'Data Science & AI Projects',
        titleIcon: 'brain-circuit',
        projects: [
            {
                icon: 'image',
                title: 'Data Annotator — Whale Shark Dataset',
                date: 'Jun 2025 - Sep 2025',
                description: 'Annotated a dataset of 1,000 underwater images of whale sharks to support marine conservation efforts. Ensured high-quality bounding box annotations for object detection and tracking tasks.',
                details: [
                    'Annotated 1,000 underwater images of whale sharks',
                    'Created precise bounding box annotations for object detection tasks',
                    'Supported AI-driven marine conservation initiatives'
                ],
                tech: ['Data Annotation', 'Computer Vision', 'Conservation'],
                relevance: 80,
                evidence: [
                    { type: 'image', src: 'assets/Hasil%20Project/Data%20Annotator/Anotasi%20Data%20Hiu%20Paus.png', label: 'Whale Shark Data Annotation Process' },
                    { type: 'image', src: 'assets/Hasil%20Project/Data%20Annotator/Hasil%20Anotasi%20Dataset%20Hiu%20Paus.jpeg', label: 'Whale Shark Dataset Annotation Results' }
                ]
            },
            {
                icon: 'scan-eye',
                title: 'YOLO11n-GConvMod: Lightweight Face Detection',
                date: 'Jan 2025 - Jun 2025',
                description: 'Enhanced YOLO11n architecture by replacing standard attention modules with GConvMod, inspired by the Conv2Former design pattern. This modification achieved improved face detection performance while significantly reducing computational cost — making it suitable for edge deployment.',
                details: [
                    'Modified YOLO11n architecture with GConvMod attention modules',
                    'Improved detection accuracy by 1% mAP50 while reducing GFLOPs by 1% and parameters',
                    'Benchmarked against baseline models for performance evaluation',
                    'Focused on real-time face detection applications'
                ],
                tech: ['Python', 'YOLO', 'PyTorch', 'Computer Vision', 'Deep Learning'],
                relevance: 100,
                evidence: [
                    {
                        type: 'comparison',
                        mediaType: 'video',
                        label: 'Face Detection Comparison (Video)',
                        originalSrc: 'assets/Hasil%20Project/YOLO11n-GConvMod%20Lightweight%20Face%20Detection/YOLO11n%20Original.mp4',
                        modifiedSrc: 'assets/Hasil%20Project/YOLO11n-GConvMod%20Lightweight%20Face%20Detection/YOLO11n%20Modify.mp4',
                        originalLabel: 'Original YOLO11n',
                        modifiedLabel: 'Modified (GConvMod)'
                    },
                    {
                        type: 'comparison',
                        mediaType: 'image',
                        label: 'Confusion Matrix Comparison',
                        originalSrc: 'assets/Hasil%20Project/YOLO11n-GConvMod%20Lightweight%20Face%20Detection/Confusion%20Matrix%20Original.png',
                        modifiedSrc: 'assets/Hasil%20Project/YOLO11n-GConvMod%20Lightweight%20Face%20Detection/Confusion%20Matrix%20Modify.png',
                        originalLabel: 'Original',
                        modifiedLabel: 'Modified'
                    }
                ]
            },
            {
                icon: 'bar-chart-3',
                title: 'Sales Performance Analytics Dashboard',
                date: 'Sep 2024 - Dec 2024',
                description: 'Comprehensive analytics dashboard for sugar product sales using the US Candy Distributor dataset. Applied Root Cause Analysis (RCA) and Year-over-Year (YoY) analysis to uncover performance trends and generate actionable business recommendations.',
                details: [
                    'Performed Root Cause Analysis (RCA) on sales decline patterns',
                    'Conducted Year-over-Year (YoY) trend analysis',
                    'Built interactive dashboards for sales performance monitoring',
                    'Generated data-driven recommendations for sales improvement'
                ],
                tech: ['Power BI', 'Excel'],
                relevance: 90,
                evidence: [
                    { type: 'image', src: 'assets/Hasil%20Project/Sales%20Performance%20Analytics%20Dashboard/US%20Candy%20Sales%20Performance.png', label: 'US Candy Sales Performance' },
                    { type: 'image', src: 'assets/Hasil%20Project/Sales%20Performance%20Analytics%20Dashboard/Dashboard.jpg', label: 'Sales Performance Analytics Dashboard' }
                ]
            },
            {
                icon: 'message-square-text',
                title: 'Sentiment Analysis — Pegadaian Digital App',
                date: 'May 2026 - Jun 2026',
                description: 'Deep learning-based sentiment analysis system for the Pegadaian Digital mobile application. Collected and processed 1,500 customer reviews from Google Play Store, built a BiLSTM classification model, and generated category-specific insights for product improvement.',
                details: [
                    'Scraped 1,500+ reviews using Google Play Scraper',
                    'Built Bidirectional LSTM (BiLSTM) model with TensorFlow',
                    'Performed text preprocessing, tokenization, and sequence padding',
                    'Categorized feedback: App Bugs & UI, Customer Service, Gold Investment, Fees, Features',
                    'Found that admin fees need attention as 82% of feedback regarding costs and administration processes was negative'
                ],
                tech: ['Python', 'TensorFlow', 'BiLSTM', 'NLP', 'Deep Learning', 'Pandas'],
                relevance: 85,
                evidence: [
                    { type: 'video', src: 'assets/Hasil%20Project/Sentiment%20Analysis%20%E2%80%94%20Pegadaian%20Digital%20App/Dashboard%20Pegadaian.mp4', label: 'Pegadaian Sentiment Analysis Dashboard Demo' }
                ]
            }
        ]
    },
    'web-dev': {
        title: 'Web Development Projects',
        titleIcon: 'code-xml',
        projects: [
            {
                icon: 'settings',
                title: 'Backend Services — Asitech Global Solution',
                date: 'Oct 2023 - Jan 2024',
                description: 'Developed production-grade backend services during internship at Asitech Global Solution. Built RESTful APIs using NestJS framework with relational database integration, focusing on schema optimization and data integrity.',
                details: [
                    'Designed and implemented RESTful API endpoints',
                    'Built backend services using NestJS framework',
                    'Optimized database schemas for improved query performance',
                    'Maintained data integrity across relational database systems'
                ],
                tech: ['NestJS', 'PostgreSQL', 'REST API', 'TypeScript', 'Git'],
                relevance: 90,
                evidence: []
            },
            {
                icon: 'layout-dashboard',
                title: 'Interactive Dashboard System — BKN Manado',
                date: 'Dec 2025 - Jun 2026',
                description: 'Developed interactive dashboard system in Google Sheets and AI-generated summaries using Google Apps Script and the Groq API for the National Civil Service Agency (BKN) Manado office. Transformed raw administrative ASN datasets into visual, actionable insights to support data-driven decision making.',
                details: [
                    'Built interactive Google Sheets dashboards for ASN data visualization',
                    'Integrated AI-generated summaries using Groq API and Apps Script for quick decision support',
                    'Managed data cleansing, validation, and maintenance pipelines using Google Sheets functions and scripts',
                    'Transformed administrative data into actionable business insights'
                ],
                tech: ['Apps Script', 'Google Sheets', 'AI Groq API'],
                relevance: 100,
                evidence: [
                    { type: 'video', src: 'assets/Hasil%20Project/Interactive%20Dashboard%20System%20%E2%80%94%20BKN%20Manado/Video%20Dashboard%20BKN.mp4', label: 'BKN Manado Interactive Dashboard Demo' }
                ]
            },
            {
                icon: 'file-spreadsheet',
                title: 'Data Management and Recapitulation Web (Datamu)',
                date: 'Apr 2026 - Jun 2026',
                description: 'Functions to monitor files or progress reports for employees and teachers at the Ministry of Religion so that reporting becomes more structured, effective, and paperless.',
                details: [
                    'Developed a data management and progress report recapitulation system',
                    'Supported digitalized (paperless) reporting for Ministry of Religion employees and teachers',
                    'Improved the effectiveness and regularity of the data monitoring workflow'
                ],
                tech: ['Web Development', 'Data Management'],
                relevance: 95,
                evidence: [
                    { type: 'video', src: 'assets/Hasil%20Project/Datamu/Datamu%20Pendis%20Kementrian%20Agama%20Kabupaten%20Minahasa.mp4', label: 'Data Management and Recapitulation Web Demo (Datamu)' }
                ]
            },
            {
                icon: 'book-open-check',
                title: 'Digitamu & SUKA Web Applications',
                date: 'May 2026 - Jun 2026',
                description: 'Interactive web applications acting as a digital guestbook (Digitamu) and a platform to accommodate public aspirations (SUKA), with direct data storage integration to Google Sheets.',
                details: [
                    'Developed a digital guestbook (Digitamu) for efficient visitor recording',
                    'Built the SUKA platform to collect public aspirations and feedback',
                    'Integrated web forms with Google Sheets API as a backend-less database',
                    'Facilitated real-time visitor data management and recapitulation'
                ],
                tech: ['Web Development', 'Google Sheets API', 'HTML/CSS/JS'],
                relevance: 95,
                evidence: [
                    { type: 'video', src: 'assets/Hasil%20Project/Digitamu%20dan%20SUKA/Video%20Digitamu.mp4', label: 'Digitamu Application Demo' },
                    { type: 'video', src: 'assets/Hasil%20Project/Digitamu%20dan%20SUKA/Video%20SUKA.mp4', label: 'SUKA Application Demo' }
                ]
            }
        ]
    },
    'agriculture': {
        title: 'Smart Agriculture Projects',
        titleIcon: 'sprout',
        projects: [
            {
                icon: 'leaf',
                title: 'Hydroponic Lettuce Farming & Smart Agriculture',
                date: 'Jun 2020 - Present',
                description: 'Owner and operator of a hydroponic lettuce farming business, combining agricultural expertise with data-driven optimization techniques. Monitor crop growth, nutrient conditions, and environmental factors to maximize production yield and quality.',
                details: [
                    'Manage end-to-end hydroponic lettuce cultivation operations',
                    'Monitor and optimize nutrient solutions for plant health',
                    'Track environmental factors (temperature, humidity, pH, EC)',
                    'Apply data-driven practices for continuous production improvement',
                    'Explore IoT integration for automated monitoring systems'
                ],
                tech: ['Hydroponics', 'Data Analysis', 'IoT', 'Agriculture', 'Business Management'],
                relevance: 100,
                evidence: [
                    { type: 'image', src: 'assets/Hasil%20Project/Hydroponic%20Lettuce/Kebun%201.jpeg', label: 'Hydroponic Farm 1' },
                    { type: 'image', src: 'assets/Hasil%20Project/Hydroponic%20Lettuce/Kebun%202.jpeg', label: 'Hydroponic Farm 2' }
                ]
            }
        ]
    }
};

// Attempt to load custom order and inclusion settings from local storage
try {
    const savedData = localStorage.getItem('portfolio_projectData');
    if (savedData) {
        const parsed = JSON.parse(savedData);
        // Only overwrite projects arrays to preserve any new fields/icons added in code
        for (const cat in parsed) {
            if (projectData[cat] && parsed[cat].projects) {
                // Restore includeInCV state for projects
                projectData[cat].projects.forEach(p => {
                    const savedProj = parsed[cat].projects.find(sp => sp.title === p.title);
                    if (savedProj && typeof savedProj.includeInCV !== 'undefined') {
                        p.includeInCV = savedProj.includeInCV;
                    }
                });

                // Reorder existing projects based on saved titles
                const savedTitles = parsed[cat].projects.map(p => p.title);
                projectData[cat].projects.sort((a, b) => {
                    const indexA = savedTitles.indexOf(a.title);
                    const indexB = savedTitles.indexOf(b.title);
                    if (indexA === -1) return 1;
                    if (indexB === -1) return -1;
                    return indexA - indexB;
                });
            }
        }
    }
} catch (e) {
    console.error("Error loading saved project order", e);
}

// ===== TYPING ANIMATION =====
const typingTexts = [
    'Data Scientist & AI Engineer',
    'Machine Learning Specialist',
    'Deep Learning Researcher',
    'NLP & Computer Vision Developer',
    'Business Intelligence Analyst',
    'Hydroponic Farmer & Entrepreneur'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextEl = document.getElementById('typedText');

function typeEffect() {
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typedTextEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextEl.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentText.length) {
        speed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        speed = 500; // Pause before next word
    }

    setTimeout(typeEffect, speed);
}

// ===== PARTICLE ANIMATION =====
function initParticles() {
    const canvas = document.getElementById('heroParticles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 170, ${this.opacity})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        particles = Array.from({ length: count }, () => new Particle());
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 212, 170, ${0.08 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        animationId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        // Re-adjust particle count on resize
    });

    init();
    animate();
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ===== STAT COUNTER ANIMATION =====
function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const isDecimal = target % 1 !== 0;
                const duration = 2000;
                const start = performance.now();

                function updateCount(currentTime) {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    const current = eased * target;

                    el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        el.textContent = isDecimal ? target.toFixed(2) : target;
                    }
                }

                requestAnimationFrame(updateCount);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
}

// ===== PROJECT CATEGORIES =====
function initProjectCategories() {
    const categoryCards = document.querySelectorAll('.category-card');
    const projectPanel = document.getElementById('projectPanel');
    const panelBack = document.getElementById('panelBack');
    const panelTitle = document.getElementById('panelTitle');
    const projectList = document.getElementById('projectList');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const data = projectData[category];

            if (!data) return;

            // Set panel title
            panelTitle.textContent = data.title;

            // Store current category data for sorting
            let currentProjects = [...data.projects];
            let isSorted = false;
            let isEditMode = false;

            const btnSortRelevance = document.getElementById('btnSortRelevance');
            const btnEditMode = document.getElementById('btnEditMode');

            function renderProjectList() {
                // Build project list HTML
                projectList.innerHTML = currentProjects.map((project, idx) => `
                    <div class="project-item ${isEditMode ? 'draggable' : ''}" data-idx="${idx}" ${isEditMode ? 'draggable="true"' : ''}>
                        ${isEditMode ? '<div class="drag-handle"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>' : ''}
                        <h4>
                            <span class="project-icon"><i data-lucide="${project.icon}"></i></span>
                            ${project.title}
                        </h4>
                        ${project.date ? `<span class="project-date" style="display: block; font-size: 0.85rem; color: #a1a1aa; margin-top: -0.25rem; margin-bottom: 0.75rem; font-style: italic;">${project.date}</span>` : ''}
                        <p>${project.description}</p>
                        <ul>
                            ${project.details.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                        <div class="project-item-footer">
                            <div class="project-tech">
                                ${project.tech.map(t => `<span>${t}</span>`).join('')}
                            </div>
                            <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                                <label class="cv-toggle-label" style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; color: var(--text-secondary); cursor: pointer; user-select: none; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-glass); padding: 6px 12px; border-radius: 6px; transition: var(--transition);">
                                    <input type="checkbox" class="cv-toggle-checkbox" data-category="${category}" data-title="${project.title}" ${project.includeInCV !== false ? 'checked' : ''} style="accent-color: var(--accent-teal); cursor: pointer; width: 14px; height: 14px; margin: 0;">
                                    <span style="font-weight: 500;">Include in CV</span>
                                </label>
                                ${project.evidence && project.evidence.length > 0 ? `
                                    <button class="btn-evidence" data-category="${category}" data-project-title="${project.title}">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polygon points="5,3 19,12 5,21" />
                                        </svg>
                                        View Results
                                        <span class="evidence-count">${project.evidence.length}</span>
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `).join('');

                // Re-initialize Lucide icons for dynamically added content
                lucide.createIcons();

                // Attach CV toggle checkbox listeners
                projectList.querySelectorAll('.cv-toggle-checkbox').forEach(checkbox => {
                    checkbox.addEventListener('change', (e) => {
                        const cat = checkbox.dataset.category;
                        const title = checkbox.dataset.title;
                        const proj = projectData[cat].projects.find(p => p.title === title);
                        if (proj) {
                            proj.includeInCV = checkbox.checked;
                            // Save to local storage
                            localStorage.setItem('portfolio_projectData', JSON.stringify(projectData));
                        }
                    });
                });

                // Attach evidence button listeners
                projectList.querySelectorAll('.btn-evidence').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const cat = btn.dataset.category;
                        const projTitle = btn.dataset.projectTitle;
                        const proj = projectData[cat].projects.find(p => p.title === projTitle);
                        if (proj && proj.evidence && proj.evidence.length > 0) {
                            openEvidenceModal(proj.title, proj.evidence);
                        }
                    });
                });

                // Attach drag and drop listeners
                if (isEditMode) {
                    let dragSource = null;
                    projectList.querySelectorAll('.project-item').forEach(item => {
                        item.addEventListener('dragstart', function (e) {
                            dragSource = this;
                            e.dataTransfer.effectAllowed = 'move';
                            e.dataTransfer.setData('text/html', this.innerHTML);
                            setTimeout(() => this.classList.add('dragging'), 0);
                        });
                        item.addEventListener('dragover', function (e) {
                            e.preventDefault();
                            e.dataTransfer.dropEffect = 'move';
                            return false;
                        });
                        item.addEventListener('drop', function (e) {
                            e.stopPropagation();
                            if (dragSource !== this) {
                                const sourceIdx = parseInt(dragSource.dataset.idx);
                                const targetIdx = parseInt(this.dataset.idx);

                                const movedItem = currentProjects.splice(sourceIdx, 1)[0];
                                currentProjects.splice(targetIdx, 0, movedItem);

                                // Update main data and local storage
                                projectData[category].projects = [...currentProjects];
                                localStorage.setItem('portfolio_projectData', JSON.stringify(projectData));

                                renderProjectList();
                            }
                            return false;
                        });
                        item.addEventListener('dragend', function (e) {
                            this.classList.remove('dragging');
                        });
                    });
                }
            }

            renderProjectList();

            // Handle sort button click
            if (btnSortRelevance) {
                // Reset button state when opening a new category
                btnSortRelevance.classList.remove('active');

                const newBtnSort = btnSortRelevance.cloneNode(true);
                btnSortRelevance.parentNode.replaceChild(newBtnSort, btnSortRelevance);

                newBtnSort.addEventListener('click', () => {
                    if (!isSorted) {
                        currentProjects.sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
                        newBtnSort.classList.add('active');
                    } else {
                        // Reset to default (which is either saved locally or hardcoded)
                        currentProjects = [...data.projects];
                        newBtnSort.classList.remove('active');
                    }
                    isSorted = !isSorted;
                    renderProjectList();
                });
            }

            // Handle edit mode button
            if (btnEditMode) {
                const newBtnEdit = btnEditMode.cloneNode(true);
                btnEditMode.parentNode.replaceChild(newBtnEdit, btnEditMode);

                // Reset edit mode state
                isEditMode = false;
                newBtnEdit.classList.remove('active');
                newBtnEdit.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

                newBtnEdit.addEventListener('click', () => {
                    isEditMode = !isEditMode;
                    newBtnEdit.classList.toggle('active');

                    const sortBtn = document.getElementById('btnSortRelevance');
                    if (isEditMode) {
                        newBtnEdit.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`;
                        if (sortBtn) sortBtn.style.display = 'none';
                    } else {
                        newBtnEdit.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
                        if (sortBtn) sortBtn.style.display = 'inline-flex';
                    }
                    renderProjectList();
                });
            }

            // Show panel, hide cards
            projectPanel.classList.add('active');

            // Smooth scroll to panel
            setTimeout(() => {
                projectPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    });

    // Back button
    panelBack.addEventListener('click', () => {
        projectPanel.classList.remove('active');

        setTimeout(() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== ACTIVE NAV LINK HIGHLIGHT =====
function initActiveNav() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

// ===== ART INTERACTIONS & GOOGLE SHEETS API =====
// TODO: Replace this empty string with your Google Apps Script Web App URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw_cX1Eej0TfehqoWsqbeB0Hcd3G743zN7x6dlNBT51yMs8rpZ9kwoXhozLz2ypyHfyRQ/exec";

async function fetchArtworkStats() {
    if (!WEB_APP_URL) return;
    try {
        const response = await fetch(WEB_APP_URL);
        const data = await response.json();

        // Update likes and comments in the UI
        document.querySelectorAll('.like-btn').forEach(likeBtn => {
            const artworkName = likeBtn.dataset.artwork;
            if (data[artworkName]) {
                likeBtn.querySelector('.like-count').textContent = data[artworkName].likes || 0;
            }
        });

        document.querySelectorAll('.comment-btn').forEach(commentBtn => {
            const artworkName = commentBtn.dataset.artwork;
            if (data[artworkName]) {
                commentBtn.querySelector('.comment-count').textContent = data[artworkName].comments || 0;
            }
        });
    } catch (e) {
        console.error("Failed to fetch artwork stats", e);
    }
}

function initArtInteractions() {
    // Fetch real counts from Google Sheets on load
    fetchArtworkStats();

    const likeBtns = document.querySelectorAll('.like-btn');
    const commentBtns = document.querySelectorAll('.comment-btn');
    const modal = document.getElementById('commentModal');
    const modalClose = document.getElementById('modalClose');
    const commentForm = document.getElementById('commentForm');
    const artworkIdInput = document.getElementById('artworkId');
    const modalArtworkName = document.getElementById('modalArtworkName');
    const formStatus = document.getElementById('formStatus');

    // Setup Like Buttons
    likeBtns.forEach(btn => {
        const artworkName = btn.dataset.artwork;
        const countSpan = btn.querySelector('.like-count');

        // Check local storage for whether this user has liked it already (to prevent double voting)
        const hasLiked = localStorage.getItem(`liked_${artworkName}`);
        if (hasLiked) {
            btn.classList.add('liked');
        }

        btn.addEventListener('click', async () => {
            if (btn.classList.contains('liked')) return; // Already liked

            // Visual update instantly
            btn.classList.add('liked');
            countSpan.textContent = parseInt(countSpan.textContent) + 1;
            localStorage.setItem(`liked_${artworkName}`, 'true');

            // Send to Google Sheets API
            if (WEB_APP_URL) {
                try {
                    fetch(WEB_APP_URL, {
                        method: 'POST',
                        mode: 'no-cors', // Avoid CORS preflight block for simple submissions
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            action: 'like',
                            artwork: artworkName
                        })
                    });
                } catch (e) {
                    console.error("Failed to send like", e);
                }
            }
        });
    });

    // Setup Comment Modal
    commentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const artworkName = btn.dataset.artwork;
            artworkIdInput.value = artworkName;
            modalArtworkName.textContent = artworkName;
            modal.classList.add('active');
            formStatus.textContent = "";
            formStatus.className = "form-status";
        });
    });

    // Close Modal
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    // Submit Comment Form
    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!WEB_APP_URL) {
            formStatus.textContent = "Please add the Web App URL in script.js first!";
            formStatus.className = "form-status error";
            return;
        }

        const submitBtn = commentForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="btn-icon"></i> Sending...';
        lucide.createIcons();
        submitBtn.disabled = true;
        formStatus.textContent = "";

        const formData = {
            action: 'comment',
            artwork: artworkIdInput.value,
            name: document.getElementById('commentName').value,
            comment: document.getElementById('commentText').value
        };

        try {
            // Using no-cors means we can't read the response, but it sends successfully
            await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            formStatus.textContent = "Thank you! Your comment has been sent.";
            formStatus.className = "form-status success";
            commentForm.reset();

            // Local UI update for comment count
            const artworkName = artworkIdInput.value;
            const commentBtn = document.querySelector(`.comment-btn[data-artwork="${artworkName}"]`);
            if (commentBtn) {
                const countSpan = commentBtn.querySelector('.comment-count');
                if (countSpan) {
                    countSpan.textContent = parseInt(countSpan.textContent || '0') + 1;
                    localStorage.setItem(`commented_${artworkName}`, countSpan.textContent);
                }
            }

            // Auto close after 3 seconds
            setTimeout(() => {
                modal.classList.remove('active');
                formStatus.textContent = "";
            }, 3000);

        } catch (error) {
            formStatus.textContent = "Error sending comment. Please try again later.";
            formStatus.className = "form-status error";
            console.error(error);
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            lucide.createIcons();
        }
    });
}

// ===== EVIDENCE MODAL =====
let currentEvidenceIndex = 0;
let currentEvidenceList = [];

function openEvidenceModal(projectTitle, evidenceList) {
    currentEvidenceList = evidenceList;
    currentEvidenceIndex = 0;

    const modal = document.getElementById('evidenceModal');
    const titleEl = document.getElementById('evidenceProjectTitle');
    titleEl.textContent = projectTitle;

    renderEvidence();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEvidenceModal() {
    const modal = document.getElementById('evidenceModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Pause any playing video
    const video = document.getElementById('evidenceVideo');
    if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
    }

    // Clear comparison containers to stop playing videos
    const origWrapper = document.getElementById('comparisonOriginalWrapper');
    const modWrapper = document.getElementById('comparisonModifiedWrapper');
    if (origWrapper) origWrapper.innerHTML = '';
    if (modWrapper) modWrapper.innerHTML = '';
}

function renderEvidence() {
    const item = currentEvidenceList[currentEvidenceIndex];
    const videoContainer = document.getElementById('evidenceVideoContainer');
    const imageContainer = document.getElementById('evidenceImageContainer');
    const comparisonContainer = document.getElementById('evidenceComparisonContainer');
    const video = document.getElementById('evidenceVideo');
    const image = document.getElementById('evidenceImage');
    const labelEl = document.getElementById('evidenceLabel');
    const counterEl = document.getElementById('evidenceCounter');
    const prevBtn = document.getElementById('evidencePrev');
    const nextBtn = document.getElementById('evidenceNext');

    // Comparison elements
    const origLabel = document.getElementById('comparisonOriginalLabel');
    const modLabel = document.getElementById('comparisonModifiedLabel');
    const origWrapper = document.getElementById('comparisonOriginalWrapper');
    const modWrapper = document.getElementById('comparisonModifiedWrapper');

    // Clean up previous comparison media
    origWrapper.innerHTML = '';
    modWrapper.innerHTML = '';

    // Update label
    labelEl.textContent = item.label || '';

    // Update counter
    if (currentEvidenceList.length > 1) {
        counterEl.textContent = `${currentEvidenceIndex + 1} / ${currentEvidenceList.length}`;
        counterEl.style.display = 'block';
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    } else {
        counterEl.style.display = 'none';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }

    // Enable/disable prev/next
    prevBtn.disabled = currentEvidenceIndex === 0;
    nextBtn.disabled = currentEvidenceIndex === currentEvidenceList.length - 1;

    // Show the right container
    if (item.type === 'video') {
        videoContainer.style.display = 'block';
        imageContainer.style.display = 'none';
        comparisonContainer.style.display = 'none';
        video.src = item.src;
        video.load();
    } else if (item.type === 'comparison') {
        videoContainer.style.display = 'none';
        imageContainer.style.display = 'none';
        comparisonContainer.style.display = 'flex';

        origLabel.textContent = item.originalLabel || 'Original';
        modLabel.textContent = item.modifiedLabel || 'Modified';

        if (item.mediaType === 'video') {
            origWrapper.innerHTML = `<video id="compVidOrig" controls preload="metadata" playsinline src="${item.originalSrc}"></video>`;
            modWrapper.innerHTML = `<video id="compVidMod" controls preload="metadata" playsinline src="${item.modifiedSrc}"></video>`;

            const vidOrig = document.getElementById('compVidOrig');
            const vidMod = document.getElementById('compVidMod');

            // Sync play, pause, and seek events
            let isSyncing = false;

            const syncEvent = (source, target, eventType) => {
                source.addEventListener(eventType, () => {
                    if (isSyncing) return;
                    isSyncing = true;
                    if (eventType === 'play') target.play();
                    else if (eventType === 'pause') target.pause();
                    else if (eventType === 'seeked') target.currentTime = source.currentTime;
                    setTimeout(() => isSyncing = false, 50);
                });
            };

            syncEvent(vidOrig, vidMod, 'play');
            syncEvent(vidOrig, vidMod, 'pause');
            syncEvent(vidOrig, vidMod, 'seeked');

            syncEvent(vidMod, vidOrig, 'play');
            syncEvent(vidMod, vidOrig, 'pause');
            syncEvent(vidMod, vidOrig, 'seeked');

        } else {
            origWrapper.innerHTML = `<img src="${item.originalSrc}" alt="Original">`;
            modWrapper.innerHTML = `<img src="${item.modifiedSrc}" alt="Modified">`;
        }
    } else {
        videoContainer.style.display = 'none';
        comparisonContainer.style.display = 'none';
        imageContainer.style.display = 'flex';
        image.src = item.src;
        image.alt = item.label || 'Project Evidence';
    }
}

function initEvidenceModal() {
    const modal = document.getElementById('evidenceModal');
    const closeBtn = document.getElementById('evidenceClose');
    const prevBtn = document.getElementById('evidencePrev');
    const nextBtn = document.getElementById('evidenceNext');

    closeBtn.addEventListener('click', closeEvidenceModal);

    // Click outside content to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('evidence-modal-backdrop')) {
            closeEvidenceModal();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentEvidenceIndex > 0) {
            currentEvidenceIndex--;
            renderEvidence();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentEvidenceIndex < currentEvidenceList.length - 1) {
            currentEvidenceIndex++;
            renderEvidence();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeEvidenceModal();
        } else if (e.key === 'ArrowLeft') {
            if (currentEvidenceIndex > 0) {
                currentEvidenceIndex--;
                renderEvidence();
            }
        } else if (e.key === 'ArrowRight') {
            if (currentEvidenceIndex < currentEvidenceList.length - 1) {
                currentEvidenceIndex++;
                renderEvidence();
            }
        }
    });
}

// ===== DYNAMIC ATS CV DOWNLOAD =====
function initCVDownload() {
    const btnDownloadCV = document.getElementById('btnDownloadCV');
    if (!btnDownloadCV) return;

    btnDownloadCV.addEventListener('click', () => {
        const container = document.getElementById('printCVContainer');
        if (!container) return;

        // Compile projects dynamically in their current custom order from projectData
        let projectsHTML = '';
        for (const cat in projectData) {
            const catTitle = projectData[cat].title;
            projectData[cat].projects.forEach(proj => {
                if (proj.includeInCV === false) return; // Exclude if untoggled

                const techList = proj.tech.join(', ');
                const detailsList = proj.details.map(detail => `<li style="margin-bottom: 3px; text-align: justify; color: #3b82f6;"><span style="color: #333;">${detail}</span></li>`).join('');

                projectsHTML += `
                    <div class="cv-project-item" style="margin-bottom: 14px; page-break-inside: avoid;">
                        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #111;">
                            <span>${proj.title}</span>
                            <span style="font-weight: normal; font-size: 9pt; color: #333;">${proj.date ? proj.date : ''}</span>
                        </div>
                        <div style="font-size: 9pt; color: #555; font-style: italic; margin-bottom: 4px;">
                            ${catTitle}
                        </div>
                        <div style="font-size: 9pt; color: #444; margin-bottom: 4px; font-weight: 500;">
                            Technologies: ${techList}
                        </div>
                        <p style="margin: 0 0 5px 0; font-size: 9.5pt; color: #222; text-align: justify; line-height: 1.35;">${proj.description}</p>
                        <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #333; line-height: 1.35;">
                            ${detailsList}
                        </ul>
                    </div>
                `;
            });
        }

        container.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto; background: #fff; color: #000; font-family: Arial, Helvetica, sans-serif; padding: 20px;">
                <!-- CONTACT HEADER -->
                <div style="text-align: center; margin-bottom: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
                    <h1 style="margin: 0 0 4px 0; font-size: 20pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Muhammad Yasser Arafat Rahmatullah</h1>
                    <div style="font-size: 9.5pt; color: #111; margin-bottom: 4px; font-weight: 500;">
                        Manado, Indonesia &bull; +62 857 5611 0029 &bull; muhammadrahmatullah209@gmail.com
                    </div>
                    <div style="font-size: 9pt; color: #222;">
                        <a href="https://linkedin.com/in/muhammad-yasser-297464272" style="color: #000; text-decoration: none; font-weight: 500;">linkedin.com/in/muhammad-yasser-297464272</a> &bull; 
                        <a href="https://github.com/Yaxr" style="color: #000; text-decoration: none; font-weight: 500;">github.com/Yaxr</a> &bull; 
                        <a href="https://yaxr.github.io/myweb/" style="color: #000; text-decoration: none; font-weight: 500;">yaxr.github.io/myweb</a>
                    </div>
                </div>

                <!-- PROFESSIONAL SUMMARY -->
                <div class="cv-section" style="margin-bottom: 16px;">
                    <h2 style="font-size: 11pt; text-transform: uppercase; color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 4px; margin: 0 0 8px 0; font-weight: bold; letter-spacing: 0.5px;">Professional Summary</h2>
                    <p style="margin: 0; font-size: 9.5pt; line-height: 1.4; text-align: justify; color: #222;">
                        Computer Science graduate (Cum Laude, GPA 3.85) from Sam Ratulangi University with a passion for turning data into impactful solutions. Specialized in Data Analytics, Machine Learning, Deep Learning, and Natural Language Processing. Experienced in developing production-grade backend APIs, administrative data dashboard systems, and computer vision models. Adaptable and analytical professional combining technical expertise with operational management experience in smart agriculture.
                    </p>
                </div>

                <!-- EDUCATION -->
                <div class="cv-section" style="margin-bottom: 16px;">
                    <h2 style="font-size: 11pt; text-transform: uppercase; color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 4px; margin: 0 0 8px 0; font-weight: bold; letter-spacing: 0.5px;">Education</h2>
                    <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #111;">
                        <span>Sam Ratulangi University</span>
                        <span>Graduated: July 2025</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 9.5pt; margin-top: 2px; color: #222;">
                        <span style="font-style: italic;">Bachelor of Computer Science (Informatics Engineering)</span>
                        <span>GPA: 3.85 / 4.00 (Cum Laude)</span>
                    </div>
                </div>

                <!-- TECHNICAL SKILLS -->
                <div class="cv-section" style="margin-bottom: 16px;">
                    <h2 style="font-size: 11pt; text-transform: uppercase; color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 4px; margin: 0 0 8px 0; font-weight: bold; letter-spacing: 0.5px;">Technical Skills</h2>
                    <ul style="margin: 0; padding-left: 18px; font-size: 9.5pt; color: #3b82f6; line-height: 1.4;">
                        <li><span style="color: #222;"><strong>Programming:</strong> Python, JavaScript, TypeScript, HTML/CSS, SQL</span></li>
                        <li><span style="color: #222;"><strong>Frameworks & Libs:</strong> NestJS, TensorFlow, PyTorch, Pandas, NLP</span></li>
                        <li><span style="color: #222;"><strong>Tools & Databases:</strong> Power BI, Excel, Google Sheets, Apps Script, AI Groq API, PostgreSQL, Git, GitHub, IoT</span></li>
                        <li><span style="color: #222;"><strong>Languages:</strong> English, Indonesian</span></li>
                    </ul>
                </div>

                <!-- WORK EXPERIENCE -->
                <div class="cv-section" style="margin-bottom: 16px;">
                    <h2 style="font-size: 11pt; text-transform: uppercase; color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 4px; margin: 0 0 8px 0; font-weight: bold; letter-spacing: 0.5px;">Work Experience</h2>
                    
                    <div style="margin-bottom: 12px; page-break-inside: avoid;">
                        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #111;">
                            <span>Data and Information Management Intern</span>
                            <span>Dec 2025 &ndash; Jun 2026</span>
                        </div>
                        <div style="font-size: 9pt; font-style: italic; color: #444; margin-bottom: 4px;">National Civil Service Agency (BKN) Manado &mdash; Manado, Indonesia</div>
                        <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #3b82f6; line-height: 1.35;">
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Built interactive dashboards for ASN data visualization</span></li>
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Integrated AI-generated summaries for quick decision support</span></li>
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Managed data cleansing, validation, and maintenance pipelines</span></li>
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Transformed administrative data into actionable business insights</span></li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 12px; page-break-inside: avoid;">
                        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #111;">
                            <span>Research Community Member</span>
                            <span>Dec 2024 &ndash; Sep 2025</span>
                        </div>
                        <div style="font-size: 9pt; font-style: italic; color: #444; margin-bottom: 4px;">AI-VISION Research &mdash; Manado, Indonesia</div>
                        <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #3b82f6; line-height: 1.35;">
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Conducted advanced AI and Computer Vision research targeting efficient object detection.</span></li>
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Developed and evaluated deep learning-based face detection models, improving accuracy and speed.</span></li>
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Participated in rigorous model benchmarking, weight quantization, and neural network optimization.</span></li>
                        </ul>
                    </div>

                    <div style="page-break-inside: avoid;">
                        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #111;">
                            <span>Backend Developer Intern</span>
                            <span>Oct 2023 &ndash; Jan 2024</span>
                        </div>
                        <div style="font-size: 9pt; font-style: italic; color: #444; margin-bottom: 4px;">Asitech Global Solution &mdash; Makassar, Indonesia</div>
                        <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #3b82f6; line-height: 1.35;">
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Developed scalable backend REST APIs using NestJS framework and TypeScript.</span></li>
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Designed relational PostgreSQL database schemas with query optimization to improve load times.</span></li>
                            <li style="margin-bottom: 2px; text-align: justify;"><span style="color: #333;">Maintained schema updates and enforced database constraints for data consistency.</span></li>
                        </ul>
                    </div>
                </div>

                <!-- PROJECTS -->
                <div class="cv-section" style="margin-bottom: 16px;">
                    <h2 style="font-size: 11pt; text-transform: uppercase; color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 4px; margin: 0 0 8px 0; font-weight: bold; letter-spacing: 0.5px;">Projects</h2>
                    ${projectsHTML}
                </div>

                <!-- CERTIFICATIONS -->
                <div class="cv-section" style="page-break-inside: avoid;">
                    <h2 style="font-size: 11pt; text-transform: uppercase; color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 4px; margin: 0 0 8px 0; font-weight: bold; letter-spacing: 0.5px;">Certifications</h2>
                    <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #3b82f6; line-height: 1.35;">
                        <li style="margin-bottom: 2px;"><span style="color: #333;"><strong>Data Analytics & Generative AI</strong> &ndash; RevoU</span></li>
                        <li style="margin-bottom: 2px;"><span style="color: #333;"><strong>Data Science Challenge with Python</strong> &ndash; DQLab</span></li>
                        <li style="margin-bottom: 2px;"><span style="color: #333;"><strong>Big Data Using Python</strong> &ndash; Digital Talent Scholarship (Kominfo)</span></li>
                        <li style="margin-bottom: 2px;"><span style="color: #333;"><strong>Backend Developer Internship Certificate</strong> &ndash; Asitech Global Solution</span></li>
                    </ul>
                </div>
            </div>
        `;

        setTimeout(() => {
            alert("To download your ATS-friendly CV, please select 'Save as PDF' in the print dialog.");
            window.print();
        }, 100);
    });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    typeEffect();
    initParticles();
    initNavbar();
    initScrollReveal();
    initCounters();
    initProjectCategories();
    initSmoothScroll();
    initActiveNav();
    initArtInteractions();
    initEvidenceModal();
    initCVDownload();
});
