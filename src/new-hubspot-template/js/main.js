// KI-Transformation Premium HubSpot Template JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add active class to navigation on scroll
  window.addEventListener('scroll', function() {
    const navigation = document.querySelector('.navigation');
    if (window.scrollY > 50) {
      navigation.classList.add('scrolled');
    } else {
      navigation.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle (if needed)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('details');
  
  faqItems.forEach(item => {
    item.addEventListener('toggle', function() {
      if (this.open) {
        // Close other open items
        faqItems.forEach(otherItem => {
          if (otherItem !== this && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });
  
  // Card hover animations
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Form submission tracking (if needed)
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Add form submission tracking here
      console.log('Form submitted:', form);
    });
  });
  
  // Button click animations
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Dynamic year in copyright
  const currentYear = new Date().getFullYear();
  const copyrightElements = document.querySelectorAll('[data-year]');
  
  copyrightElements.forEach(element => {
    element.textContent = element.textContent.replace(/\d{4}/, currentYear);
  });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .navigation.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    transform: scale(0);
    animation: ripple 0.6s linear;
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  section {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      padding: 1rem;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    }
    
    .nav-menu.active {
      transform: translateY(0);
    }
    
    .mobile-menu-btn {
      display: block;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;
document.head.appendChild(style);