import React from 'react';

const MusicControls = () => {
  return (
    <div className="flex space-x-4 items-center">
      <button className="text-gray-500 hover:text-gray-700">1x</button>
      <button className="text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6   
 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75   
 19.25l-7.5-7.5 7.5-7.5" />
        </svg>
      </button>
      <button className="text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6   
 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5   
 19.5L8.25 12l11.25-7.5" />
        </svg>
      </button>
      <button className="text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6   
 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75   
 19.25l-7.5-7.5 7.5-7.5" />
        </svg>
      </button>
      <button className="text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6   
 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5   
 18.75l-7.5-7.5 7.5-7.5" />
        </svg>
      </button>
    </div>
  );
};

export default MusicControls;
