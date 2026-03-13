const plexifyCarousel = function () {
  const handleTourSwiper = function () {
    const swiper = new Swiper(".tour-swiper", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1150: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 2.7,
          spaceBetween: 50,
        },
      },
    });
  };

  const handleTourSwiper2 = function () {
    const swiper = new Swiper(".tour-swiper-2", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1150: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  };

  const handleTestimonialSwiper = function () {
    var swiper = new Swiper(".testimonial-thumbs", {
      loop: true,
      spaceBetween: 4.5,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      direction: "horizontal",
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        360: {
          slidesPerView: 3.9,
          direction: "horizontal",
        },
        567: {
          slidesPerView: 4.9,
          direction: "horizontal",
        },
        1199: {
          slidesPerView: 4.7,
          direction: "vertical",
        },
      },
    });
    var swiper2 = new Swiper(".testimonial-swiper", {
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
      },
      thumbs: {
        swiper: swiper,
      },
    });
  };

  const handleBrandSwiper2 = () => {
    const swiper = new Swiper(".brand-swiper2", {
      speed: 1500,
      parallax: true,
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
      },
    });
  };

  const handleBlogSwiper = () => {
    const swiper = new Swiper(".blog-swiper", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 35,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        567: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
      },
    });
  };

  const handleBlogSlideshowSwiper = () => {
    const swiperEl = document.querySelector(".blog-slideshow");
    if (!swiperEl) return;

    new Swiper(".blog-slideshow", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: "auto",
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination-two",
        clickable: true,
      },
    });
  };

  if (
    document.querySelector(".galley-thumb-swiper") &&
    document.querySelector(".galley-swiper")
  ) {
    const swiperThumbs = new Swiper(".galley-thumb-swiper", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(".galley-swiper", {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  }

  const handleStatusSwiper = () => {
    const swiperEl = document.querySelector(".status-swiper");

    if (!swiperEl) return;

    const swiper = new Swiper(".status-swiper", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: "auto",
      speed: 1500,
      effect: "fade",
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".status-pagination",
        clickable: true,
      },
    });

    const statusBtn = document.querySelector(".post-status-btn");

    if (statusBtn) {
      statusBtn.addEventListener("click", () => {
        swiper.slideTo(0);
        swiper.autoplay.start();
      });
    }
  };
  
  return {
    load() {
      handleTourSwiper();
      handleTourSwiper2();
      handleTestimonialSwiper();
      handleBrandSwiper2();
      handleBlogSwiper();
      handleBlogSlideshowSwiper();
      handleStatusSwiper();
    },
  };
};

window.addEventListener("load", function () {
  plexifyCarousel().load();
});
