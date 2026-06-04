// Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // If it's a skill card, trigger progress bars
            if (entry.target.classList.contains('skill-card')) {
                const bars = entry.target.querySelectorAll('.skill-progress');
                bars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }
        }
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealObserver.observe(reveal);
});

// Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Modal Logic
function openModal(imgSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = imgSrc;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Form Submission (Placeholder)
// EmailJS Contact Form

emailjs.init("z7tUVPfs0CvMhSzkK");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = contactForm.querySelector("button");

    button.innerText = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "service_7yy40na",
        "template_hqlfcbr",
        this
    )
    .then(() => {

        alert("Message sent successfully!");

        contactForm.reset();

        button.innerText = "Send Message";
        button.disabled = false;

    })
    .catch((error) => {

        console.error(error);

        alert("Failed to send message. Please try again.");

        button.innerText = "Send Message";
        button.disabled = false;
    });

});

// Back to Top Button logic could be added here
// Smooth scroll for internal links is handled by browser defaults in modern CSS, but can be reinforced here
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
