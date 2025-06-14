

  document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.querySelector('.main-image img');
    let currentIndex = 0;
    let autoSlideInterval;

    function changeImage(index) {
      thumbnails.forEach(t => t.classList.remove('active'));
      thumbnails[index].classList.add('active');
      mainImage.src = thumbnails[index].src;
      currentIndex = index;
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        changeImage(currentIndex);
      }, 3000);
    }

    function pauseAutoSlide() {
      clearInterval(autoSlideInterval);
      setTimeout(startAutoSlide, 5000);
    }

    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        changeImage(index);
        pauseAutoSlide();
      });
    });

    if (thumbnails.length > 0) {
      changeImage(0);
      startAutoSlide();
    }
  });

// hero slidetyn image-i ozgerui 
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
    }

    setInterval(changeSlide, 3000); 
});
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderBlogs(blogs);

function toggleMenu() {
    document.querySelector(".items").classList.toggle("active");
}










  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    navLinks.classList.toggle('show');
    burger.classList.toggle('active');
  };
