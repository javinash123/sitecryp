// Document Ready
$(document).ready(function() {
    initializeCounters();
    initializeNavbar();
    initializeScrollAnimations();
});

// Counter Animation
function initializeCounters() {
    let countersInitialized = false;
    
    $(window).on('scroll', function() {
        if (!countersInitialized && isElementInViewport($('.counter').first())) {
            $('.counter').each(function() {
                const target = parseInt($(this).data('target'));
                animateCounter($(this), target);
            });
            countersInitialized = true;
        }
    });
}

function animateCounter($element, target) {
    const duration = 2000;
    const increment = target / (duration / 50);
    let current = 0;
    
    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        $element.text(Math.floor(current));
    }, 50);
}

// Navbar Background on Scroll
function initializeNavbar() {
    const $navbar = $('#mainNavbar');
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $navbar.addClass('shadow-sm');
        } else {
            $navbar.removeClass('shadow-sm');
        }
    });
}

// Check if element is in viewport
function isElementInViewport(el) {
    if (el.length === 0) return false;
    const rect = el[0].getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Scroll Animations
function initializeScrollAnimations() {
    const $animatedElements = $('.card, .feature-icon');
    
    $(window).on('scroll', function() {
        $animatedElements.each(function() {
            if (isElementInViewport($(this))) {
                $(this).addClass('animate');
            }
        });
    });
}

// Form Validation
function validateForm(formId) {
    const form = $(`#${formId}`);
    let isValid = true;
    
    form.find('[required]').each(function() {
        if ($(this).val().trim() === '') {
            $(this).addClass('is-invalid');
            isValid = false;
        } else {
            $(this).removeClass('is-invalid');
        }
    });
    
    return isValid;
}

// Form Submission
$(document).on('submit', 'form', function(e) {
    e.preventDefault();
    
    if (validateForm($(this).attr('id'))) {
        // Show success message
        showAlert('Message sent successfully!', 'success');
        this.reset();
    } else {
        showAlert('Please fill in all required fields.', 'danger');
    }
});

// Alert Function
function showAlert(message, type = 'info') {
    const alert = $(`
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `);
    
    $('body').prepend(alert);
    
    setTimeout(function() {
        alert.fadeOut(function() {
            $(this).remove();
        });
    }, 5000);
}

// Smooth Scroll for Anchor Links
$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
});

// Modal Handling
$('#demoModal').on('shown.bs.modal', function() {
    // Play video on modal open
    const iframe = $(this).find('iframe')[0];
    if (iframe) {
        iframe.src += '?autoplay=1';
    }
});

$('#demoModal').on('hidden.bs.modal', function() {
    // Stop video on modal close
    const iframe = $(this).find('iframe')[0];
    if (iframe) {
        iframe.src = iframe.src.replace('?autoplay=1', '');
    }
});

// Throttle function for performance
function throttle(func, wait) {
    let timeout = null;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
    };
}

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}