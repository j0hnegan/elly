import { useEffect, useRef, useState, useMemo } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import type { Message, Participants } from '../types';

interface MessageListProps {
  messages: Message[];
  participants: Participants;
}

// Calculate typing duration based on message length
// Short messages: ~1-2 seconds, Long messages: ~3-5 seconds
const getTypingDuration = (text: string): number => {
  const length = text.length;
  if (length < 20) return 1000 + Math.random() * 500; // 1-1.5s for very short
  if (length < 50) return 1500 + Math.random() * 1000; // 1.5-2.5s for short
  if (length < 100) return 2000 + Math.random() * 1500; // 2-3.5s for medium
  if (length < 200) return 3000 + Math.random() * 1500; // 3-4.5s for long
  return 4000 + Math.random() * 1000; // 4-5s for very long
};

// Get random delay between sender changes (max 8 seconds)
const getSenderChangeDelay = (): number => {
  return 1000 + Math.random() * 7000; // 1-8 seconds
};

// Small delay between consecutive messages from the same sender
const getSameSenderDelay = (): number => {
  return 300 + Math.random() * 500; // 0.3-0.8 seconds
};

export default function MessageList({ messages }: MessageListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<string | null>(null);
  const timersRef = useRef<{ delay?: ReturnType<typeof setTimeout>; typing?: ReturnType<typeof setTimeout> }>({});

  // Memoize filtered messages to prevent recreation on every render
  const validMessages = useMemo(
    () => messages.filter(msg => msg.text && msg.text.trim()),
    [messages]
  );

  // Main effect to handle the message sequence
  useEffect(() => {
    // Check if we've shown all messages
    if (visibleCount >= validMessages.length) {
      return;
    }

    const currentMessage = validMessages[visibleCount];
    const prevMessage = visibleCount > 0 ? validMessages[visibleCount - 1] : null;
    const senderChanged = prevMessage && prevMessage.sender !== currentMessage.sender;

    // Calculate initial delay before showing typing indicator
    const initialDelay = visibleCount === 0
      ? 500 // First message - short delay
      : senderChanged
        ? getSenderChangeDelay()
        : getSameSenderDelay();

    // Timer 1: Wait before showing typing indicator
    timersRef.current.delay = setTimeout(() => {
      setTypingSender(currentMessage.sender);
      setIsTyping(true);

      // Calculate how long to show typing indicator based on message length
      const typingDuration = getTypingDuration(currentMessage.text);

      // Timer 2: Show the actual message after typing duration
      timersRef.current.typing = setTimeout(() => {
        setIsTyping(false);
        setTypingSender(null);
        setVisibleCount(prev => prev + 1);
      }, typingDuration);
    }, initialDelay);

    return () => {
      if (timersRef.current.delay) clearTimeout(timersRef.current.delay);
      if (timersRef.current.typing) clearTimeout(timersRef.current.typing);
    };
  }, [visibleCount, validMessages]);

  // Auto-scroll to bottom when new messages appear or typing indicator shows
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [visibleCount, isTyping]);

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
        {validMessages.slice(0, visibleCount).map((message, index) => {
          const prevMessage = index > 0 ? validMessages[index - 1] : null;
          const senderChanged = prevMessage ? prevMessage.sender !== message.sender : false;
          const isNewMessage = index === visibleCount - 1;
          return (
            <div
              key={message.id}
              className={isNewMessage ? 'message-appear' : ''}
            >
              <MessageBubble
                message={message}
                sender={message.sender}
                addTopMargin={senderChanged}
              />
            </div>
          );
        })}
        {isTyping && typingSender && (
          <div className="message-appear">
            <TypingIndicator sender={typingSender} />
          </div>
        )}
      </div>
    </div>
  );
}
