import React, { useState } from 'react';

const EndlessScroll = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(2); // Middle image is set as active

    const handleScroll = (direction) => {
      if (direction === 'left') {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      } else if (direction === 'right') {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }
    };
  
    const getPreviousIndex = (index) => (index === 0 ? images.length - 1 : index - 1);
    const getNextIndex = (index) => (index === images.length - 1 ? 0 : index + 1);

  return (
    <div className="relative mt-32 flex h-full items-center justify-center">
      {/* Scroll Left Button */}
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-[-35%] z-20 h-[40px] w-[40px] rounded-full text-2xl  p-1 bg-gray-300 text-black focus:outline-none sm:h-[50px] sm:w-[50px] md:left-[-30%] lg:left-[-25%] xl:h-[60px] xl:w-[60px]"
      >
        ←
      </button>

      {/* Carousel container */}
      <div className="relative mx-2 flex items-center justify-center sm:mx-4">
        {/* Previous image */}
        <img
          src={images[getPreviousIndex(activeIndex)].url}
          alt={images[getPreviousIndex(activeIndex)].alt}
          className="absolute left-[-40px] z-0 h-[100px] w-[100px] -translate-x-4 transform rounded-lg opacity-75 transition-all duration-500 ease-in-out sm:left-[-50px] sm:h-[120px] sm:w-[120px] lg:left-[-80px] lg:h-[250px] lg:w-[250px]"
        />

        {/* Main image */}
        <div className="relative z-10 mx-2 h-[150px] w-[150px] overflow-hidden rounded-lg sm:mx-4 sm:h-[200px] sm:w-[200px] lg:h-[400px] lg:w-[400px]">
          <img
            src={images[activeIndex].url}
            alt={images[activeIndex].alt}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Next image */}
        <img
          src={images[getNextIndex(activeIndex)].url}
          alt={images[getNextIndex(activeIndex)].alt}
          className="absolute right-[-40px] z-0 h-[100px] w-[100px] translate-x-4 transform rounded-xl opacity-75 transition-all duration-500 ease-in-out sm:right-[-50px] sm:h-[120px] sm:w-[120px] lg:right-[-80px] lg:h-[250px] lg:w-[250px]"
        />
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-[-35%] z-20 h-[40px] w-[40px] rounded-full bg-gray-300  p-1 text-black text-2xl focus:outline-none sm:h-[50px] sm:w-[50px] md:right-[-30%] lg:right-[-25%] xl:h-[60px] xl:w-[60px]"
      >
        →
      </button>
    </div>
  );
};

export default EndlessScroll;