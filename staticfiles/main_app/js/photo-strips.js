document.addEventListener('DOMContentLoaded', function() {
    const strips = document.querySelectorAll('.photo-strip');
    
    strips.forEach(strip => {
        // Clone the images to create a seamless loop
        const images = strip.innerHTML;
        strip.innerHTML = images + images;

        let isScrolling = false;
        let start;

        function step(timestamp) {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            if (!isScrolling) {
                // If we're not mid-scroll, move forward
                strip.scrollLeft += 1;
            }

            // Check if we've scrolled past half the content (original set of images)
            if (strip.scrollLeft >= strip.scrollWidth / 2) {
                // Reset to the start of the cloned set
                strip.scrollLeft = 0;
                start = timestamp;
            }

            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);

        // Pause scrolling when mouse enters the strip
        strip.addEventListener('mouseenter', () => {
            isScrolling = true;
        });

        // Resume scrolling when mouse leaves the strip
        strip.addEventListener('mouseleave', () => {
            isScrolling = false;
        });
    });

    // Lightbox functionality (unchanged)
    const photos = document.querySelectorAll('.strip-photo');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    photos.forEach(photo => {
        photo.addEventListener('click', e => {
            e.preventDefault();
            const img = document.createElement('img');
            img.src = photo.src;
            
            const close = document.createElement('span');
            close.className = 'lightbox-close';
            close.innerHTML = '&times;';
            close.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });

            lightbox.innerHTML = '';
            lightbox.appendChild(img);
            lightbox.appendChild(close);
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});




