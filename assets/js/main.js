const numberFormatter = new Intl.NumberFormat('en-IN');

const serviceDetails = {
    narrative: {
        title: 'Product Narrative Strategy',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
        description: 'Translate roadmap milestones into a persuasive story buyers and investors instantly grasp.',
        points: [
            'Positioning sprints to sharpen ICPs, differentiators, and proof.',
            'Narrative hierarchy that anchors your hero, feature, and proof modules.',
            'Messaging kits for sales, founders, and success teams to stay aligned.'
        ]
    },
    'web-experience': {
        title: 'Conversion-Ready Websites',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
        description: 'Modular launchpads engineered for high intent visitors, investors, and partners.',
        points: [
            'Component libraries with flexible layouts for rapid iteration.',
            'Micro-interactions and scroll choreography without sacrificing performance.',
            'CMS-ready handoff with content guidelines and governance playbooks.'
        ]
    },
    interactive: {
        title: 'Interactive Demo Systems',
        image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f77b?auto=format&fit=crop&w=900&q=80',
        description: 'Self-serve walkthroughs and sandbox experiences that spotlight product value quickly.',
        points: [
            'Scenario-based paths tailored for different buyer personas.',
            'No-code update kits so PMMs can refresh flows without engineering.',
            'Analytics hooks to see where prospects pause, skip, or convert.'
        ]
    },
    launch: {
        title: 'Launch Campaign Ops',
        image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80',
        description: 'Rituals, assets, and automations that keep your launch timeline organised and predictable.',
        points: [
            'Channel playbooks covering email, paid, community, and PR activations.',
            'Stakeholder dashboards that surface blockers before they derail momentum.',
            'Post-launch retros with experiment backlogs for the next sprint.'
        ]
    },
    visuals: {
        title: 'Visual Identity & Motion',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
        description: 'Systems, art direction, and motion that make your product instantly recognisable.',
        points: [
            'Logo refreshers, colour harmonies, and typography stacks built for digital-first brands.',
            'UI kits and illustration styles adaptable across web, product, and pitch decks.',
            'Launch-specific motion libraries optimised for web performance.'
        ]
    },
    experiments: {
        title: 'Growth Experiment Toolkit',
        image: 'https://images.unsplash.com/photo-1517142874080-5a3d0c197ae8?auto=format&fit=crop&w=900&q=80',
        description: 'Keep marketing teams shipping learnings weekly with ready-to-run experiments.',
        points: [
            'Prioritised testing roadmap mapped to your funnel health goals.',
            'Creative variants and scripts to speed up production cycles.',
            'Reporting templates that translate data into next-step decisions.'
        ]
    }
};

const blogDetails = {
    'design-systems': {
        title: 'Scaling Design Systems Without Slowing Launches',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'Lessons from building composable marketing systems for fast-moving SaaS teams.',
        highlights: [
            'Audit the product journey before choosing design tokens to scale.',
            'Create story-led modules that marketing can remix without breaking brand.',
            'Ship a governance guide that explains when to evolve or retire components.'
        ]
    },
    'conversion-audit': {
        title: 'The Conversion Audit We Run Before Every Launch',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'Seven critical signals we evaluate to derisk product launches.',
        highlights: [
            'Interrogate differentiation: does every section prove value with evidence?',
            'Stress-test mobile: one-touch proof, frictionless CTAs, and device-specific assets.',
            'Review follow-up paths to ensure sales enablement and success teams stay in sync.'
        ]
    },
    'launch-ops': {
        title: 'How We Run Launch Ops in Two Week Sprints',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'Inside the rituals that keep distributed teams aligned during high-stakes releases.',
        highlights: [
            'Kick off with a narrative brief everyone can reference asynchronously.',
            'Run twice-weekly standups anchored on blockers, metrics, and decisions.',
            'Close loops with retros that document learnings and roll them into the next sprint.'
        ]
    }
};

const footerServiceDetails = {
    'ux-retainer': {
        title: 'UX Research Retainers',
        description: 'Stay in tune with your users through continuous discovery partnerships.',
        points: [
            'Foundational studies every quarter to refresh customer personas.',
            'Rapid usability interviews embedded into your feature release cadence.',
            'Monthly insight reports that translate findings into product and marketing actions.'
        ]
    },
    'sales-enablement': {
        title: 'Sales Enablement Kits',
        description: 'Arm GTM teams with narratives, decks, and proofs that map to every objection.',
        points: [
            'Persona-specific pitch sequences and demo dialogue trees.',
            'Battlecards updated with competitor intel and pricing guidance.',
            'Notion-based resource hubs so reps can self-serve the latest collateral.'
        ]
    },
    'video-sprints': {
        title: 'Launch Video Sprints',
        description: 'Ship motion explainers and teaser loops in under three weeks.',
        points: [
            'Storyboard and scriptwriting aligned with your product narrative.',
            'Illustration, animation, and sound design handled end-to-end.',
            'Optimised exports for social, product, and investor touchpoints.'
        ]
    },
    'brand-audit': {
        title: 'Brand & Messaging Audits',
        description: 'Find alignment gaps across your customer journey before they impact trust.',
        points: [
            'Deep dives into tone, visual language, and proof across key assets.',
            'Recommendations prioritised by effort, impact, and owner.',
            'Workshop to align stakeholders on the refreshed direction.'
        ]
    },
    'cms-ops': {
        title: 'Headless CMS Ops',
        description: 'Content infrastructure that empowers teams to publish confidently.',
        points: [
            'Technical architecture setup with roles, workflows, and QA safeguards.',
            'Component-driven content models for consistency and speed.',
            'Documentation and training for marketers, founders, and product teams.'
        ]
    },
    analytics: {
        title: 'Analytics & Attribution Setup',
        description: 'Measure what matters from day one of your launch.',
        points: [
            'Implement event tracking across web, product, and marketing automations.',
            'Dashboards focused on pipeline impact, not vanity metrics.',
            'Enable cohort-based reporting to inform experimentation roadmaps.'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initialiseSmoothScroll();
    initThirdPartyLibraries();
    setupServiceModal();
    setupCounters();
    setupContactForm();
    setupBlogModal();
    setupFooterServiceModal();
    setCurrentYear();
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

    const submitButton = form.querySelector('button[type="submit"]');

    const setSubmittingState = (isSubmitting) => {
        if (!submitButton) {
            return;
        }

        submitButton.disabled = isSubmitting;
        submitButton.dataset.originalText = submitButton.dataset.originalText || submitButton.innerHTML;
        submitButton.innerHTML = isSubmitting ? '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...' : submitButton.dataset.originalText;
    };

    form.addEventListener('submit', async (event) => {
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
            await showAlert({
                icon: 'warning',
                title: 'Missing information',
                text: 'Please fill in all the fields before submitting.'
            });
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            await showAlert({
                icon: 'error',
                title: 'Invalid email',
                text: 'Please enter a valid email address so we can get back to you.'
            });
            return;
        }

        const phonePattern = /^[0-9+\-()\s]{7,}$/;
        if (!phonePattern.test(data.phone)) {
            await showAlert({
                icon: 'error',
                title: 'Invalid phone number',
                text: 'Please provide a reachable phone number with at least seven digits.'
            });
            return;
        }

        try {
            setSubmittingState(true);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const payload = await parseJsonResponse(response);

            if (!response.ok) {
                throw new Error(payload?.message || 'Unable to submit your message right now. Please try again.');
            }

            await showAlert({
                icon: 'success',
                title: 'Message received!',
                text: payload?.message || "Thanks for reaching out. We'll get back to you within one business day."
            });

            form.reset();
        } catch (error) {
            await showAlert({
                icon: 'error',
                title: 'Submission failed',
                text: error.message || 'We hit a snag while saving your details. Please try again shortly.'
            });
        } finally {
            setSubmittingState(false);
        }
    });
}

async function parseJsonResponse(response) {
    try {
        return await response.clone().json();
    } catch (error) {
        console.warn('Unable to parse JSON response', error);
        return null;
    }
}

function setCurrentYear() {
    const yearPlaceholder = document.getElementById('currentYear');
    if (yearPlaceholder) {
        yearPlaceholder.textContent = new Date().getFullYear();
    }
}

function setupBlogModal() {
    const modal = document.getElementById('blogModal');
    if (!modal) {
        return;
    }

    const modalTitle = modal.querySelector('[data-blog-modal-title]');
    const modalExcerpt = modal.querySelector('[data-blog-modal-excerpt]');
    const modalImage = modal.querySelector('[data-blog-modal-image]');
    const modalList = modal.querySelector('[data-blog-modal-list]');
    const closeButtons = modal.querySelectorAll('[data-blog-modal-close]');
    let lastFocusedElement = null;

    const renderModal = (article) => {
        modalTitle.textContent = article.title;
        modalExcerpt.textContent = article.excerpt;
        modalImage.src = article.image;
        modalImage.alt = article.title;

        modalList.innerHTML = '';
        article.highlights.forEach((point) => {
            const li = document.createElement('li');
            li.textContent = point;
            modalList.appendChild(li);
        });
    };

    const openModal = (key) => {
        const article = blogDetails[key];
        if (!article) {
            return;
        }

        renderModal(article);
        lastFocusedElement = document.activeElement;
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        const closeButton = modal.querySelector('.blog-modal__close');
        closeButton?.focus({ preventScroll: true });
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
        const key = card.dataset.blogKey;

        const handleActivation = (event) => {
            if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) {
                return;
            }

            event.preventDefault();
            openModal(key);
        };

        card.addEventListener('click', handleActivation);
        card.addEventListener('keydown', handleActivation);
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

function setupFooterServiceModal() {
    const modal = document.getElementById('footerServiceModal');
    if (!modal) {
        return;
    }

    const modalTitle = modal.querySelector('[data-footer-modal-title]');
    const modalDescription = modal.querySelector('[data-footer-modal-description]');
    const modalList = modal.querySelector('[data-footer-modal-list]');
    const closeButtons = modal.querySelectorAll('[data-footer-modal-close]');
    let lastFocusedElement = null;

    const populateModal = (service) => {
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;

        modalList.innerHTML = '';
        service.points.forEach((point) => {
            const li = document.createElement('li');
            li.textContent = point;
            modalList.appendChild(li);
        });
    };

    const openModal = (key) => {
        const details = footerServiceDetails[key];
        if (!details) {
            return;
        }

        populateModal(details);
        lastFocusedElement = document.activeElement;
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        const closeButton = modal.querySelector('.footer-service-modal__close');
        closeButton?.focus({ preventScroll: true });
    };

    const closeModal = () => {
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus({ preventScroll: true });
        }
    };

    document.querySelectorAll('[data-footer-service-key]').forEach((trigger) => {
        trigger.addEventListener('click', () => openModal(trigger.dataset.footerServiceKey));
        trigger.addEventListener('keydown', (event) => {
            if (['Enter', ' '].includes(event.key)) {
                event.preventDefault();
                openModal(trigger.dataset.footerServiceKey);
            }
        });
    });

    closeButtons.forEach((button) => button.addEventListener('click', closeModal));

    modal.addEventListener('click', (event) => {
        if (event.target?.dataset?.footerModalClose !== undefined) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });
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

