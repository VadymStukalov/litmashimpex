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
