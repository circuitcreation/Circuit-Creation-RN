// Navbar scroll effect
window.addEventListener('scroll', function() {
const container = document.querySelector('.container');
    if (window.scrollY > 10) {
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }
});

// Lightbox: open clicked image in overlay, close on click/outside/Escape
(function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryImages = document.querySelectorAll('.gallery-body img');

    function openLightbox(src, alt) {
        lightboxImage.src = src;
        lightboxImage.alt = alt || '';
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
        lightboxImage.alt = '';
        document.body.style.overflow = '';
    }

    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
        openLightbox(e.currentTarget.src, e.currentTarget.alt);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);

    // Close when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxClose) {
            closeLightbox();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') {
            closeLightbox();
        }
    });
})();