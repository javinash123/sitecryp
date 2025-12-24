// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    if (navbar && navbar.classList.contains('navbar-transparent')) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Rotating text effect for feature badge
    const rotatingText = document.getElementById('rotating-text');
    if (rotatingText) {
        const texts = [
            'New: Apple Pay Integration',
            'Lightning-Fast Settlements',
            'Crypto & Cards Accepted'
        ];
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            rotatingText.style.opacity = '0';
            setTimeout(() => {
                rotatingText.textContent = texts[currentIndex];
                rotatingText.style.opacity = '1';
            }, 300);
        }, 4000);
        
        rotatingText.style.transition = 'opacity 0.3s ease-in-out';
    }

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    let hasStarted = false;
    
    const startCounters = () => {
        if (hasStarted) return;
        hasStarted = true;
        
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    if (counter.classList.contains('decimal') || target % 1 !== 0) {
                        counter.textContent = current.toFixed(1);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (counter.classList.contains('decimal') || target % 1 !== 0) {
                        counter.textContent = target.toFixed(1);
                    } else {
                        counter.textContent = Math.floor(target);
                    }
                }
            };

            updateCounter();
        });
    };

    // Intersection Observer for counters
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu close on link click
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarToggle.click();
            }
        });
    });

    // Update year in footer
    const yearElements = document.querySelectorAll('.year');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    console.log('SimpleBit website loaded successfully!');
});

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    // Validation
    if (!name || !email || !company || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (message.length < 10) {
        alert('Message must be at least 10 characters long');
        return;
    }

    // Show success message
    alert('Thank you! We\'ve received your message. Our team will get back to you shortly.');
    
    // Reset form
    form.reset();
}

// Prevent layout shift on smooth scroll
document.documentElement.style.scrollBehavior = 'smooth';
