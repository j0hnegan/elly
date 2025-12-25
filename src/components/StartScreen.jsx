import React from 'react';

function StartScreen({ onStartChat }) {
  return (
    <div className="relative h-full w-full bg-[#FFC629] px-6">
      {/* Title - 96px from top */}
      <h1 className="absolute top-[96px] left-0 right-0 text-center text-4xl font-extrabold text-black tracking-tight">
        YOU MATCHED!
      </h1>

      {/* Photos container - 40px below header */}
      <div className="absolute top-[160px] left-0 right-0 flex justify-center items-center">
        {/* Left photo (John) */}
        <img
          src="/images/john.png"
          alt="John"
          className="relative z-10 -rotate-6 -mr-8 w-44 h-52 object-cover rounded-2xl border-[6px] border-white shadow-lg"
        />

        {/* Right photo (Elly) */}
        <img
          src="/images/elly.png"
          alt="Elly"
          className="relative z-10 rotate-6 -ml-8 w-44 h-52 object-cover rounded-2xl border-[6px] border-white shadow-lg"
        />

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

      {/* Button - 80px from bottom */}
      <div className="absolute bottom-[80px] left-0 right-0 flex justify-center">
        <button
          onClick={onStartChat}
          className="px-12 py-4 bg-[#FFF4D9] text-[#C4960C] font-semibold text-[20px] rounded-full shadow-md hover:bg-[#FFEFCC] transition-colors"
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
