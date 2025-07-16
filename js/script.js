// ===== MOBILE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
});

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.25)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.15)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and animated elements
document.querySelectorAll('.feature-card, .glass-card, .demo-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// ===== PARALLAX EFFECT FOR HERO SECTION =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        const speed = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${speed}px)`;
    }
});

// ===== GLASSMORPHISM HOVER EFFECTS =====
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.35)';
        this.style.borderColor = 'rgba(255, 255, 255, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.25)';
        this.style.borderColor = 'rgba(255, 255, 255, 0.18)';
    });
});

// ===== FORM VALIDATION AND SUBMISSION =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Submit to Formspree (replace with your endpoint)
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showNotification('Thank you! Your message has been sent.', 'success');
                    this.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});

// ===== UTILITY FUNCTIONS =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content glass-panel">
            <p>${message}</p>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        padding: 1rem 1.5rem;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        ${type === 'success' ? 'border-left: 4px solid #4CAF50;' : ''}
        ${type === 'error' ? 'border-left: 4px solid #F44336;' : ''}
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: inherit;
        padding: 0;
        margin: 0;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// ===== LOADING ANIMATIONS =====
window.addEventListener('load', () => {
    // Fade in hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// ===== THEME DETECTION =====
function detectColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
    }
}

// Listen for theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectColorScheme);
}

// Initial theme detection
detectColorScheme();

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Your scroll handler code here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Skip to main content functionality
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Enhanced keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to a logging service here
});

// ===== FEATURE DETECTION =====
function supportsBackdropFilter() {
    return CSS.supports('backdrop-filter', 'blur(1px)') || 
           CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
}

// Fallback for browsers that don't support backdrop-filter
if (!supportsBackdropFilter()) {
    document.documentElement.classList.add('no-backdrop-filter');
    
    // Add fallback styles
    const style = document.createElement('style');
    style.textContent = `
        .no-backdrop-filter .glass-panel,
        .no-backdrop-filter .glass-card,
        .no-backdrop-filter .glass-btn,
        .no-backdrop-filter .glass-nav {
            background: rgba(255, 255, 255, 0.9);
        }
    `;
    document.head.appendChild(style);
}

// ===== LANGUAGE SWITCHER FUNCTIONALITY =====

// Simple language switching using data attributes (similar to Hiei-Blog)
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }
    
    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('memospace-lang') || 'en';
        this.currentLang = savedLang;
        this.applyLanguage(savedLang);
        this.bindEvents();
    }
    
    bindEvents() {
        // Language switcher dropdown
        const langSwitcher = document.querySelector('.language-switcher');
        const langBtn = document.querySelector('.language-btn');
        const langDropdown = document.querySelector('.language-dropdown');

        if (langBtn && langDropdown) {
            langBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                langDropdown.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                langDropdown.classList.remove('show');
            });

            // Prevent dropdown close when clicking inside
            langDropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            // Handle language option clicks
            const langOptions = document.querySelectorAll('.language-option');
            langOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    const selectedLang = option.getAttribute('data-lang');
                    this.setLanguage(selectedLang);
                    langDropdown.classList.remove('show');
                });
            });
        }
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        this.applyLanguage(lang);
        localStorage.setItem('memospace-lang', lang);
    }
    
    applyLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.body.setAttribute('data-lang', lang);
        
        // Update language button text
        const langText = document.querySelector('.lang-text');
        if (langText) {
            const langNames = {
                'en': 'English',
                'zh-TW': '繁體中文',
                'zh-CN': '简体中文'
            };
            langText.textContent = langNames[lang] || 'English';
        }
        
        // Update all elements with data attributes
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = text;
                } else {
                    element.innerHTML = text;
                }
            }
        });
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
    
    // Enhanced glassmorphism hover effects
    const glassElements = document.querySelectorAll('.glass, .feature-card, .team-card');
    glassElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-8px) scale(1.02)';
            element.style.backdropFilter = 'blur(30px) saturate(150%)';
            element.style.boxShadow = '0 32px 64px rgba(0, 0, 0, 0.3), 0 16px 32px rgba(255, 255, 255, 0.1) inset';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0) scale(1)';
            element.style.backdropFilter = 'blur(20px) saturate(120%)';
            element.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(255, 255, 255, 0.1) inset';
        });
    });
});

// ===== ENHANCED GLASSMORPHISM EFFECTS =====

// Particle system for enhanced visual effects
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.init();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'particle-canvas';
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    createParticles() {
        const count = Math.floor((this.canvas.width * this.canvas.height) / 20000);
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system on hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        new ParticleSystem(heroSection);
    }
});
