import React, { useState, useEffect } from 'react';

function StartScreen({ onStartChat }) {
  const [showHeader, setShowHeader] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Staggered animations
    const headerTimer = setTimeout(() => setShowHeader(true), 100);
    const imagesTimer = setTimeout(() => setShowImages(true), 600);    // 0.5s after header
    const heartTimer = setTimeout(() => setShowHeart(true), 850);     // 0.25s after images
    const buttonTimer = setTimeout(() => setShowButton(true), 1350);  // 0.5s after heart

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(imagesTimer);
      clearTimeout(heartTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="relative h-full w-full bg-[#FFC629] px-6">
      {/* Title */}
      <h1
        className={`absolute top-[96px] left-0 right-0 text-center text-4xl font-extrabold text-black tracking-tight transition-all duration-700 ease-out ${
          showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        YOU MATCHED!
      </h1>

      {/* Photos container - uses padding-bottom to maintain aspect ratio */}
      <div className="absolute top-[160px] left-0 right-0">
        {/* Spacer to set container height based on image size */}
        <div className="w-[calc(50%+20px)] aspect-square" />

        {/* Left photo (John) */}
        <img
          src="/images/john.png"
          alt="John"
          className={`absolute left-[20px] top-0 z-10 w-[calc(50%+20px)] aspect-square transition-all duration-[600ms] ease-out ${
            showImages
              ? 'opacity-100 scale-100 -rotate-6'
              : 'opacity-0 scale-90 rotate-0'
          }`}
        />

        {/* Right photo (Elly) */}
        <img
          src="/images/elly.png"
          alt="Elly"
          className={`absolute right-[20px] top-0 z-10 w-[calc(50%+20px)] aspect-square transition-all duration-[600ms] ease-out ${
            showImages
              ? 'opacity-100 scale-100 rotate-6'
              : 'opacity-0 scale-90 rotate-0'
          }`}
        />

        {/* Heart icon - positioned at bottom center of images */}
        <div className="absolute z-20 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
          <div
            className={`w-16 h-16 bg-[#FFD54F] rounded-full flex items-center justify-center shadow-md transition-all duration-500 ease-out ${
              showHeart ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="absolute bottom-[80px] left-0 right-0 flex justify-center">
        <button
          onClick={onStartChat}
          className={`px-12 py-4 bg-[#FFF4D9] text-[#C4960C] font-semibold text-[20px] rounded-full hover:bg-[#FFEFCC] transition-all duration-500 ease-out ${
            showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
