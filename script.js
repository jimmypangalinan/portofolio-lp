function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', (event) => {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.banner-slide');
  const totalSlides = slides.length;

  function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    const offset = slideIndex * -100;
    document.querySelector('.banner-container').style.transform = `translateX(${offset}%)`;
    setTimeout(showSlides, 8000); // Change image every 8 seconds to match CSS animation
  }

  showSlides();
});
