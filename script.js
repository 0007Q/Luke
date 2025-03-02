document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Form submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
    });

    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    function showSlides() {
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            dots[i].classList.remove("active");
        }
        
        // Increment slide index
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        // Show current slide
        slides[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1].classList.add("active");
        
        // Change slide every 5 seconds
        setTimeout(showSlides, 5000);
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            dots[i].classList.remove("active");
        }
        slides[slideIndex].classList.add("active");
        dots[slideIndex].classList.add("active");
    }

    // Initialize the first slide
    slides[0].classList.add("active");
    dots[0].classList.add("active");
    // Start the automatic slideshow
    setTimeout(showSlides, 3000);
}); 