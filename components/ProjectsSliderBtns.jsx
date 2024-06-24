"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const ProjectsSliderBtns = ({ containerStyles, btnStyles, iconsStyles, currentIndex, totalSlides }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${currentIndex === 0 ? 'text-white' : ''}`}
        onClick={() => swiper.slidePrev()}
        disabled={currentIndex === 0}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={`${btnStyles} ${currentIndex === totalSlides - 1 ? 'text-white' : ''}`}
        onClick={() => swiper.slideNext()}
        disabled={currentIndex === totalSlides - 1}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
}

export default ProjectsSliderBtns;