export default function PhoneFrame({ children }) {
  return (
    <div className="hidden md:flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10">
      <div className="relative w-full max-w-[375px] h-[calc(100vh-80px)] max-h-[812px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
        {children}
      </div>
    </div>
  );
}

