export default function PhoneFrame({ children }) {
  return (
    <div className="hidden md:flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="relative w-full max-w-[375px] h-[812px] bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Notch simulation */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
        
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {children}
        </div>
      </div>
    </div>
  );
}

