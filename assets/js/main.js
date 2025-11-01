const numberFormatter = new Intl.NumberFormat('en-IN');

const serviceDetails = {
    'body-repair': {
        title: 'Custom Web Development',
        image: './assets/images/services-1.jpeg',
        description: 'Tailored web solutions built with modern technologies and best practices.',
        points: [
            'Responsive websites optimized for all devices and screen sizes.',
            'Built with React, Vue, Angular, or your preferred framework.',
            'SEO-friendly architecture for better search engine rankings.',
            'Fast loading times with performance optimization built-in.'
        ]
    },
    'maintenance': {
        title: 'E-commerce Solutions',
        image: './assets/images/services-3.jpeg',
        description: 'Complete online stores that drive sales and enhance customer experience.',
        points: [
            'Secure payment gateway integration (Stripe, PayPal, Razorpay).',
            'Inventory management and order tracking systems.',
            'Shopping cart optimization for higher conversion rates.',
            'Mobile-first design for on-the-go shopping experience.'
        ]
    },
    'overhaul': {
        title: 'Web Applications',
        image: './assets/images/services-4.jpg',
        description: 'Powerful web applications engineered for performance and scalability.',
        points: [
            'Full-stack development with Node.js, Python, or PHP backends.',
            'RESTful API design and implementation.',
            'Database architecture and optimization (MySQL, MongoDB, PostgreSQL).',
            'Cloud deployment on AWS, Azure, or Google Cloud Platform.'
        ]
    },
    'paint': {
        title: 'UI/UX Design',
        image: './assets/images/services-5.jpg',
        description: 'Beautiful interfaces that prioritize user experience and engagement.',
        points: [
            'User research and persona development.',
            'Wireframing and interactive prototypes using Figma.',
            'Accessibility-first design principles (WCAG compliant).',
            'Usability testing and iterative improvements.'
        ]
    },
    'detailing': {
        title: 'Digital Marketing',
        image: './assets/images/services-6.jpeg',
        description: 'Strategic digital marketing to grow your online presence and revenue.',
        points: [
            'Search Engine Optimization (SEO) for organic traffic growth.',
            'Social media management and content creation.',
            'Google Ads and Facebook Ads campaign management.',
            'Email marketing automation and analytics reporting.'
        ]
    },
    'enhancements': {
        title: 'API & Backend Services',
        image: './assets/images/services-8.jpeg',
        description: 'Robust backend systems and integrations that power your applications.',
        points: [
            'Custom API development and third-party integrations.',
            'Microservices architecture for scalable solutions.',
            'Real-time features with WebSocket and Socket.io.',
            'DevOps and CI/CD pipeline setup for automated deployments.'
        ]
    }
};

const otherServicesDetails = {
    'glass': {
        title: 'React & Next.js Development',
        description: 'Modern JavaScript frameworks for building fast, scalable web applications.',
        points: [
            'Server-side rendering for optimal SEO performance',
            'Static site generation for lightning-fast load times',
            'React Server Components for efficient data fetching',
            'Incremental static regeneration for dynamic content'
        ]
    },
    'upholstery': {
        title: 'Vue & Nuxt.js Development',
        description: 'Progressive JavaScript framework for intuitive user interfaces.',
        points: [
            'Component-based architecture for reusable code',
            'Universal rendering for better performance',
            'Built-in state management with Pinia',
            'Automatic code splitting for faster page loads'
        ]
    },
    'antirust': {
        title: 'Node.js & Express Backend',
        description: 'Scalable server-side applications with JavaScript runtime.',
        points: [
            'RESTful API development with Express framework',
            'Real-time capabilities with Socket.io',
            'Efficient asynchronous programming',
            'Microservices architecture support'
        ]
    },
    'steering': {
        title: 'Python & Django Development',
        description: 'Powerful backend framework for rapid development.',
        points: [
            'Django REST framework for API development',
            'Built-in admin panel for content management',
            'ORM for database abstraction',
            'Strong security features out of the box'
        ]
    },
    'matts': {
        title: 'WordPress & PHP Solutions',
        description: 'Content management systems for easy website management.',
        points: [
            'Custom theme development from scratch',
            'Plugin development for extended functionality',
            'WooCommerce integration for e-commerce',
            'Headless WordPress with modern frontends'
        ]
    },
    'lights': {
        title: 'MongoDB & PostgreSQL',
        description: 'Database solutions for storing and managing your data.',
        points: [
            'NoSQL flexibility with MongoDB for unstructured data',
            'PostgreSQL for complex relational data',
            'Database design and optimization',
            'Backup and disaster recovery strategies'
        ]
    },
    'washing': {
        title: 'AWS & Azure Cloud',
        description: 'Cloud infrastructure for scalable and reliable hosting.',
        points: [
            'EC2, S3, and Lambda for AWS deployments',
            'Azure App Service and Functions',
            'Auto-scaling and load balancing',
            'CDN integration for global performance'
        ]
    },
    'headliners': {
        title: 'Docker & Kubernetes',
        description: 'Containerization and orchestration for modern deployments.',
        points: [
            'Docker containerization for consistent environments',
            'Kubernetes orchestration for production workloads',
            'CI/CD pipeline setup with GitHub Actions',
            'Infrastructure as code with Terraform'
        ]
    }
};

const blogDetails = {
    'blog1': {
        title: 'Modern Web Development Trends in 2024',
        category: 'Development',
        image: './assets/images/blog-post-1.jpeg',
        content: `
            <p>The web development landscape is evolving rapidly, with new frameworks, tools, and best practices emerging constantly. At Aithentic, we stay ahead of the curve to deliver cutting-edge solutions to our clients.</p>
            
            <p>We've invested heavily in mastering the latest technologies including React Server Components, Next.js 14, and the new AI-powered development tools that are revolutionizing how we build web applications.</p>
            
            <p>Our developers are trained in modern architectural patterns like JAMstack, microservices, and serverless computing. We understand that different projects require different approaches, and we're equipped to recommend and implement the best solution for your specific needs.</p>
            
            <p>From progressive web apps to headless CMS implementations, our comprehensive approach ensures that your digital presence is built on a solid, future-proof foundation that scales with your business growth.</p>
        `
    },
    'blog2': {
        title: 'Success Stories: E-commerce Transformation',
        category: 'Case Studies',
        image: './assets/images/blog-post-2.jpeg',
        content: `
            <p>Your online store deserves the same level of care and expertise that went into building your business. Our e-commerce solutions are designed to drive sales and enhance customer satisfaction.</p>
            
            <p>From custom shopping experiences to automated inventory management, we offer comprehensive solutions that go beyond basic online catalogs. Our recent projects show an average 150% increase in conversion rates.</p>
            
            <p>Our clients have shared amazing results with our e-commerce platforms. Many report significant improvements in user engagement, reduced cart abandonment, and increased average order values ? all thanks to our data-driven approach to UX design.</p>
            
            <p>We believe that a successful online store is built on continuous optimization. That's why we provide ongoing analytics, A/B testing, and performance monitoring to ensure your store stays competitive in the ever-changing digital marketplace.</p>
        `
    },
    'blog3': {
        title: 'The Future of AI in Web Development',
        category: 'Innovation',
        image: './assets/images/blog-post-3 (2).jpeg',
        content: `
            <p>The tech industry is being transformed by AI, and we're committed to staying at the forefront. Our investment in AI-powered development tools represents our dedication to delivering superior results faster than ever before.</p>
            
            <p>We're currently implementing AI-assisted coding, automated testing, and intelligent user experience personalization. This cutting-edge approach ensures that we can deliver complex projects with higher quality and shorter timelines.</p>
            
            <p>Our development workflow now includes advanced AI tools for code review, bug detection, and performance optimization. From chatbot integrations to predictive analytics, we offer comprehensive AI services for forward-thinking businesses.</p>
            
            <p>As AI continues to revolutionize web development, you can trust that Aithentic will be ready to implement the latest innovations with the highest standards of quality and ethics. The future of web development is intelligent, and we're leading the way.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initialiseSmoothScroll();
    initThirdPartyLibraries();
    setupServiceModal();
    setupBlogModal();
    setupOtherServicesModal();
    setupCounters();
    setupContactForm();
});

function initialiseSmoothScroll() {
    const navbar = document.querySelector('.navbar');
    const offset = navbar ? navbar.offsetHeight : 0;

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const hash = link.getAttribute('href');
            if (!hash || hash === '#' || hash.length <= 1) {
                return;
            }

            const target = document.querySelector(hash);
            if (!target) {
                return;
            }

            event.preventDefault();

            const top = target.getBoundingClientRect().top + window.pageYOffset - (offset + 12);
            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        });
    });
}

function initThirdPartyLibraries() {
    if (window.AOS) {
        AOS.init({
            offset: 140,
            delay: 0,
            duration: 900,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom'
        });
    }

    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
                autoStart: false
            },
            Toolbar: {
                display: ['close']
            },
            dragToClose: false,
            animated: true
        });
    }

    if (typeof gsap !== 'undefined') {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsap.set('[data-hero-title], [data-hero-subtitle], [data-hero-cta] a', {
            opacity: 0,
            y: 60
        });

        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
        heroTimeline
            .to('[data-hero-title]', { opacity: 1, y: 0 })
            .to('[data-hero-subtitle]', { opacity: 1, y: 0 }, '-=0.65')
            .to('[data-hero-cta] a', { opacity: 1, y: 0, stagger: 0.12 }, '-=0.55');

        gsap.utils.toArray('.service-card, .contact-card').forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 40,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%'
                }
            });
        });
    }
}

function setupServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) {
        return;
    }

    const modalTitle = modal.querySelector('[data-modal-title]');
    const modalDescription = modal.querySelector('[data-modal-description]');
    const modalList = modal.querySelector('[data-modal-list]');
    const modalImage = modal.querySelector('[data-modal-image]');
    const closeButtons = modal.querySelectorAll('[data-modal-close]');
    let lastFocusedElement = null;

    modal.setAttribute('aria-hidden', 'true');

    const renderModal = (service) => {
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;
        modalImage.src = service.image;
        modalImage.alt = service.title;

        modalList.innerHTML = '';
        service.points.forEach((point) => {
            const item = document.createElement('li');
            item.textContent = point;
            modalList.appendChild(item);
        });
    };

    const openModal = (key) => {
        const service = serviceDetails[key];
        if (!service) {
            return;
        }

        renderModal(service);
        lastFocusedElement = document.activeElement;
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        const closeButton = modal.querySelector('.service-modal__close');
        window.requestAnimationFrame(() => {
            closeButton?.focus({ preventScroll: true });
        });
    };

    const closeModal = () => {
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus({ preventScroll: true });
        }
    };

    document.querySelectorAll('[data-service-key]').forEach((card) => {
        card.addEventListener('click', () => {
            openModal(card.dataset.serviceKey);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', (event) => {
        if (event.target?.dataset?.modalClose !== undefined) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });
}

function setupBlogModal() {
    const modal = document.getElementById('blogModal');
    if (!modal) {
        return;
    }

    const modalTitle = modal.querySelector('[data-blog-title]');
    const modalCategory = modal.querySelector('[data-blog-category]');
    const modalContent = modal.querySelector('[data-blog-content]');
    const modalImage = modal.querySelector('[data-blog-image]');
    const closeButtons = modal.querySelectorAll('[data-blog-modal-close]');
    let lastFocusedElement = null;

    modal.setAttribute('aria-hidden', 'true');

    const renderBlogModal = (blog) => {
        modalTitle.textContent = blog.title;
        modalCategory.textContent = blog.category;
        modalContent.innerHTML = blog.content;
        modalImage.src = blog.image;
        modalImage.alt = blog.title;
    };

    const openBlogModal = (key) => {
        const blog = blogDetails[key];
        if (!blog) {
            return;
        }

        renderBlogModal(blog);
        lastFocusedElement = document.activeElement;
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        const closeButton = modal.querySelector('.blog-modal__close');
        window.requestAnimationFrame(() => {
            closeButton?.focus({ preventScroll: true });
        });
    };

    const closeBlogModal = () => {
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus({ preventScroll: true });
        }
    };

    document.querySelectorAll('[data-blog-key]').forEach((card) => {
        card.addEventListener('click', () => {
            openBlogModal(card.dataset.blogKey);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeBlogModal);
    });

    modal.addEventListener('click', (event) => {
        if (event.target?.dataset?.blogModalClose !== undefined) {
            closeBlogModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeBlogModal();
        }
    });
}

function setupOtherServicesModal() {
    const modal = document.getElementById('otherServiceModal');
    if (!modal) {
        return;
    }

    const modalTitle = modal.querySelector('[data-other-modal-title]');
    const modalDescription = modal.querySelector('[data-other-modal-description]');
    const modalList = modal.querySelector('[data-other-modal-list]');
    const closeButtons = modal.querySelectorAll('[data-other-modal-close]');
    let lastFocusedElement = null;

    modal.setAttribute('aria-hidden', 'true');

    const renderModal = (service) => {
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;

        modalList.innerHTML = '';
        service.points.forEach((point) => {
            const item = document.createElement('li');
            item.textContent = point;
            modalList.appendChild(item);
        });
    };

    const openModal = (key) => {
        const service = otherServicesDetails[key];
        if (!service) {
            return;
        }

        renderModal(service);
        lastFocusedElement = document.activeElement;
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        const closeButton = modal.querySelector('.service-modal__close');
        window.requestAnimationFrame(() => {
            closeButton?.focus({ preventScroll: true });
        });
    };

    const closeModal = () => {
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus({ preventScroll: true });
        }
    };

    document.querySelectorAll('[data-other-service]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(link.dataset.otherService);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', (event) => {
        if (event.target?.dataset?.otherModalClose !== undefined) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });
}

function setupCounters() {
    const counterCards = document.querySelectorAll('.counter-card');
    if (!counterCards.length) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target.querySelector('[data-counter-target]');
            if (!counter || counter.dataset.counterStarted === 'true') {
                return;
            }

            counter.dataset.counterStarted = 'true';
            startCounterLoop(counter);
        });
    }, { threshold: 0.4 });

    counterCards.forEach((card) => observer.observe(card));
}

function startCounterLoop(counterEl) {
    const target = Number(counterEl.dataset.counterTarget || 0);
    const suffix = counterEl.dataset.counterSuffix || '';
    const duration = Number(counterEl.dataset.counterDuration || 2000);
    const loopDelay = Number(counterEl.dataset.counterDelay || 2200);

    const animate = () => {
        const startTime = performance.now();

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const currentValue = Math.floor(progress * target);
            counterEl.textContent = `${numberFormatter.format(currentValue)}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setTimeout(animate, loopDelay);
            }
        };

        counterEl.textContent = `0${suffix}`;
        requestAnimationFrame(step);
    };

    animate();
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            firstName: (formData.get('firstName') || '').trim(),
            lastName: (formData.get('lastName') || '').trim(),
            email: (formData.get('email') || '').trim(),
            phone: (formData.get('phone') || '').trim(),
            subject: (formData.get('subject') || '').trim(),
            message: (formData.get('message') || '').trim()
        };

        if (Object.values(data).some((value) => !value)) {
            showAlert({
                icon: 'warning',
                title: 'Missing information',
                text: 'Please fill in all the fields before submitting.'
            });
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            showAlert({
                icon: 'error',
                title: 'Invalid email',
                text: 'Please enter a valid email address so we can get back to you.'
            });
            return;
        }

        const phonePattern = /^[0-9+\-()\s]{7,}$/;
        if (!phonePattern.test(data.phone)) {
            showAlert({
                icon: 'error',
                title: 'Invalid phone number',
                text: 'Please provide a reachable phone number with at least seven digits.'
            });
            return;
        }

        const submissionText = buildSubmissionText(data);
        
        // Auto-save submission to backend (text file)
        saveToBackend(submissionText);

        showAlert({
            icon: 'success',
            title: 'Submitted!',
            text: 'Your message has been submitted successfully. We will get back to you soon!',
            confirmButtonText: 'OK'
        }).then(() => {
            form.reset();
        });
    });
}

function buildSubmissionText(data) {
    const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata'
    });

    return [
        '--- Aithentic Contact Submission ---',
        `Timestamp: ${timestamp}`,
        `Name: ${data.firstName} ${data.lastName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Subject: ${data.subject}`,
        'Message:',
        data.message,
        '',
        '---------------------------------------------'
    ].join('\n');
}

function saveToBackend(content) {
    // Auto-save to backend
    const timestamp = Date.now();
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact-submission-${timestamp}.txt`;
    
    // Silently download in background
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 100);
}

function showAlert(options) {
    if (typeof Swal !== 'undefined') {
        return Swal.fire({
            confirmButtonColor: '#44d125',
            ...options
        });
    }

    if (options?.text || options?.title) {
        alert(options.text || options.title);
    }

    return Promise.resolve();
}

