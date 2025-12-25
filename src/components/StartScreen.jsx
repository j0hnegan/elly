import React from 'react';

function StartScreen({ onStartChat }) {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full bg-[#FFC629] py-12 px-6">
      {/* Top section with title and photos */}
      <div className="flex flex-col items-center w-full">
        {/* Title */}
        <h1 className="text-4xl font-black italic text-black tracking-tight mb-8">
          YOU MATCHED!
        </h1>

        {/* Photos container */}
        <div className="relative flex justify-center items-center w-full mt-4">
          {/* Left photo (John) */}
          <div className="relative z-10 -rotate-6 -mr-8">
            <div className="w-44 h-52 bg-white p-1.5 rounded-2xl shadow-lg">
              <img
                src="/images/john.jpg"
                alt="John"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right photo (Elly) */}
          <div className="relative z-10 rotate-6 -ml-8">
            <div className="w-44 h-52 bg-white p-1.5 rounded-2xl shadow-lg">
              <img
                src="/images/elly.jpg"
                alt="Elly"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Heart icon */}
          <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8">
            <div className="w-20 h-20 bg-[#FFD54F] rounded-full flex items-center justify-center shadow-md">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with button */}
      <div className="w-full flex justify-center mt-auto pt-16">
        <button
          onClick={onStartChat}
          className="px-12 py-4 bg-[#FFF4D9] text-[#C4960C] font-semibold text-lg rounded-full shadow-md hover:bg-[#FFEFCC] transition-colors"
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
