interface TypingIndicatorProps {
  sender: string;
}

export default function TypingIndicator({ sender }: TypingIndicatorProps) {
  const isElly = sender === 'elly';

  return (
    <div
      className={`flex ${isElly ? 'justify-start' : 'justify-end'} mb-2 px-4`}
    >
      <div
        className={`px-4 py-3 ${
          isElly
            ? 'bg-gray-100 rounded-[18px] rounded-tl-[4px]'
            : 'bg-[#FFCD1F] rounded-[18px] rounded-tr-[4px]'
        }`}
      >
        <div className="flex items-center gap-1">
          <span
            className="typing-dot w-2 h-2 rounded-full bg-gray-400"
            style={{ animationDelay: '0ms' }}
          />
          <span
            className="typing-dot w-2 h-2 rounded-full bg-gray-400"
            style={{ animationDelay: '150ms' }}
          />
          <span
            className="typing-dot w-2 h-2 rounded-full bg-gray-400"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  );
}
