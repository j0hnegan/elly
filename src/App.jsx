import { useState } from 'react';
import conversationData from './data/conversation.json';
import PhoneFrame from './components/PhoneFrame';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import StartScreen from './components/StartScreen';

function App() {
  const conversation = conversationData;
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
  };

  const handleBack = () => {
    setShowChat(false);
  };

  const content = (
    <div className="relative h-full w-full overflow-hidden">
      {/* Start Screen */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-out ${
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
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile view - full screen */}
      <div className="md:hidden fixed inset-0 w-screen h-screen bg-white overflow-hidden">
        <div className="w-full h-full flex flex-col">
          {content}
        </div>
      </div>

      {/* Desktop view - phone frame */}
      <PhoneFrame>
        {content}
      </PhoneFrame>
    </>
  );
}

export default App;
