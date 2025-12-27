// SimpleBit JavaScript - jQuery & Vanilla JS
$(document).ready(function() {
  // Navbar scroll effect
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');
    }
  });

  // Mobile menu close on link click
  $('.navbar-nav a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Pricing toggle
  $('#billingToggle').on('change', function() {
    if ($(this).is(':checked')) {
      // Yearly pricing
      $('.price-starter').text('Free');
      $('.price-professional').text('AED 399');
      $('.price-enterprise').text('Custom');
    } else {
      // Monthly pricing
      $('.price-starter').text('Free');
      $('.price-professional').text('AED 499');
      $('.price-enterprise').text('Custom');
    }
  });

  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Accordion animation
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = this.classList.contains('collapsed') ? 'rotate(0)' : 'rotate(180deg)';
      }
    });
  });

  // Smooth scroll to sections
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if(target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 100
      }, 1000);
    }
  });

  // Feature cards animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-chip, .card, .team-card').forEach(el => {
    observer.observe(el);
  });

  // Button hover effects
  $('.btn').on('mouseenter', function() {
    $(this).css('box-shadow', '0 10px 25px rgba(142, 73, 240, 0.15)');
  }).on('mouseleave', function() {
    $(this).css('box-shadow', 'none');
  });

  // Contact form submission
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      company: $('#company').val(),
      purpose: $('#purpose').val(),
      message: $('#message').val()
    };

    // Validation
    if (!formData.name || !formData.email || !formData.company || !formData.purpose || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you! Our team will contact you within 24 hours.');
    this.reset();
  });

  // Pricing card interaction
  $('.pricing-card').on('mouseenter', function() {
    if (!$(this).hasClass('featured')) {
      $(this).css('transform', 'translateY(-4px)');
    }
  }).on('mouseleave', function() {
    if (!$(this).hasClass('featured')) {
      $(this).css('transform', 'translateY(0)');
    }
  });

  // Case study filter (visual effect only)
  $('.filter-btn').on('click', function() {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    
    // You could add filtering logic here
  });

  // Initialize tooltips if needed
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Mobile navigation adjustments
  if ($(window).width() < 768) {
    $('.navbar-toggler').on('click', function() {
      $(this).toggleClass('show');
    });
  }

  // Add loading animation to buttons
  $('.btn').on('click', function() {
    const $btn = $(this);
    if (!$btn.data('original-text')) {
      $btn.data('original-text', $btn.html());
    }
    
    // Only show loading for form submissions
    if ($btn.closest('form').length) {
      $btn.prop('disabled', true);
      $btn.html('<span class="spinner-border spinner-border-sm me-2"></span>Loading...');
      
      setTimeout(() => {
        $btn.prop('disabled', false);
        $btn.html($btn.data('original-text'));
      }, 2000);
    }
  });
});

// Vanilla JS for performance-critical animations
window.addEventListener('load', function() {
  // Animate elements on page load
  const elements = document.querySelectorAll('.hero-section h1, .hero-section .lead, .feature-chip');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      el.style.transition = 'all 0.6s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

// Handle responsive behavior
window.addEventListener('resize', function() {
  if ($(window).width() >= 768) {
    $('.navbar-collapse').removeClass('show');
  }
});