const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

// Toggle menu open/close
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".navigation-items a").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

/* Slider Logic */
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

function sliderNav(index) {
  btns.forEach(btn => btn.classList.remove("active"));
  slides.forEach(slide => slide.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));

  btns[index].classList.add("active");
  slides[index].classList.add("active");
  contents[index].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => sliderNav(i));
});
