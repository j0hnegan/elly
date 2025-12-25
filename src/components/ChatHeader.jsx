export default function ChatHeader({ title, onBack }) {
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 pt-[24px]">
      <div className="flex items-center h-14 px-4">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-8 h-8 mr-2"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="w-9 h-9 rounded-full overflow-hidden mr-2 flex-shrink-0">
          <img
            src="/images/elly.png"
            alt="Elly"
            className="w-full h-full"
          />
        </div>
        <h1 className="text-lg font-semibold text-gray-900">{title || 'Elly'}</h1>
      </div>
    </div>
  );
}
