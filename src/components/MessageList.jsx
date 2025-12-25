import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

export default function MessageList({ messages, participants }) {
  const listRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to top on initial load
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, []);

  // Filter out empty messages
  const validMessages = messages.filter(msg => msg.text && msg.text.trim());

  return (
    <div
      ref={listRef}
      className="flex-1 overflow-y-auto pb-4"
      style={{
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div 
        className="pt-20"
        style={{
          paddingBottom: `calc(1rem + env(safe-area-inset-bottom))`,
        }}
      >
        {validMessages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            sender={message.sender}
          />
        ))}
      </div>
    </div>
  );
}

