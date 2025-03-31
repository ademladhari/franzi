import React, { useState } from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';
import shen from '../assets/shenminded.png';
import { Link, useLocation } from 'react-router-dom';
import EndlessScroll from './EndlessScrolling';

const ReferenceSection = ({ references, isCollapsed = true }) => {
  if (isCollapsed) return null;

  return (
    <div className="mb-9 w-[90%] rounded-lg">
      <h3 className="mb-2 mt-1 text-[2vh] font-semibold text-teal-50 dark:text-teal-900">
        References
      </h3>
      <div className="text-[2vh] space-y-6 text-teal-100 dark:text-teal-800">
        {references.map((section, index) => (
          <div key={index} className="space-y-1">
            <p className="font-medium">{section.title}</p>
            {section.refs.map((ref, refIndex) => (
              <div key={refIndex} className="ml-4">
                {refIndex + 1}.{' '}
                <a 
                  href={ref} 
                  className=" hover:underline break-all"
                >
                  {ref}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const location = useLocation();
  const text = location.state?.text;
  const references = location.state?.ref;
  const images = location.state?.images;
  const title = location.state?.title;

  if (!text || !references) return null;
  
  const [isCollapsed, setIsCollapsed] = useState(true);

  function convertToBold(text) {
    return text.replace(
      /\*\*(.*?)\*\*/g, 
      '<span class="font-bold text-[2.3vh] ">$1</span>'
    );
  }
  
  const result = convertToBold(text);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center overflow-x-hidden mt-16 transition-colors bg-gray-100 duration-300">
    
      <div className="justify-top scrollbar-hide mx-auto mt-[0%] flex h-[full] w-[80%] flex-col items-center overflow-auto overflow-y-auto rounded-3xl  sm:w-[95%] md:w-[80%] transition-colors duration-300">
      <h1 className="mt-32 mb-12 text-center align-text-top text-[2vh] font-bold md:text-[3vh] lg:text-[3vh] xl:text-[3vh] text-[dark] ">
      {title}
        </h1>
        <div 
  className="w-[90%] max-w-5xl whitespace-pre-wrap break-words text-[1.5vh] text-justify md:text-[2vh] lg:text-[2vh] xl:text-[2.4vh] [&>p]:mb-[3vh]"
  dangerouslySetInnerHTML={{ __html: result }} 
/>

<div className="mt-[7%]  w-[60%] rounded-full border-b-[6px] border-gray-400 " />

        <EndlessScroll images={images} />
        <div className="mt-[7%]  w-[60%] rounded-full border-b-[6px] border-gray-400 " />

        <div className="flex w-[90%] mt-[7%] mb-[7%] max-w-5xl flex-row justify-start">
          <button
            onClick={toggleCollapse}
            className="mb-[1%] mt-4 flex gap-2 w-full rounded bg-slate-200 p-0 py-2 px-4 text-lg  transition-colors duration-300"
          >
            <div className="my-auto">
              <RxDoubleArrowDown className={`transform transition-transform duration-300 ${
                !isCollapsed ? 'rotate-180' : ''
              }`} />
            </div>
            {isCollapsed ? 'Show References' : 'Hide References'}
          </button>
        </div>

        <ReferenceSection references={references} isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default Home;