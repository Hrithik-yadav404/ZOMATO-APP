// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Search input placeholder animation
const searchInput = document.querySelector('input[type="text"]');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.setAttribute('placeholder', 'Type and press Enter...');
    });

    searchInput.addEventListener('blur', () => {
        searchInput.setAttribute('placeholder', 'Search for restaurant, cuisine or a dish');
    });
}

// Alert for the "Explore Restaurants Near You" button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecting to nearby restaurants...');
    });
}

// Sticky header on scroll
const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });
}
