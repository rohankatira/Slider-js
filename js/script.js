let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide_item ');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Optional: Auto slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);

console.log(changeSlide);
