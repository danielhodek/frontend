function setupCarousel(carousel) {
  let slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
  const prevButton = carousel.querySelector('.carousel__btn-prev');
  const nextButton = carousel.querySelector('.carousel__btn-next');
  let width, prevSlide, nextSlide;
  let currentSlide = slides[0];

  currentSlide.classList.add('active');
  prevButton.addEventListener('click', showPrevSlide);
  nextButton.addEventListener('click', showNextSlide);
  resetSlides();

  function resetSlides() {
    prevButton.disabled = false;
    nextButton.disabled = false;
    width = `${currentSlide.scrollWidth}px`;
    let i = slides.indexOf(currentSlide);
    prevSlide = (i == 0) ? slides[slides.length - 1] : slides[i - 1];
    nextSlide = (i == slides.length - 1) ? slides[0] : slides[i + 1];
    prevSlide.classList.remove('active');
    nextSlide.classList.remove('active');
  };

  function showPrevSlide() {
    prevButton.disabled = true;
    nextButton.disabled = true;
    prevSlide.style.transform = `translateX(-${width})`;
    
    setTimeout(() => {
      prevSlide.classList.add('active');
      prevSlide.removeAttribute('style');
      currentSlide.style.transform = `translateX(${width})`;
      currentSlide = prevSlide;
      currentSlide.addEventListener('transitionend', transitionEndHandler);
    }, 50);
  };

  function showNextSlide() {
    prevButton.disabled = true;
    nextButton.disabled = true;
    nextSlide.style.transform = `translateX(${width})`;

    setTimeout(() => {
      nextSlide.classList.add('active');
      nextSlide.removeAttribute('style');
      currentSlide.style.transform = `translateX(-${width})`;
      currentSlide = nextSlide;
      currentSlide.addEventListener('transitionend', transitionEndHandler);
    }, 50);
  };

  function transitionEndHandler() {
    currentSlide.removeEventListener('transitionend', transitionEndHandler);
    resetSlides(currentSlide);
  }
}

export function setupCarousels() {
  let carousels = Array.from(document.querySelectorAll('.carousel'));
  carousels.forEach(c => setupCarousel(c)); 
}
