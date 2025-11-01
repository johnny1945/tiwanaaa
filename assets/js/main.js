const numberFormatter = new Intl.NumberFormat('en-IN');

const serviceDetails = {
    'immersive-showcases': {
        title: 'Immersive Product Showcases',
        image: './assets/images/hero-4.jpg',
        description: 'Launch visuals, storytelling, and scroll choreography that communicate product value in record time.',
        points: [
            'Dynamic hero narratives with motion design tailored to your core personas.',
            'Interactive hotspots and feature reveals that invite prospects to explore depth.',
            'Conversion-focused layouts optimised for both desktop walkthroughs and mobile viewings.'
        ]
    },
    'conversion-flows': {
        title: 'Conversion Journey Mapping',
        image: './assets/images/hero-8.jpg',
        description: 'Strategise the moments that move visitors from curiosity to qualified opportunities.',
        points: [
            'Copy frameworks and CTA matrices engineered for demos, trials, and sales calls.',
            'Segment-aware landing paths with behavioural nudges and social proof sequencing.',
            'Experiment-ready layouts that plug into your analytics and marketing automation stack.'
        ]
    },
    'interactive-demos': {
        title: 'Interactive Demo Builder',
        image: './assets/images/hero-9.png',
        description: 'Code-free walkthroughs and sandbox experiences that help teams sell faster.',
        points: [
            'Branching demos that adapt to prospect interests and industry use cases.',
            'CRM integrations so every interaction syncs with sales workflows automatically.',
            'Inline annotation, voiceover, and transcript support for accessibility compliance.'
        ]
    },
    'content-orchestration': {
        title: 'AI Content Orchestration',
        image: './assets/images/blog-post-3 (2).jpeg',
        description: 'Keep messaging consistent across launches with intelligent content operations.',
        points: [
            'Editorial playbooks that generate fresh copy while respecting your brand voice.',
            'Automated localisation, glossary enforcement, and reuse across product lines.',
            'Component libraries that merge design tokens with content patterns for scale.'
        ]
    },
    'growth-analytics': {
        title: 'Growth Intelligence Analytics',
        image: './assets/images/blog-post-2.jpeg',
        description: 'Clarity on what stories, layouts, and interactions generate pipeline impact.',
        points: [
            'Unified dashboards covering acquisition, activation, and advocacy metrics.',
            'Event taxonomies that ensure your experiments are statistically sound.',
            'Automated reports to keep founders, marketers, and investors aligned weekly.'
        ]
    },
    'launch-operations': {
        title: 'Launch Operations Playbooks',
        image: './assets/images/project-5.jpeg',
        description: 'Run predictable, low-stress launches with orchestrated checklists and rituals.',
        points: [
            'Cross-functional workflows spanning brand, content, engineering, and demand gen.',
            'QA suites that protect performance, accessibility, and compliance requirements.',
            'Post-launch retrospectives with actionable insights for continuous optimisation.'
        ]
    }
};

const articleDetails = {
    'launch-blueprint': {
        tag: 'Playbooks',
        title: 'Crafting Launch Blueprints',
        description: 'A behind-the-scenes look at how we converge positioning, copy, and visuals into a conversion-ready launch narrative.',
        points: [
            'Pre-work templates align stakeholders around audience, promise, and proof.',
            'Storyboarding sessions translate product depth into a single compelling arc.',
            'Validation loops confirm the narrative resonates before a single pixel ships.'
        ]
    },
    'interactive-demos': {
        tag: 'Product',
        title: 'Building Interactive Demos that Sell',
        description: 'Ways to replace static explainer videos with guided experiences that keep prospects leaning in.',
        points: [
            'Progressive disclosure keeps complex features approachable without losing precision.',
            'CRM-connected demos empower sales teams with contextual talking points mid-call.',
            'Accessibility-first design ensures demos work beautifully on any device.'
        ]
    },
    'conversion-analytics': {
        tag: 'Insights',
        title: 'Conversion Analytics in Action',
        description: 'Link experiments to pipeline by instrumenting the entire narrative journey.',
        points: [
            'North-star metrics cascade into measurable guardrails for every section.',
            'Real-time dashboards unify marketing, product, and revenue data sources.',
            'Weekly growth councils decide on new tests based on statistically significant learnings.'
        ]
    }
};

const footerServicesDetails = {
    sprint: {
        tag: 'Website Sprints',
        title: 'Launch in 21 Days',
        description: 'Co-create a conversion-focused product site with daily alignment and transparent deliverables.',
        points: [
            'Structured three-week cadence with discovery, build, and optimisation phases.',
            'Dedicated Slack channel and Figma board for rapid feedback loops.',
            'Optional add-ons for sales enablement decks and investor storytelling.'
        ]
    },
    copy: {
        tag: 'Narrative Labs',
        title: 'Positioning & Copy Labs',
        description: 'Clarify your promise across homepage, feature pages, and campaign touchpoints.',
        points: [
            'Audience interviews distilled into messaging hierarchies and tone guardrails.',
            'Frameworks for headlines, taglines, and benefit ladders tuned to persona pain points.',
            'Editorial reviews to keep future updates sharp, on-brand, and SEO aware.'
        ]
    },
    motion: {
        tag: 'Motion Narratives',
        title: 'Product Motion & Micro-interactions',
        description: 'Use motion design and cinematic storytelling to highlight micro-moments of delight.',
        points: [
            'Hero films, launch trailers, and scroll-triggered animations for immersive reveals.',
            'Lightweight Lottie and WebGL experiences optimised for performance.',
            'Documentation for your internal teams to extend the motion language responsibly.'
        ]
    },
    playbooks: {
        tag: 'Growth Ops',
        title: 'Growth Playbooks',
        description: 'Stay ahead with experimentation plans aligned to pipeline and retention goals.',
        points: [
            'Quarterly experimentation roadmaps prioritised by impact and effort.',
            'Test implementation support across landing pages, emails, and in-app surfaces.',
            'Team workshops to embed growth thinking into design and content rituals.'
        ]
    },
    ops: {
        tag: 'DesignOps',
        title: 'DesignOps Enablement',
        description: 'Empower internal teams with systems, tooling, and rituals that keep shipping consistent.',
        points: [
            'Component libraries with tokenised theming and accessibility baked in.',
            'Workflow audits that reduce cycle time from ideation to production.',
            'Training sessions and documentation so teams stay confident post-handover.'
        ]
    },
    other: {
        tag: 'Custom',
        title: 'Other Custom Services',
        description: 'Need something unique? Let?s assemble a bespoke crew around your launch goals.',
        points: [
            'Event microsites and keynote collateral for major announcements.',
            'Investor relations storytelling and data-room experience design.',
            'Product education hubs, help centres, and community onboarding flows.'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initialiseSmoothScroll();
    initThirdPartyLibraries();
    setupServiceModal();
    setupCounters();
    setupContactForm();
    setupArticlePopups();
    setupFooterPopups();
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

        gsap.set('[data-hero-kicker], [data-hero-title], [data-hero-subtitle], [data-hero-cta] a', {
            opacity: 0,
            y: 60
        });

        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
        heroTimeline
            .to('[data-hero-kicker]', { opacity: 1, y: 0 })
            .to('[data-hero-title]', { opacity: 1, y: 0 }, '-=0.75')
            .to('[data-hero-subtitle]', { opacity: 1, y: 0 }, '-=0.6')
            .to('[data-hero-cta] a', { opacity: 1, y: 0, stagger: 0.12 }, '-=0.5');

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

        try {
            setSubmittingState(submitButton, true);
            await sendContactSubmission(data);
            await showAlert({
                icon: 'success',
                title: 'Requirement received!',
                text: 'Thanks for reaching out! Our strategists will review your details and connect within one business day.'
            });
            form.reset();
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Something went wrong while submitting your request.';
            showAlert({
                icon: 'error',
                title: 'Submission failed',
                text: message
            });
        } finally {
            setSubmittingState(submitButton, false);
        }
    });
}

async function sendContactSubmission(data) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        let message = 'We could not save your submission. Please try again in a moment.';
        try {
            const payload = await response.json();
            if (payload?.message) {
                message = payload.message;
            }
        } catch (error) {
            // Ignore JSON parse errors, use fallback message
        }
        throw new Error(message);
    }

    return response.json().catch(() => ({}));
}

function setSubmittingState(button, isSubmitting) {
    if (!button) {
        return;
    }

    if (!button.dataset.originalText) {
        button.dataset.originalText = button.textContent.trim();
    }

    button.disabled = isSubmitting;
    button.classList.toggle('is-loading', isSubmitting);
    button.textContent = isSubmitting ? 'Submitting?' : button.dataset.originalText;
}

function setupArticlePopups() {
    const controller = createInfoModalController('articleModal');
    if (!controller) {
        return;
    }

    controller.bind({
        triggerSelector: '[data-article-key]',
        attribute: 'articleKey',
        contentMap: articleDetails
    });
}

function setupFooterPopups() {
    const controller = createInfoModalController('footerModal');
    if (!controller) {
        return;
    }

    controller.bind({
        triggerSelector: '[data-footer-key]',
        attribute: 'footerKey',
        contentMap: footerServicesDetails
    });
}

function createInfoModalController(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return null;
    }

    const tagEl = modal.querySelector('[data-info-modal-tag]');
    const titleEl = modal.querySelector('[data-info-modal-title]');
    const descriptionEl = modal.querySelector('[data-info-modal-description]');
    const listEl = modal.querySelector('[data-info-modal-list]');
    const closeButtons = modal.querySelectorAll('[data-info-modal-close]');
    const dialog = modal.querySelector('.info-modal__dialog');
    let lastFocusedElement = null;
    let trapFocusHandler = null;

    const openModal = (content, trigger) => {
        if (!content) {
            return;
        }

        if (tagEl) {
            if (content.tag) {
                tagEl.textContent = content.tag;
                tagEl.removeAttribute('hidden');
            } else {
                tagEl.setAttribute('hidden', '');
                tagEl.textContent = '';
            }
        }

        if (titleEl) {
            titleEl.textContent = content.title || '';
        }

        if (descriptionEl) {
            descriptionEl.textContent = content.description || '';
        }

        if (listEl) {
            listEl.innerHTML = '';
            (content.points || []).forEach((point) => {
                const li = document.createElement('li');
                li.textContent = point;
                listEl.appendChild(li);
            });
        }

        lastFocusedElement = trigger instanceof HTMLElement ? trigger : null;

        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        if (trigger) {
            trigger.setAttribute('aria-expanded', 'true');
        }

        const primaryClose = modal.querySelector('[data-info-modal-close]');
        window.requestAnimationFrame(() => {
            primaryClose?.focus({ preventScroll: true });
        });

        trapFocusHandler = (event) => {
            if (!modal.classList.contains('is-visible') || !dialog) {
                return;
            }

            const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
            const focusableElements = Array.from(dialog.querySelectorAll(focusableSelectors))
                .filter((el) => !el.hasAttribute('disabled') && el.getAttribute('tabindex') !== '-1');

            if (!focusableElements.length) {
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.key === 'Tab') {
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        modal.addEventListener('keydown', trapFocusHandler);
    };

    const closeModal = () => {
        if (trapFocusHandler) {
            modal.removeEventListener('keydown', trapFocusHandler);
            trapFocusHandler = null;
        }

        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');

        if (lastFocusedElement) {
            lastFocusedElement.setAttribute('aria-expanded', 'false');
            lastFocusedElement.focus({ preventScroll: true });
        }

        lastFocusedElement = null;
    };

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => closeModal());
    });

    modal.addEventListener('click', (event) => {
        if (event.target?.dataset?.infoModalClose !== undefined || event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });

    return {
        bind({ triggerSelector, attribute, contentMap }) {
            const triggers = document.querySelectorAll(triggerSelector);
            if (!triggers.length) {
                return;
            }

            triggers.forEach((trigger) => {
                const key = trigger.dataset?.[attribute];
                if (!key || !contentMap[key]) {
                    return;
                }

                trigger.setAttribute('role', trigger.tagName.toLowerCase() === 'a' ? 'button' : trigger.getAttribute('role') || 'button');
                trigger.setAttribute('aria-controls', modalId);
                trigger.setAttribute('aria-expanded', 'false');

                trigger.addEventListener('click', (event) => {
                    event.preventDefault();
                    openModal(contentMap[key], trigger);
                });

                trigger.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openModal(contentMap[key], trigger);
                    }
                });
            });
        }
    };
}

function setCurrentYear() {
    const target = document.querySelector('[data-current-year]');
    if (target) {
        target.textContent = new Date().getFullYear();
    }
}

function showAlert(options) {
    if (typeof Swal !== 'undefined') {
        return Swal.fire({
            confirmButtonColor: '#7C3AED',
            ...options
        });
    }

    if (options?.text || options?.title) {
        alert(options.text || options.title);
    }

    return Promise.resolve();
}
