// components/Hero/GenerateButton.tsx
import React from 'react';

const GenerateButton = () => {
  const handleGenerate = () => {
    // 💡 DEMO FULLSTACK SKILL: 
    // Show a loading state, then call an internal API route!
    console.log("Calling Next.js API route to start generation...");
    // Example: fetch('/api/generate-character', { method: 'POST' });
  };

  return (
    <button
      onClick={handleGenerate}
      className="w-32 h-32 rounded-full bg-black text-white text-sm font-bold uppercase tracking-wider 
                 flex items-center justify-center border-2 border-white 
                 hover:bg-gray-800 transition-colors"
    >
      <div className="animate-pulse">
        Start <br/> Generate
      </div>
    </button>
  );
};
export default GenerateButton;