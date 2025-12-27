import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import type { Message, Participants } from '../types';

interface MessageListProps {
  messages: Message[];
  participants: Participants;
}

export default function MessageList({ messages }: MessageListProps) {
  const listRef = useRef<HTMLDivElement>(null);

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
      className="h-full overflow-y-auto pb-4"
      style={{
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        className="pt-10"
        style={{
          paddingBottom: `calc(1rem + env(safe-area-inset-bottom))`,
        }}
      >
        {validMessages.map((message, index) => {
          const prevMessage = validMessages[index - 1];
          const senderChanged = prevMessage && prevMessage.sender !== message.sender;
          return (
            <MessageBubble
              key={message.id}
              message={message}
              sender={message.sender}
              addTopMargin={senderChanged}
            />
          );
        })}
      </div>
    </div>
  );
}
