import React from 'react';

const ProfileSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-28">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-12">
        {/* Content Section */}
        <div className="flex-1 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cookie Anderson
            <span className="block text-xl md:text-2xl font-normal text-gray-600 mt-4">
              Senior Baker Engineer
            </span>
          </h1>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-gray-900 to-gray-500 my-5"/>
          
          <p className="text-xl md:text-1xl text-gray-700 leading-relaxed mb-6">
            A passionate software engineer with over 8 years of experience in building scalable web applications 
            and leading development teams. Specializing in React, Node.js, and cloud architecture, I focus on 
            creating elegant solutions to complex problems.
          </p>
          
          <p className="text-xl md:text-1xl text-gray-700 leading-relaxed">
            Currently working on revolutionizing financial technology through innovative solutions, 
            I combine technical expertise with a deep understanding of user needs to deliver exceptional 
            digital experiences.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex-shrink-0">
          <div className="relative h-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuFaUe2_OoBJc8oDKmWRjfRIZesuf2morSA&s"
              alt="Profile"
              className="rounded-xl object-cover w-full h-full shadow-2xl"
            />
            <div className="absolute inset-0 rounded-xl border-2 border-gray-200 transform translate-x-2 translate-y-2 -z-10"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;