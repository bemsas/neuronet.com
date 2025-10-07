// NeuroNet.dev - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = createMobileMenu();
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            toggleMobileMenu();
        });
    }

    // Create mobile menu
    function createMobileMenu() {
        const menu = document.createElement('div');
        menu.className = 'mobile-menu fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-lg z-50 transform translate-x-full transition-transform duration-300';
        menu.innerHTML = `
            <div class="flex justify-between items-center p-6 border-b border-white/10">
                <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <i class="fas fa-brain text-white text-sm"></i>
                    </div>
                    <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        NeuroNet.dev
                    </span>
                </div>
                <button class="close-mobile-menu text-white text-2xl">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <nav class="p-6">
                <div class="space-y-6">
                    <a href="#services" class="block text-xl text-gray-300 hover:text-white transition-colors">Services</a>
                    <a href="#about" class="block text-xl text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="healthcare-ai.html" class="block text-xl text-gray-300 hover:text-white transition-colors">Healthcare AI</a>
                    <a href="pricing.html" class="block text-xl text-gray-300 hover:text-white transition-colors">Pricing</a>
                    <a href="roi-calculator.html" class="block text-xl text-gray-300 hover:text-white transition-colors">ROI Calculator</a>
                    <a href="#contact" class="block text-xl text-gray-300 hover:text-white transition-colors">Contact</a>
                    <a href="https://booking.akiflow.com/andy_king-1e34" target="_blank" rel="noopener noreferrer" class="block w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 mt-8 text-center">
                        Book Free Consultation
                    </a>
                </div>
            </nav>
        `;
        
        document.body.appendChild(menu);
        
        // Close button functionality
        const closeButton = menu.querySelector('.close-mobile-menu');
        closeButton.addEventListener('click', closeMobileMenu);
        
        // Close when clicking on links
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        return menu;
    }

    function toggleMobileMenu() {
        const menu = document.querySelector('.mobile-menu');
        if (menu.classList.contains('translate-x-full')) {
            menu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        } else {
            closeMobileMenu();
        }
    }

    function closeMobileMenu() {
        const menu = document.querySelector('.mobile-menu');
        menu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    }

    // Simplified particle animation - only create a few particles to prevent performance issues
    function createParticles() {
        const heroSection = document.querySelector('section');
        if (!heroSection || window.innerWidth < 768) return; // Skip on mobile

        // Create only 5 particles instead of 20
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
                
                heroSection.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 8000);
            }, i * 800); // Slower creation
        }
    }

    // Start particle animation only once
    createParticles();

    // Simplified navbar scroll effect
    const navbar = document.querySelector('nav');
    
    const handleScroll = throttle(function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('bg-black/40');
            navbar.classList.remove('bg-black/20');
        } else {
            navbar.classList.add('bg-black/20');
            navbar.classList.remove('bg-black/40');
        }
    }, 100); // Increased throttle time to reduce frequency

    window.addEventListener('scroll', handleScroll);

    // Removed problematic parallax effect that was causing continuous scrolling

    // Interactive button effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.group');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Typing effect for hero text (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all service cards
    document.querySelectorAll('.group').forEach(card => {
        observer.observe(card);
    });

    // Performance optimization: Throttle scroll events
    function throttle(func, wait) {
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

    // Preload critical images (if any are added later)
    function preloadImages(imageUrls) {
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    // Disabled cursor trail effect to prevent performance issues and continuous scrolling

    // Add fade-out animation for cursor trail
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fade-out {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(0.5);
            }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    console.log('NeuroNet.dev initialized successfully! 🧠✨');
});