export default function MessageBubble({ message, sender }) {
  const isElly = sender === 'elly';
  
  // Format text to preserve newlines
  const formatText = (text) => {
    if (!text) return '';
    return text.split('\n').map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div
      className={`flex ${isElly ? 'justify-start' : 'justify-end'} mb-2 px-4`}
    >
      <div
        className={`max-w-[75%] px-4 py-2.5 ${
          isElly
            ? 'bg-gray-100 text-gray-900 rounded-[18px] rounded-tl-[4px]'
            : 'bg-[#FFCD1F] text-gray-900 rounded-[18px] rounded-tr-[4px]'
        }`}
      >
        <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">
          {formatText(message.text)}
        </p>
      </div>
    </div>
  );
}

