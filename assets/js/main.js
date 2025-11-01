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

const blogDetails = {
    'blog-1': {
        title: 'Inside Our Design Process',
        category: 'Design',
        image: './assets/images/blog-post-1.jpeg',
        description: 'Take a behind-the-scenes look at how we create authentic, user-centered designs that showcase your products beautifully.',
        content: '<p>Our design process represents the pinnacle of web design excellence. Every website we create undergoes rigorous planning and design procedures to ensure optimal user experience and visual appeal.</p><p>We utilize modern design tools and follow industry best practices, ensuring that every design meets or exceeds client expectations and industry standards.</p>'
    },
    'blog-2': {
        title: 'Best Practices for Product Showcase Websites',
        category: 'Tips',
        image: './assets/images/blog-post-2.jpeg',
        description: 'From responsive layouts to compelling visuals, learn how to create websites that effectively showcase your products and drive conversions.',
        content: '<p>Discover the secrets behind creating effective product showcase websites. Learn how to present your products in ways that captivate visitors and encourage them to take action.</p><p>From high-quality imagery to clear call-to-actions, we explore comprehensive strategies that help your products stand out online.</p>'
    },
    'blog-3': {
        title: 'The Future of Web Design',
        category: 'Insights',
        image: './assets/images/blog-post-3 (2).jpeg',
        description: 'We\'re investing in emerging technologies and design trends to future-proof your digital presence.',
        content: '<p>As web design continues to evolve, we\'re preparing for the future. Our investment in new technologies and design trends ensures we can create websites that stand the test of time.</p><p>Our team stays updated with the latest design tools, frameworks, and methodologies to deliver cutting-edge solutions that keep your website ahead of the curve.</p>'
    }
};

const otherServicesDetails = {
    'windshield': {
        title: 'Windshield and All Glass Polishing',
        description: 'Restore clarity and visibility to your vehicle\'s glass surfaces with our professional polishing services.',
        details: 'We use specialized compounds and techniques to remove scratches, water spots, and oxidation from windshields, side windows, and rear glass, restoring them to like-new condition.'
    },
    'seat-covers': {
        title: 'Seat Covers and Door Pad Leather Upholstery',
        description: 'Custom leather upholstery solutions that enhance comfort and style.',
        details: 'Premium leather seat covers and door pad upholstery tailored to your vehicle\'s interior. Available in various colors and finishes to match your preferences.'
    },
    'anti-rust': {
        title: 'Under-body Anti-rust Coatings',
        description: 'Protect your vehicle\'s chassis from corrosion with our specialized anti-rust treatments.',
        details: 'Comprehensive under-body protection using advanced rust-prevention coatings that shield critical components from moisture, salt, and environmental damage.'
    },
    'steering-gear': {
        title: 'Steering, Gear Knob and Gear Bellow Covers',
        description: 'Custom covers that add comfort and style to your vehicle\'s interior controls.',
        details: 'Premium leather and fabric covers for steering wheels, gear knobs, and gear bellows, available in various styles and colors to personalize your driving experience.'
    },
    'mats': {
        title: '7D Mats with Custom Stitchings',
        description: 'Custom-fit floor mats that protect your vehicle\'s interior while adding a touch of elegance.',
        details: 'Premium 7D floor mats with custom stitching options, perfect fit for your vehicle model, and superior protection against wear and stains.'
    },
    'headlight': {
        title: 'Headlight and Taillight Restorations',
        description: 'Restore clarity and brightness to your vehicle\'s lighting systems.',
        details: 'Professional restoration services that remove yellowing, hazing, and oxidation from headlights and taillights, improving visibility and appearance.'
    },
    'washing': {
        title: 'Body Washing and Vacuuming',
        description: 'Comprehensive cleaning services to keep your vehicle looking its best.',
        details: 'Thorough exterior washing and interior vacuuming services using premium products and techniques to maintain your vehicle\'s pristine condition.'
    },
    'headliners': {
        title: 'Headliners Replacement',
        description: 'Professional headliner replacement and repair services.',
        details: 'Expert replacement of sagging or damaged headliners with premium materials, ensuring a perfect fit and factory-quality finish.'
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
    setupBlogModal();
    setupOtherServicesModal();
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

        // Save to backend
        saveToBackend(submissionText).then(() => {
            showAlert({
                icon: 'success',
                title: 'Submitted!',
                text: 'Your message has been submitted successfully. We will get back to you soon.',
                confirmButtonText: 'OK'
            });
            form.reset();
        }).catch((error) => {
            showAlert({
                icon: 'error',
                title: 'Submission failed',
                text: 'There was an error submitting your message. Please try again later.'
            });
            console.error('Submission error:', error);
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
async function saveToBackend(content) {
    try {
        const response = await fetch('/api/save-contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content })
        });

        if (!response.ok) {
            throw new Error('Failed to save contact submission');
        }

        return await response.json();
    } catch (error) {
        // Fallback: Save to local file if backend is not available
        console.warn('Backend not available, using fallback:', error);
        
        // For development/testing, save to localStorage
        try {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push({
                content: content,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            return { success: true, message: 'Saved locally (backend unavailable)' };
        } catch (localError) {
            throw error;
        }
    }
}

function downloadTextFile(filename, content) {
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

function setupBlogModal() {
    const modal = document.getElementById('blogModal');
    if (!modal) {
        return;
    }

    const modalTitle = modal.querySelector('[data-blog-modal-title]');
    const modalDescription = modal.querySelector('[data-blog-modal-description]');
    const modalContent = modal.querySelector('[data-blog-modal-content]');
    const modalImage = modal.querySelector('[data-blog-modal-image]');
    const modalCategory = modal.querySelector('[data-blog-modal-category]');
    const closeButtons = modal.querySelectorAll('[data-blog-modal-close]');
    let lastFocusedElement = null;

    modal.setAttribute('aria-hidden', 'true');

    const renderModal = (blog) => {
        modalTitle.textContent = blog.title;
        modalDescription.textContent = blog.description;
        modalContent.innerHTML = blog.content;
        modalImage.src = blog.image;
        modalImage.alt = blog.title;
        modalCategory.textContent = blog.category;
    };

    const openModal = (key) => {
        const blog = blogDetails[key];
        if (!blog) {
            return;
        }

        renderModal(blog);
        lastFocusedElement = document.activeElement;
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        const closeButton = modal.querySelector('.blog-modal__close');
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

    document.querySelectorAll('[data-blog-key]').forEach((card) => {
        card.addEventListener('click', () => {
            openModal(card.dataset.blogKey);
        });
    });

    document.querySelectorAll('[data-blog-link]').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const card = link.closest('[data-blog-key]');
            if (card) {
                openModal(card.dataset.blogKey);
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', (event) => {
        if (event.target?.dataset?.blogModalClose !== undefined) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });
}

function setupOtherServicesModal() {
    // Create modal HTML if it doesn't exist
    let modal = document.getElementById('otherServicesModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'otherServicesModal';
        modal.className = 'service-modal';
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = `
            <div class="service-modal__backdrop" data-other-services-close></div>
            <div class="service-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="otherServicesModalTitle">
                <button class="service-modal__close" type="button" data-other-services-close
                    aria-label="Close service details">
                    <i class="ri-close-line"></i>
                </button>
                <div class="service-modal__body">
                    <div class="service-modal__text">
                        <h3 id="otherServicesModalTitle" data-other-services-title></h3>
                        <p data-other-services-description></p>
                        <p data-other-services-details></p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const modalTitle = modal.querySelector('[data-other-services-title]');
    const modalDescription = modal.querySelector('[data-other-services-description]');
    const modalDetails = modal.querySelector('[data-other-services-details]');
    const closeButtons = modal.querySelectorAll('[data-other-services-close]');
    let lastFocusedElement = null;

    modal.setAttribute('aria-hidden', 'true');

    const renderModal = (service) => {
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;
        modalDetails.textContent = service.details;
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

    // Map footer links to service keys
    const serviceMapping = {
        'Windshield and all glass polishing': 'windshield',
        'Seat covers and Door pad leather upholstery': 'seat-covers',
        'Under-body anti-rust coatings': 'anti-rust',
        'Steering, Gear knob and Gear bellow covers': 'steering-gear',
        '7D matts with custom stitchings': 'mats',
        'Headlight and taillight restorations': 'headlight',
        'Body Washing and Vacuuming': 'washing',
        'Headliners replacement': 'headliners'
    };

    // Add click handlers to footer links
    document.querySelectorAll('footer ul li a').forEach((link) => {
        const linkText = link.textContent.trim();
        const serviceKey = serviceMapping[linkText];
        
        if (serviceKey) {
            link.style.cursor = 'pointer';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(serviceKey);
            });
        }
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', (event) => {
        if (event.target?.dataset?.otherServicesClose !== undefined) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });
}

