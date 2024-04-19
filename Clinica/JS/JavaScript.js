let currentSlide = 0;
    
function showSlide(index) {
    const carousel = document.getElementById("carousel");
    currentSlide = (index + carousel.childElementCount) % carousel.childElementCount;
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}
    
function prevSlide() {
    showSlide(currentSlide - 1);
}
    
function nextSlide() {
    showSlide(currentSlide + 1);
}