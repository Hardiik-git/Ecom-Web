let slideIndex = 0;
showSlide();

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  let carouselInner = document.querySelector(".carousel-inner");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }
  carouselInner.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
}

let autoSlide = setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000);
