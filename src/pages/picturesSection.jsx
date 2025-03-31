import React, { useRef } from 'react';

const StartHereSection = () => {
  const scrollContainerRef = useRef(null);
  
  const resources = [
    {
      title: "Knowing God",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuFaUe2_OoBJc8oDKmWRjfRIZesuf2morSA&s", // Dark forest with lights
      link: "/knowing-god"
    },
    {
      title: "How To Know If You're REALLY Saved",
      image: "/api/placeholder/600/400", // Pier with water
      link: "/salvation"
    },
    {
      title: "Must Have: Bible Reading Plan",
      image: "/api/placeholder/600/400", // Interior with couch
      link: "/bible-plan"
    },
    {
      title: "Church Bulletins {100+ Pages}",
      image: "/api/placeholder/600/400", // Collection of papers
      link: "/bulletins"
    },  {
      title: "How To Know If You're REALLY Saved",
      image: "/api/placeholder/600/400", // Pier with water
      link: "/salvation"
    },
    {
      title: "Must Have: Bible Reading Plan",
      image: "/api/placeholder/600/400", // Interior with couch
      link: "/bible-plan"
    },
    {
      title: "Church Bulletins {100+ Pages}",
      image: "/api/placeholder/600/400", // Collection of papers
      link: "/bulletins"
    }
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector('.resource-card');
      if (card) {
        const cardWidth = card.offsetWidth + 16; // Include margin
        container.scrollLeft += direction * cardWidth;
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      <div className="min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 md:mb-16">
          New? Start Here
        </h1>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll(-1)}
            className="hidden sm:flex shrink-0 items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:scale-105 transition-transform"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
          >
            <div className="flex gap-4">
              {resources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.link}
                  className="resource-card flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.333rem)] lg:w-[calc(25%-1.5rem)] snap-start"
                >
                  <div className="h-full overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="relative md:aspect-[3/4] overflow-hidden">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h2 className="text-base md:text-lg font-semibold text-gray-900 text-center">
                        {resource.title}
                      </h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll(1)}
            className="hidden sm:flex shrink-0 items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:scale-105 transition-transform"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="sm:hidden flex justify-center gap-4 mt-4">
          <button
            onClick={() => handleScroll(-1)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleScroll(1)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartHereSection;