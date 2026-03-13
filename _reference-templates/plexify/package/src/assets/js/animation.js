const plexifyGsap = function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
  let smoother;

  if (!smoother) {
    smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });
  }

  const initHeaderSticky = () => {
    const header = document.querySelector(".site-header");
    const sidebarStickyWrap = document.querySelector(".sidebar-sticky");
    if (!header) return;

    let rafId = null;
    let running = true;
    const SCROLL_OFFSET = 100;

    const loop = () => {
      if (!running) return;

      const scrollY =
        typeof smoother?.scrollTop === "function"
          ? smoother.scrollTop()
          : window.scrollY || document.documentElement.scrollTop;

      const shouldFix = scrollY > SCROLL_OFFSET;

      header.classList.toggle("is-fixed", shouldFix);

      if (sidebarStickyWrap) {
        sidebarStickyWrap.classList.toggle("sticky-top", shouldFix);
        sidebarStickyWrap.classList.toggle("sticky-default", !shouldFix);
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
  };

  const initHeadingAnimation = () => {
    const headings = document.querySelectorAll(".headline");
    if (
      !headings.length ||
      typeof gsap === "undefined" ||
      typeof SplitText === "undefined"
    )
      return;

    headings.forEach((el) => {
      if (el.classList.contains("is-split")) return;
      el.classList.add("is-split");

      gsap.set(el, { opacity: 1 });

      const split = new SplitText(el, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
      });

      gsap.from(split.lines, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
        yPercent: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "expo.out",
      });
    });
  };

  const initScrollToSecton = () => {
    try {
      const trigger = document.querySelector(".scroll-down-arrow");
      const target = document.querySelector("#nextSection");
      if (!trigger || !target) return;

      trigger.addEventListener("click", (e) => {
        e.preventDefault();

        const targetTop =
          typeof smoother?.scrollTop === "function"
            ? smoother.offset(target, "top")
            : target.getBoundingClientRect().top + window.pageYOffset;

        if (typeof smoother?.scrollTo === "function") {
          smoother.scrollTo(targetTop, true);
        } else {
          window.scrollTo({
            top: targetTop,
            behavior: "smooth",
          });
        }
      });
    } catch (err) {
      console.error("initScrollToSecton error:", err);
    }
  };

  const initTourHover = () => {
    try {
      const cards = document.querySelectorAll(".tour-card");
      if (!cards.length) return;

      cards.forEach((card) => {
        const badge = card.querySelector(".view-detail");
        if (!badge) return;

        let x = 0;
        let y = 0;
        let targetX = 0;
        let targetY = 0;
        let rafId = null;

        const ease = 0.15;

        const animate = () => {
          x += (targetX - x) * ease;
          y += (targetY - y) * ease;

          badge.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
          rafId = requestAnimationFrame(animate);
        };

        const updateTarget = (e) => {
          const rect = card.getBoundingClientRect();
          targetX = e.clientX - rect.left;
          targetY = e.clientY - rect.top;
        };

        card.addEventListener("mouseenter", (e) => {
          updateTarget(e);
          badge.classList.add("is-active");

          if (!rafId) {
            rafId = requestAnimationFrame(animate);
          }
        });

        card.addEventListener("mousemove", updateTarget);

        card.addEventListener("mouseleave", () => {
          badge.classList.remove("is-active");

          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }

          x = 0;
          y = 0;
          badge.style.transform = "";
        });
      });
    } catch (err) {
      console.error("initTourHover error:", err);
    }
  };

  const initDestinationHover = () => {
    try {
      const section = document.querySelector(".destination-section");
      if (!section) return;

      const layers = section.querySelectorAll(".destination-bg");
      const cards = document.querySelectorAll(".destination-card");

      if (layers.length !== 2 || !cards.length) return;

      let activeLayer = 0;
      let activeCard = cards[0];

      const getCardImage = (card) => card?.dataset?.img || "";

      const initialImg =
        section.style.backgroundImage ||
        (getCardImage(activeCard) && `url(${getCardImage(activeCard)})`);

      if (initialImg) {
        layers[0].style.backgroundImage = initialImg;
      }

      layers[0].classList.add("is-active");
      activeCard.classList.add("active");

      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          if (card === activeCard) return;

          const img = getCardImage(card);
          if (!img) return;

          activeCard.classList.remove("active");
          card.classList.add("active");
          activeCard = card;

          const nextLayer = activeLayer ^ 1;

          layers[nextLayer].style.backgroundImage = `url(${img})`;
          layers[nextLayer].classList.add("is-active");
          layers[activeLayer].classList.remove("is-active");

          activeLayer = nextLayer;
        });
      });
    } catch (err) {
      console.error("initDestinationHover error:", err);
    }
  };

  const initTeamHover = () => {
    let destroyFn = null;

    ScrollTrigger.matchMedia({
      "(min-width: 567px)": () => {
        try {
          const boxes = document.querySelectorAll(".pxl-team-list .box-item");
          if (!boxes.length) return;

          const cleanups = [];
          const PADDING = 60;

          boxes.forEach((box) => {
            const reveal = box.querySelector(".item-image");
            const revealImg = reveal?.querySelector(".reveal-image");
            if (!reveal || !revealImg) return;

            const updatePosition = (e) => {
              const rect = box.getBoundingClientRect();
              const mouseX = e.clientX - rect.left;

              const parentWidth = box.offsetWidth;
              const revealWidth = reveal.offsetWidth;
              const finalX = mouseX + PADDING;

              reveal.classList.add("is-centered");

              if (finalX + revealWidth > parentWidth) {
                reveal.style.setProperty(
                  "--reveal-right",
                  `${parentWidth - mouseX + PADDING}px`,
                );
                reveal.classList.add("is-right");
                reveal.classList.remove("is-left");
              } else {
                reveal.style.setProperty("--reveal-left", `${finalX}px`);
                reveal.classList.add("is-left");
                reveal.classList.remove("is-right");
              }
            };

            const animateReveal = (show) => {
              gsap.killTweensOf(revealImg);

              const tl = gsap.timeline();

              if (show) {
                tl.set(reveal, { opacity: 1, zIndex: 1000 }).fromTo(
                  revealImg,
                  { scaleX: 0, opacity: 0, transformOrigin: "left center" },
                  { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
                );
              } else {
                tl.to(revealImg, {
                  scaleX: 0,
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.in",
                  transformOrigin: "right center",
                }).set(reveal, { opacity: 0, zIndex: "" });
              }
            };

            const onEnter = (e) => {
              updatePosition(e);
              animateReveal(true);
            };

            const onMove = (e) => updatePosition(e);

            const onLeave = () => animateReveal(false);

            box.addEventListener("mouseenter", onEnter);
            box.addEventListener("mousemove", onMove);
            box.addEventListener("mouseleave", onLeave);

            cleanups.push(() => {
              box.removeEventListener("mouseenter", onEnter);
              box.removeEventListener("mousemove", onMove);
              box.removeEventListener("mouseleave", onLeave);
            });
          });

          destroyFn = () => cleanups.forEach((fn) => fn());
        } catch (err) {
          console.error("initTeamHover error:", err);
        }
      },
    });

    return () => destroyFn?.();
  };

  const initLinkSmoothScroll = () => {
    const clickHandler = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetEl = document.getElementById(href.slice(1));
      if (!targetEl) return;

      e.preventDefault();

      if (typeof smoother?.scrollTo === "function") {
        smoother.scrollTo(targetEl, true);
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  };

  let cleanupSticky = null;

  const initStickyPosition = (selector = ".my-sticky", offset = 100) => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": () => {
        try {
          const elements = document.querySelectorAll(selector);
          if (!elements.length) return;

          const instances = [];

          elements.forEach((el) => {
            const parent = el.parentElement;
            if (!parent) return;

            const spacer = document.createElement("div");
            spacer.className = "sticky-spacer";

            const isSidebar = el.classList.contains("sidebar-sticky");
            const isTopZero = el.classList.contains("space-top-0");

            spacer.style.setProperty(
              "--spacer-height",
              isSidebar ? "0px" : `${el.offsetHeight + offset}px`,
            );

            el.style.setProperty(
              "--sticky-top",
              isTopZero ? "0px" : `${offset}px`,
            );

            parent.insertBefore(spacer, el);
            spacer.appendChild(el);
            el.classList.add("is-sticky");

            const trigger = ScrollTrigger.create({
              trigger: spacer,
              start: "top top",
              end: () => `+=${parent.offsetHeight - el.offsetHeight - offset}`,
              pin: el,
              pinType: "transform",
              pinSpacing: false,
              scroller: "#smooth-wrapper",
              anticipatePin: 1,
            });

            requestAnimationFrame(() => {
              trigger.pinSpacer?.classList.add("gsap-pin-spacer-fix");
            });

            instances.push({ trigger, spacer, el });
          });

          return () => {
            instances.forEach(({ trigger, spacer, el }) => {
              trigger.kill();
              el.classList.remove("is-sticky");
              el.style.removeProperty("--sticky-top");

              const parent = spacer.parentElement;
              if (parent) {
                parent.insertBefore(el, spacer);
                parent.removeChild(spacer);
              }
            });
          };
        } catch (err) {
          console.error("initStickyPosition error:", err);
        }
      },
    });
  };

  const initApplySticky = () => {
    cleanupSticky?.();
    cleanupSticky = initStickyPosition();
  };

  const initStickyCard = () => {
    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": () => {
        try {
          const cards = gsap.utils.toArray(".content--sticky");
          if (!cards.length) return;

          const triggers = [];
          const total = cards.length;

          cards.forEach((el, index) => {
            const isLast = index === total - 1;

            if (!isLast) {
              triggers.push(
                ScrollTrigger.create({
                  trigger: el,
                  start: "top top",
                  end: "bottom top",
                  pin: true,
                  pinSpacing: false,
                  anticipatePin: 1,
                }),
              );
            }

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: el,
                  start: "top top",
                  end: "+=100%",
                  scrub: true,
                },
              })
              .to(
                el,
                {
                  ease: "none",
                  startAt: { filter: "brightness(100%) contrast(100%)" },
                  filter: isLast ? "none" : "brightness(60%) contrast(135%)",
                  yPercent: isLast ? 0 : -15,
                },
                0,
              )
              .to(
                el.querySelector(".content__img"),
                {
                  scale: 1.5,
                  ease: "power1.in",
                },
                0,
              );
          });

          ScrollTrigger.refresh();
          return () => triggers.forEach((t) => t.kill());
        } catch (err) {
          console.error("initStickyCard error:", err);
        }
      },
    });
  };

  const initImageHover = () => {
    try {
      const containers = document.querySelectorAll(".dz-hover-img");
      if (!containers.length) return;

      containers.forEach((container) => {
        const img = container.querySelector("img");
        const hoverItem = container.closest(".dz-hover-item");
        if (!img || !hoverItem) return;

        const setupHover = () => {
          try {
            const {
              displacement,
              intensity = 0.5,
              speedin = 1,
              speedout = 1,
              easing = "Expo.easeOut",
            } = container.dataset;

            const hover = new hoverEffect({
              parent: container,
              intensity: Number(intensity),
              speedIn: Number(speedin),
              speedOut: Number(speedout),
              easing,
              hover: false,
              image1: img.src,
              image2: img.src,
              displacementImage: displacement,
              imagesRatio: img.naturalHeight / img.naturalWidth,
            });

            hoverItem.addEventListener("mouseenter", hover.next);
            hoverItem.addEventListener("mouseleave", hover.previous);
          } catch (err) {
            console.error("Hover effect setup error:", err);
          }
        };

        if (img.complete && img.naturalWidth) {
          setupHover();
        } else {
          img.addEventListener("load", setupHover, { once: true });
        }
      });
    } catch (err) {
      console.error("initImageHover init error:", err);
    }
  };

  const initCustomScroll = () => {
    try {
      const elements = document.querySelectorAll(".custom-scroll");
      if (!elements.length) return;

      elements.forEach((el) => {
        let startX = 0;
        let startY = 0;

        el.addEventListener(
          "wheel",
          (e) => {
            e.stopPropagation();
          },
          { passive: false },
        );

        el.addEventListener(
          "touchstart",
          (e) => {
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
          },
          { passive: true },
        );

        el.addEventListener(
          "touchmove",
          (e) => {
            const touch = e.touches[0];

            const deltaX = startX - touch.clientX;
            const deltaY = startY - touch.clientY;

            if (deltaX || deltaY) {
              el.scrollLeft += deltaX;
              el.scrollTop += deltaY;
            }

            startX = touch.clientX;
            startY = touch.clientY;

            e.preventDefault();
            e.stopPropagation();
          },
          { passive: false },
        );
      });
    } catch (err) {
      console.error("initCustomScroll init error:", err);
    }
  };

  document.querySelectorAll(".sticky-update-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        initApplySticky();
      }, 200);
    });
  });

  return {
    init() {
      initHeaderSticky();
      initScrollToSecton();
      initTourHover();
      initDestinationHover();
      initTeamHover();
      initStickyCard();
      initLinkSmoothScroll();
      initHeadingAnimation();
      initApplySticky();
      initCustomScroll();
      initImageHover();
    },
    resize() {},
  };
};

window.addEventListener("load", () => {
  plexifyGsap().init();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    plexifyGsap().resize();
    ScrollTrigger.refresh();
  }, 250);
});
