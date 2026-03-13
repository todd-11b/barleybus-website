"use client";

export function HeroTest() {
  return (
    <section className="bg-navy py-20 px-5">
      <div className="container-fluid">
        <p className="text-white text-2sm mb-4 uppercase tracking-widest">Plexify Hero Test — exact content below</p>

        {/* Play Video button */}
        <div className="mb-5">
          <button data-type="youtube" type="button" data-src="https://www.youtube.com/embed/o8OgzQdA70c" className="flex items-center gap-3.5 cursor-pointer relative z-1">
            <span className="size-12 flex items-center justify-center rounded-full bg-primary text-black">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2517_6279_test)">
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

        {/* Headline */}
        <h2 className="3xl:text-15xl 2xxl:text-12xl xl:text-10xl md:text-8xl sm:text-6xl text-4xxl font-bold mb-10 text-white leading-none! uppercase">Safari Dreams Wild Realities</h2>

        {/* EXPLORE text — rendered directly so it's visible */}
        <p className="text-[23vw] font-[family-name:var(--font-roboto-condensed)] font-black text-white/25 leading-none uppercase">EXPLORE</p>
      </div>
    </section>
  );
}
