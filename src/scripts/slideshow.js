const slideshowImages = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    // Add more image paths as needed
];

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slideshow-image');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideshowImages.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideshowImages.length) % slideshowImages.length;
    showSlide(currentIndex);
}

function initSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.classList.add('slideshow-image');
        slideshowContainer.appendChild(imgElement);
    });
    showSlide(currentIndex);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

document.addEventListener('DOMContentLoaded', initSlideshow);