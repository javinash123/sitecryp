$(document).ready(function() {
    // AOS Initialization
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out'
    });

    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#mainNav').addClass('navbar-scrolled shadow-sm bg-white');
            $('#mainNav .nav-brand-text').removeClass('text-white').addClass('text-dark');
            $('#mainNav .nav-link').removeClass('text-white text-white-50').addClass('text-muted');
            $('#mainNav .navbar-toggler').removeClass('text-white').addClass('text-dark');
            // Toggle Dashboard Login button styling
            $('#dashboardBtn').removeClass('btn-dashboard-nav').addClass('btn-dashboard-nav');
        } else {
            $('#mainNav').removeClass('navbar-scrolled shadow-sm bg-white');
            $('#mainNav .nav-brand-text').removeClass('text-dark').addClass('text-white');
            $('#mainNav .nav-link').removeClass('text-muted').addClass('text-white-50');
            $('#mainNav .nav-link.active').addClass('text-white');
            $('#mainNav .navbar-toggler').removeClass('text-dark').addClass('text-white');
            // Ensure Dashboard Login button is styled correctly for transparent header
            $('#dashboardBtn').addClass('btn-dashboard-nav');
        }
    });

    // Counter animation
    const counters = $('.counter');
    const speed = 200;

    const startCounters = () => {
        counters.each(function() {
            const $this = $(this);
            const target = +$this.attr('data-target');
            const count = 0;
            const inc = target / speed;

            const updateCount = () => {
                const current = +$this.text();
                if (current < target) {
                    $this.text(Math.ceil(current + inc));
                    setTimeout(updateCount, 1);
                } else {
                    $this.text(target);
                }
            };
            updateCount();
        });
    };

    // Simple Intersection Observer for Counters
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (counters.length > 0) {
        observer.observe(counters[0]);
    }
});