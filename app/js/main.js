const swiper = new Swiper(".swiper", {
  slidesPerView: 1.5,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    620: {
      slidesPerView: 2.5,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

console.log("init Swiper 1");
$(function () {});

// Add class Swiper to benefits section

const benefitsList = document.querySelector(".benefits__list");
const benefitsItems = document.querySelectorAll(".benefits__list-item");

function addClassBaseOnResize() {
  const screenWidth = window.innerWidth;
  const sliderWrapper = document.createElement("div");

  if (screenWidth <= 800) {
    benefitsList.classList.add("benefits-swiper");
    // создаем обертку

    sliderWrapper.classList.add("swiper-wrapper");
    // добавляем обертку в список
    benefitsList.appendChild(sliderWrapper);
    benefitsItems.forEach((element) => {
      console.log(element);
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
      swiperSlide.appendChild(element);
      // element.classList.add("swiper-slide");
      sliderWrapper.appendChild(swiperSlide);
      const benefitsSwiper = new Swiper(".benefits-swiper", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          520: {
            slidesPerView: 1.5,
          },
          600: {
            slidesPerView: 2.5,
          },
          800: {
            navigation: false,
          },
        },
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });

      console.log("init Swiper 2");
    });
  } else {
    benefitsList.classList.remove("benefits-swiper");
    sliderWrapper.classList.remove("swiper-wrapper");
  }

  console.log(screenWidth);
  console.log("init classes");
}

window.addEventListener("DOMContentLoaded", addClassBaseOnResize);
// window.addEventListener("resize", addClassBaseOnResize);

// drop-down menu

const menuBtn = document.querySelector(".header-menu__btn");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");

const catDownMenuBtn = document.querySelector(".cat-down-img");
const productList = document.querySelector(".products-list");
const menuLinks = document.querySelectorAll(".menu__list-link");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
});

catDownMenuBtn.addEventListener("click", function () {
  productList.classList.toggle("products-list--open");
  console.log("hi");

  const isOpen = productList.classList.contains("products-list--open");
  if (isOpen) {
    catDownMenuBtn.style.transform = "rotate(180deg)";
    catDownMenuBtn.style.padding = "5px 0 0 0";
  } else {
    catDownMenuBtn.style.transform = "rotate(0deg)";
    catDownMenuBtn.style.padding = "0 0 3px 0";
  }
});

// Submenu resins

const submenuResins = document.querySelector(".cat-down-img-submenu");

submenuResins.addEventListener("click", function () {
  console.log("hi");
  const productsListResin = document.querySelector(".products-list__resin");
  productsListResin.classList.toggle("products-list--open");
  const isOpen = productsListResin.classList.contains("products-list--open");
  if (isOpen) {
    submenuResins.style.transform = "rotate(180deg)";
    submenuResins.style.padding = "2px 0 0 0";
  } else {
    submenuResins.style.transform = "rotate(0deg)";
    submenuResins.style.padding = "0 0 1px 0";
  }
});
//

closeBtn.addEventListener("click", function () {
  menu.classList.remove("open");
});

// Button to top

window.addEventListener("scroll", function () {
  const scrollTopButton = document.querySelector(".back-top-btn");
  if (window.pageYOffset > 200) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

document.querySelector(".back-top-btn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
