import React from 'react';

const PerspectiveGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F5EEDF] ">
      {/* This is a visual divider, creating the main diagonal line.
        We'll use a rotated/skewed border or div to achieve the perspective effect.
        The image provided uses diagonal lines (skewed rectangles).
      */}
      <div 
        className="absolute top-0 right-0 h-full w-1/2 
                   border-l-2 border-black bg-white/50 
                   transform origin-bottom-left skew-x-[-15deg]"
      >
        {/* We can use another skewed line to enhance the illusion */}
      </div>

      <div className="relative z-10 p-12 h-full">
        {children}
      </div>
    </div>
  );
};
export default PerspectiveGrid;