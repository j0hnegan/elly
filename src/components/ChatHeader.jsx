export default function ChatHeader({ title, subtitle }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 pt-[env(safe-area-inset-top)]">
      <div className="flex items-center h-14 px-4">
        <div className="flex items-center justify-center w-8 h-8 mr-2">
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
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-gray-900">{title || 'Elly'}</h1>
          {subtitle && (
            <p className="text-xs text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

