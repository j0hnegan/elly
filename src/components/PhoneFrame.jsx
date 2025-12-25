export default function PhoneFrame({ children }) {
  return (
    <div className="hidden md:flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-6">
      <div className="relative h-[calc(100vh-48px)] max-h-[812px] aspect-[375/812] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
        {children}
      </div>
    </div>
  );
}

