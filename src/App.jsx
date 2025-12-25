import { useState, useEffect } from 'react';
import conversationData from './data/conversation.json';
import PhoneFrame from './components/PhoneFrame';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import StartScreen from './components/StartScreen';

function App() {
  const conversation = conversationData;
  const [showChat, setShowChat] = useState(false);
  const [showChatHeader, setShowChatHeader] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
    // Staggered fade-in for chat screen
    setTimeout(() => setShowChatHeader(true), 50);
    setTimeout(() => setShowMessages(true), 300); // 0.25s after header
  };

  const handleBack = () => {
    setShowChat(false);
    setShowChatHeader(false);
    setShowMessages(false);
  };

  // Chat content component (used in both mobile and desktop)
  const ChatContent = () => (
    <div className="flex flex-col h-full w-full bg-white">
      <ChatHeader
        title={conversation.meta?.title}
        onBack={handleBack}
      />
      <div className="flex-1 min-h-0 overflow-hidden">
        <MessageList
          messages={conversation.messages || []}
          participants={conversation.meta?.participants || {}}
        />
      </div>
    </div>
  );

  // Main content that switches between start screen and chat
  const MainContent = () => (
    <div className="relative h-full w-full overflow-hidden">
      {/* Start Screen */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          showChat ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <StartScreen onStartChat={handleStartChat} />
      </div>

      {/* Chat Screen */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-out ${
          showChat ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChatContent />
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile view - full screen */}
      <div className="md:hidden fixed inset-0 w-screen h-screen bg-white overflow-hidden">
        <div className="w-full h-full flex flex-col">
          <MainContent />
        </div>
      </div>

      {/* Desktop view - phone frame */}
      <PhoneFrame>
        <MainContent />
      </PhoneFrame>
    </>
  );
}

export default App;
