"use client";

export function HeroTest() {
  return (
    <div className="relative z-1 overflow-hidden 2xxl:h-250 xl:h-230 lg:h-162.5 sm:h-150 h-130 after:absolute after:inset-0 md:after:bg-gradient-to-b after:bg-gradient-to-t after:from-black/70 after:to-transparent">
      <div className="relative z-1 h-full">
        <div className="h-full xl:pt-0 lg:pt-7.5 sm:pt-37.75 pt-40">
          <div className="row items-end h-full">
            <div className="md:w-2/3 w-full">
              <div className="relative z-1 xl:p-20 lg:p-15 md:py-12.5 py-6 md:px-5 px-5 sm:pe-20">
                <div className="mb-5">
                  <button data-type="youtube" type="button" data-src="https://www.youtube.com/embed/o8OgzQdA70c" className="flex items-center gap-3.5 cursor-pointer relative z-1">
                    <span className="size-12 flex items-center justify-center rounded-full bg-primary text-black">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2517_6279)">
                          <path d="M2.55267 0.264591C1.4708 -0.355984 0.593689 0.152398 0.593689 1.39919V10.5999C0.593689 11.848 1.4708 12.3557 2.55267 11.7357L10.5946 7.12372C11.6768 6.50293 11.6768 5.49715 10.5946 4.8765L2.55267 0.264591Z" fill="black"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2517_6279_test">
                            <rect width="12" height="12" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-white">Play Video</span>
                  </button>
                </div>
                <h1 className="3xl:text-15xl 2xxl:text-12xl xl:text-10xl md:text-8xl sm:text-6xl text-4xxl font-bold mb-2.5 text-white leading-none! uppercase">Safari Dreams Wild Realities</h1>
              </div>
              <div className="clipped"></div>
              <svg width="0" height="0" aria-hidden="true" focusable={false}>
                <defs>
                  <clipPath id="svgTextPathTest" clipPathUnits="userSpaceOnUse">
                    <text
                      className="text-[23vw]"
                      x="0"
                      y="320"
                      fontFamily="Roboto Condensed, sans-serif"
                      fontWeight="900"
                    >
                      EXPLORE
                    </text>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/bachelorette/barrel-room-group.jpg" alt="Hero Banner" width={1920} height={1000} className="absolute inset-0 w-full h-full object-cover max-sm:object-[70%]" fetchPriority="high" decoding="async" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/bachelorette/barrel-room-group.jpg" alt="Hero Banner" width={1920} height={1000} className="absolute top-0 right-0 size-full z-1 pointer-events-none object-cover object-center max-md:hidden" fetchPriority="high" decoding="async" />
      <div className="absolute right-7.5 bottom-20 flex flex-col gap-2.5 items-center z-1 max-sm:hidden">
        <span className="block text-white text-2sm font-medium uppercase [writing-mode:tb]">Scroll Down</span>
        <button type="button" aria-label="Scroll to next section" className="scroll-down-arrow size-12 flex items-center justify-center rounded-full bg-white text-black cursor-pointer" data-scroll-target="#nextSection">
          <svg width="14" height="23" viewBox="0 0 14 23" fill="none">
            <path d="M6.83 0.75V21.32" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12.67 15.49L6.83 21.33L1 15.49" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
