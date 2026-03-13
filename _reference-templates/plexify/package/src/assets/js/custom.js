const plexify = function () {
  "use strict";

  const handleMasonryBox = () => {
    const masonryEl = document.querySelector("#masonry, .masonry");
    if (!masonryEl) return;

    const cards = masonryEl.querySelectorAll(".card-container");
    if (!cards.length) return;

    const filters = document.querySelector(".filters");
    const filterItems = filters ? [...filters.querySelectorAll("li")] : [];

    let activeFilter = filterItems[0];

    const setActive = (current, next, className = "active") => {
      current?.classList.remove(className);
      next?.classList.add(className);
      return next;
    };

    const safeRun = (label, fn) => {
      try {
        fn();
      } catch (err) {
        console.error(label, err);
      }
    };

    filterItems.forEach((li) => li.classList.remove("active"));
    activeFilter?.classList.add("active");

    const gutter = parseInt(masonryEl.dataset.gutter || "0", 10);
    let isoInstance;

    safeRun("imagesLoaded failed:", () => {
      imagesLoaded(masonryEl, () => {
        safeRun("Isotope init failed:", () => {
          isoInstance = new Isotope(masonryEl, {
            itemSelector: ".card-container",
            layoutMode: "masonry",
            masonry: {
              gutter,
              columnWidth: ".grid-sizer",
            },
            transitionDuration: "0.4s",
          });
        });
      });
    });

    if (!filters) return;

    filters.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li || li === activeFilter || !isoInstance) return;

      activeFilter = setActive(activeFilter, li);

      safeRun("Isotope arrange failed:", () => {
        isoInstance.arrange({
          filter: li.dataset.filter || "*",
        });
      });
    });
  };

  const handleAccordion = (container = document) => {
    const accordions = container.querySelectorAll(".myAccordion");
    if (!accordions.length) return;

    const closeAll = (accordion) => {
      accordion
        .querySelectorAll(".accordion-item.is-open")
        .forEach((item) => item.classList.remove("is-open"));
    };

    const getHeader = (e, accordion) => {
      const header = e.target.closest(".accordion-header");
      return header && accordion.contains(header) ? header : null;
    };

    accordions.forEach((accordion) => {
      if (accordion.dataset.bound === "true") return;
      accordion.dataset.bound = "true";

      accordion.addEventListener("click", (e) => {
        const header = getHeader(e, accordion);
        if (!header) return;

        const item = header.parentElement;
        const isOpen = item.classList.contains("is-open");

        closeAll(accordion);

        if (!isOpen) {
          item.classList.add("is-open");
        }
      });
    });
  };

  const handleCountdown = () => {
    try {
      const counter = document.querySelector("#countdown");
      if (!counter) return;

      const elements = {
        days: counter.querySelector(".days"),
        hours: counter.querySelector(".hours"),
        minutes: counter.querySelector(".minutes"),
        seconds: counter.querySelector(".seconds"),
      };

      if (Object.values(elements).some((el) => !el)) {
        console.warn("Countdown elements missing");
        return;
      }

      const FORMAT_MULTIPLIER = {
        seconds: 1,
        minutes: 60,
        hours: 3600,
        days: 86400,
      };

      const displayTimeLeft = (totalSeconds) => {
        elements.days.textContent = Math.floor(totalSeconds / 86400);
        elements.hours.textContent = Math.floor((totalSeconds % 86400) / 3600);
        elements.minutes.textContent = Math.floor((totalSeconds % 3600) / 60);
        elements.seconds.textContent =
          totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60;
      };

      const startTimer = (seconds) => {
        const endTime = Date.now() + seconds * 1000;

        const timer = setInterval(() => {
          try {
            const secondsLeft = Math.round((endTime - Date.now()) / 1000);

            if (secondsLeft <= 0) {
              clearInterval(timer);
              return;
            }

            displayTimeLeft(secondsLeft);
          } catch (err) {
            clearInterval(timer);
            console.error("Countdown interval error:", err);
          }
        }, 1000);
      };

      const startCountdown = (value = 100, format = "seconds") => {
        const multiplier = FORMAT_MULTIPLIER[format];

        if (!multiplier) {
          console.warn("Invalid countdown format:", format);
          return;
        }

        startTimer(value * multiplier);
      };

      startCountdown(20, "days");
    } catch (err) {
      console.error("handleCountdown initialization error:", err);
    }
  };

  const handleTabs = () => {
    try {
      const tabContainers = document.querySelectorAll(".custom-tab");
      if (!tabContainers.length) return;

      const setActiveByIndex = (titles, contents, prev, next) => {
        titles[prev]?.classList.remove("active");
        contents[prev]?.classList.remove("active");

        titles[next]?.classList.add("active");
        contents[next]?.classList.add("active");
      };

      const getClickedIndex = (e, container, titles) => {
        const clicked = e.target.closest(".tab-title");
        if (!clicked || !container.contains(clicked)) return -1;
        return titles.indexOf(clicked);
      };

      tabContainers.forEach((container) => {
        const titles = [...container.querySelectorAll(".tab-title")];
        const contents = [...container.querySelectorAll(".tab-content")];
        if (!titles.length || !contents.length) return;

        let activeIndex = parseInt(container.dataset.activeIndex || "0", 10);

        const activate = (index) => {
          if (index === activeIndex) return;

          setActiveByIndex(titles, contents, activeIndex, index);
          activeIndex = index;

          handleAccordion(contents[index]);
        };

        setActiveByIndex(titles, contents, activeIndex, activeIndex);
        handleAccordion(contents[activeIndex]);

        container.addEventListener("click", (e) => {
          try {
            const index = getClickedIndex(e, container, titles);
            if (index === -1) return;

            activate(index);
          } catch (err) {
            console.error("Tab click handler error:", err);
          }
        });
      });
    } catch (err) {
      console.error("handleTabs initialization error:", err);
    }
  };

  const handleServiceCard = () => {
    try {
      const wrapper = document.querySelector(".services-wrapper");
      if (!wrapper) return;

      const getCardFromEvent = (e) => {
        const card = e.target.closest(".service-card");
        return card && wrapper.contains(card) ? card : null;
      };

      const setActiveCard = (card) => {
        const activeCard = wrapper.querySelector(".service-card.active");
        if (activeCard && activeCard !== card) {
          activeCard.classList.remove("active");
        }
        card.classList.add("active");
      };

      const handleMouseOver = (e) => {
        const card = getCardFromEvent(e);
        if (!card) return;

        setActiveCard(card);
      };

      wrapper.addEventListener("mouseover", handleMouseOver);

      return () => {
        wrapper.removeEventListener("mouseover", handleMouseOver);
      };
    } catch (error) {
      console.error("Service card hover initialization failed:", error);
    }
  };

  const handleCounterJS = () => {
    try {
      const counters = document.querySelectorAll(".value");
      if (!counters.length) return;

      const DURATION = 1200;

      const getTargetValue = (el) => {
        const value = Number(el.dataset.value);
        return isNaN(value) ? null : value;
      };

      const animateCounter = (el, target) => {
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / DURATION, 1);
          el.textContent = Math.floor(progress * target);

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            el.textContent = target;
          }
        };

        requestAnimationFrame(tick);
      };

      const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = getTargetValue(entry.target);
          if (target !== null) {
            animateCounter(entry.target, target);
          }

          observer.unobserve(entry.target);
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.4,
      });

      counters.forEach((counter) => observer.observe(counter));
    } catch (err) {
      console.error("handleCounterJS initialization error:", err);
    }
  };

  const handleVideoPopupJS = () => {
    try {
      const dialog = document.getElementById("videoDialog");
      const container = document.getElementById("videoContainer");
      const closeBtn = document.getElementById("closeBtn");

      if (!dialog || !container || !closeBtn) return;

      const getVideoData = (btn) => ({
        type: btn.dataset.type,
        src: btn.dataset.src,
      });

      const buildIframe = (src) => `
      <iframe
        src="${encodeURI(src)}?autoplay=1"
        allow="autoplay; encrypted-media; fullscreen"
        allowfullscreen
      ></iframe>
    `;

      const buildMp4 = (src) => `
      <video controls autoplay>
        <source src="${src}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;

      const getVideoMarkup = ({ type, src }) => {
        if (!type || !src) return "";

        if (type === "youtube" || type === "vimeo") {
          return buildIframe(src);
        }

        if (type === "mp4") {
          return buildMp4(src);
        }

        return "";
      };

      const openVideo = (data) => {
        const markup = getVideoMarkup(data);
        if (!markup) return;

        container.innerHTML = markup;
        dialog.classList.add("is-open");
      };

      const closeVideo = () => {
        container.innerHTML = "";
        dialog.classList.remove("is-open");
      };

      const handleOpen = (e) => {
        const button = e.target.closest("button[data-type][data-src]");
        if (!button) return;

        openVideo(getVideoData(button));
      };

      document.body.addEventListener("click", handleOpen);
      closeBtn.addEventListener("click", closeVideo);

      return () => {
        document.body.removeEventListener("click", handleOpen);
        closeBtn.removeEventListener("click", closeVideo);
      };
    } catch (err) {
      console.error("handleVideoPopupJS init error:", err);
    }
  };

  const handleShowPass = () => {
    try {
      const getPasswordInput = (btn) =>
        btn.closest(".password-wrapper")?.querySelector(".dz-password");

      const togglePassword = (btn, input) => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        btn.classList.toggle("active", isPassword);
      };

      const handleClick = (e) => {
        const toggleBtn = e.target.closest(".show-pass");
        if (!toggleBtn) return;

        const input = getPasswordInput(toggleBtn);
        if (!input) return;

        togglePassword(toggleBtn, input);
      };

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    } catch (err) {
      console.error("handleShowPass init error:", err);
    }
  };

  const handleLoadmore = () => {
    try {
      const btn = document.querySelector(".dz-load-more");
      if (!btn) return;

      let isLoading = false;

      const createLoader = () => {
        const icon = document.createElement("i");
        icon.className = "fa fa-refresh is-loading";
        return icon;
      };

      const fetchContent = async (url) => {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "text/html" },
        });
        return res.text();
      };

      const onClick = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        const url = btn.getAttribute("rel");
        if (!url) return;

        isLoading = true;

        const loader = createLoader();
        btn.appendChild(loader);

        try {
          const html = await fetchContent(url);

          const container = document.querySelector(".loadmore-content");
          container?.insertAdjacentHTML("beforeend", html);
        } catch (err) {
          console.error("Load more fetch error:", err);
        } finally {
          loader.remove();
          isLoading = false;
        }
      };

      btn.addEventListener("click", onClick);

      return () => {
        btn.removeEventListener("click", onClick);
      };
    } catch (err) {
      console.error("handleLoadmore init error:", err);
    }
  };

  const handleSetCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let elements = document.getElementsByClassName("current-year");

    for (const element of elements) {
      element.innerHTML = currentYear;
    }
  };

  const handleCustomSelects = () => {
    try {
      document.querySelectorAll(".dynamic-select").forEach(initCustomSelect);
    } catch (err) {
      console.error("handleCustomSelects error:", err);
    }
  };

  const initCustomSelect = (selectEl) => {
    if (!selectEl || selectEl.dataset.customized === "true") return;
    selectEl.dataset.customized = "true";

    const selectId =
      selectEl.id || `select-${Math.random().toString(36).slice(2, 9)}`;

    selectEl.classList.add("custom-select-native");

    const wrapper = createWrapper(selectId);
    const selected = createSelected(selectEl);
    const list = createList(selectEl, selected, wrapper);

    wrapper.append(selected, list);
    selectEl.after(wrapper);

    selected.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllSelects(wrapper);
      wrapper.classList.toggle("is-open");
    });
  };

  const createWrapper = (id) => {
    const el = document.createElement("div");
    el.id = `custom-${id}`;
    el.className = "custom-select";
    return el;
  };

  const createSelected = (selectEl) => {
    const el = document.createElement("div");
    el.className = "select-selected";

    const defaultOption =
      selectEl.querySelector("option[selected]") || selectEl.options[0];

    el.textContent = defaultOption?.textContent || "";

    const labelText = selectEl.parentElement?.dataset?.label;
    if (labelText) {
      const label = document.createElement("span");
      label.textContent = labelText;
      el.appendChild(label);
    }

    return el;
  };

  const createList = (selectEl, selected, wrapper) => {
    const list = document.createElement("div");
    list.className = "select-items";

    [...selectEl.options].forEach((option) => {
      const item = document.createElement("div");
      item.className = "select-item";
      item.dataset.value = option.value;
      item.textContent = option.textContent;

      if (option.selected) item.classList.add("is-active");

      item.addEventListener("click", () => {
        updateSelection(selectEl, selected, list, item);
        wrapper.classList.remove("is-open");
      });

      list.appendChild(item);
    });

    return list;
  };

  const updateSelection = (selectEl, selected, list, item) => {
    selected.childNodes[0].textContent = item.textContent;
    selectEl.value = item.dataset.value;

    selectEl.dispatchEvent(new Event("change", { bubbles: true }));

    list
      .querySelectorAll(".select-item")
      .forEach((i) => i.classList.remove("is-active"));

    item.classList.add("is-active");
  };

  const closeAllSelects = (except) => {
    document.querySelectorAll(".custom-select.is-open").forEach((select) => {
      if (select !== except) select.classList.remove("is-open");
    });
  };

  document.addEventListener("click", () => {
    closeAllSelects();
  });

  const handleHoverActive = () => {
    const wrappers = document.querySelectorAll(".box-hover-wrapper");
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
      if (wrapper.dataset.bound === "true") return;
      wrapper.dataset.bound = "true";

      let activeCard = wrapper.querySelector(".box-hover.active");

      const onHover = (e) => {
        const card = e.target.closest(".box-hover");
        if (!card || !wrapper.contains(card) || card === activeCard) return;

        activeCard?.classList.remove("active");
        card.classList.add("active");
        activeCard = card;
      };

      wrapper.addEventListener("mouseover", onHover);
    });
  };

  const handleScrollTop = () => {
    const scrollBtn = document.getElementById("scrollProgress");
    const scrollTopBtn = document.getElementById("scrolltopbtn");
    if (!scrollBtn) return;

    if (scrollBtn.dataset.bound === "true") return;
    scrollBtn.dataset.bound = "true";

    const circle = scrollBtn.querySelector("circle");
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.setProperty("--circumference", circumference);

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = docHeight ? scrollTop / docHeight : 0;

      circle.style.setProperty(
        "--progress-offset",
        circumference * (1 - progress),
      );

      scrollBtn.classList.toggle("active", scrollTop > 200);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll);
    updateProgress();

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollBtn.addEventListener("click", scrollToTop);
    scrollTopBtn?.addEventListener("click", scrollToTop);
  };

  let lastActiveTopLink = null;

  const getTopLevelLink = (link) => {
  const topLi = link.closest(".navbar-nav > li");
  return topLi?.querySelector(":scope > .nav-link") || link;
};


  const handleMenuActiveAndIndicator = () => {
  const nav = document.querySelector(".navbar-nav");
  if (!nav) return;

  const indicator = nav.querySelector(".nav-indicator");
  const wrapper = nav.closest(".nav-wrapper");

  const links = [...nav.querySelectorAll(".nav-link")];
  const validLinks = links.filter(
    (a) =>
      a.getAttribute("href") &&
      !a.getAttribute("href").startsWith("javascript")
  );

  setActiveLinkFromURL(validLinks);

  lastActiveTopLink =
    document.querySelector(".navbar-nav > li.active > .nav-link");

  initIndicator({ nav, wrapper, indicator, links });
};

  const setActiveLinkFromURL = (links) => {
    const currentPath =
      window.location.pathname.split("/").pop().toLowerCase() || "index.html";

    links.forEach((link) => {
      const linkPath = link.getAttribute("href").split("/").pop().toLowerCase();
      if (linkPath === currentPath) {
        activateLink(link);
      }
    });
  };

  const activateLink = (link) => {
    const nav = link.closest(".navbar-nav");
    clearActiveStates(nav);

    link.classList.add("active");

    let parentLi = link.closest("li");

    while (parentLi && !parentLi.parentElement.classList.contains("navbar-nav")) {
      const parentLink = parentLi.querySelector(":scope > .nav-link");
      parentLink?.classList.add("active");
      parentLi.classList.add("active");

      parentLi = parentLi.parentElement.closest("li");
    }

    const topLi = link.closest(".navbar-nav > li");
    topLi?.classList.add("active");
    topLi?.querySelector(":scope > .nav-link")?.classList.add("active");
  };


  const clearActiveStates = (nav) => {
    nav
      .querySelectorAll(".active")
      .forEach((el) => el.classList.remove("active"));
  };

  const initIndicator = ({ wrapper, indicator, links }) => {
  if (!indicator || !wrapper) return;

  const moveIndicator = (el) => {
    const rect = el.getBoundingClientRect();
    const parentRect = wrapper.getBoundingClientRect();

    indicator.style.setProperty("--indicator-width", `${rect.width}px`);
    indicator.style.setProperty(
      "--indicator-x",
      `${rect.left - parentRect.left}px`
    );
  };

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      clearActiveStates(link.closest(".navbar-nav"));

      const topLink = getTopLevelLink(link);
      topLink.classList.add("active");
      moveIndicator(topLink);
    });
  });

  wrapper.addEventListener("mouseleave", () => {
    clearActiveStates(wrapper.querySelector(".navbar-nav"));

    if (lastActiveTopLink) {
      lastActiveTopLink.classList.add("active");
      lastActiveTopLink.closest("li")?.classList.add("active");
      moveIndicator(lastActiveTopLink);
    }
  });

  if (lastActiveTopLink) {
    moveIndicator(lastActiveTopLink);
  }
};




  const handleBtnHover = () => {
    try {
      const buttons = document.querySelectorAll(".btn-hover");
      if (!buttons.length) return;

      buttons.forEach(initHoverButton);
    } catch (err) {
      console.error("handleBtnHover init error:", err);
    }
  };

  const initHoverButton = (btn) => {
    try {
      if (btn.dataset.hoverInit === "true") return;
      btn.dataset.hoverInit = "true";

      const span = btn.querySelector("span");
      if (!span) return;

      if (btn.querySelector(".gsap-clone")) return;

      const clone = createClone(span);
      btn.appendChild(clone);

      const tl = createHoverTimeline(span, clone);

      btn.addEventListener("mouseenter", () => tl.play());
      btn.addEventListener("mouseleave", () => tl.reverse());
    } catch (err) {
      console.error("initHoverButton error:", err);
    }
  };

  const createClone = (span) => {
    const clone = span.cloneNode(true);
    clone.classList.add("gsap-clone");

    clone.style.setProperty("--clone-left", `${span.offsetLeft}px`);
    clone.style.setProperty("--clone-top", `${span.offsetTop}px`);

    return clone;
  };

  const createHoverTimeline = (original, clone) => {
    return gsap
      .timeline({ paused: true })
      .to(
        original,
        {
          yPercent: 170,
          duration: 0.05,
          ease: "power2.out",
        },
        0,
      )
      .to(
        clone,
        {
          yPercent: 170,
          duration: 0.05,
          ease: "power2.out",
        },
        0,
      );
  };

  const handleStarRating = () => {
    try {
      const starRatingElements = document.querySelectorAll(".star-rating-old");
      if (!starRatingElements.length) return;

      try {
        new StarRating(".star-rating-old");
      } catch (err) {
        console.error("handleStarRating init error:", err);
      }
    } catch (err) {
      console.error("handleStarRating error:", err);
    }
  };

  const handleStatusPost = () => {
    try {
      const trigger = document.querySelector(".post-status-btn");
      const modal = document.querySelector(".status-modal");
      const closeBtn = document.querySelector(".status-close");

      if (!trigger || !modal) return;

      initStatusModal({ trigger, modal, closeBtn });
    } catch (err) {
      console.error("handleStatusPost init error:", err);
    }
  };

  const initStatusModal = ({ trigger, modal, closeBtn }) => {
    try {
      if (modal.dataset.bound === "true") return;
      modal.dataset.bound = "true";

      const toggle = () => toggleModal(modal, "hidden");
      const close = () => hideModal(modal, "hidden");

      trigger.addEventListener("click", toggle);
      closeBtn?.addEventListener("click", close);
    } catch (err) {
      console.error("initStatusModal error:", err);
    }
  };

  const toggleModal = (el, className) => {
    el.classList.toggle(className);
  };

  const hideModal = (el, className) => {
    el.classList.add(className);
  };

  const handleFlatpickr = () => {
    try {
      const inputs = document.querySelectorAll(".flatpickr1");
      if (!inputs.length) return;

      try {
        flatpickr(inputs);
      } catch (err) {
        console.error("handleFlatpickr init error:", err);
      }
    } catch (err) {
      console.error("handleFlatpickr error:", err);
    }
  };

  return {
    init: function () {
      handleMasonryBox();
      handleAccordion();
      handleCountdown();
      setTimeout(() => {
        handleTabs();
      }, 500);
      handleServiceCard();
      handleCounterJS();
      handleVideoPopupJS();
      handleShowPass();
      handleLoadmore();
      handleSetCurrentYear();
      handleCustomSelects();
      handleHoverActive();
      handleScrollTop();
      handleMenuActiveAndIndicator();
      handleBtnHover();
      handleStarRating();
      handleStatusPost();
      handleFlatpickr();
    },
    resize: function () {},
  };
};
window.addEventListener("load", function () {
  if (typeof plexify !== "undefined" && typeof plexify.load === "function") {
    plexify.load();
  }

  setTimeout(function () {
    const loadingArea = document.getElementById("loading-area");
    if (loadingArea) {
      loadingArea.remove();
    }
  }, 100);
});

window.addEventListener("scroll", function () {
  if (typeof plexify !== "undefined" && typeof plexify.scroll === "function") {
    plexify.scroll();
  }
});

window.addEventListener("resize", function () {
  plexify().resize();
});

document.addEventListener("DOMContentLoaded", function () {
  plexify().init();
});
