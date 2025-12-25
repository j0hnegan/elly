import conversationData from './data/conversation.json';
import PhoneFrame from './components/PhoneFrame';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';

function App() {
  const conversation = conversationData;

  // Chat content component (used in both mobile and desktop)
  const ChatContent = () => (
    <div className="flex flex-col h-full w-full bg-white">
      <ChatHeader
        title={conversation.meta?.title}
        subtitle={conversation.meta?.subtitle}
      />
      <MessageList
        messages={conversation.messages || []}
        participants={conversation.meta?.participants || {}}
      />
    </div>
  );

  return (
    <>
      {/* Mobile view - full screen */}
      <div className="md:hidden fixed inset-0 w-screen h-screen bg-white overflow-hidden">
        <div className="w-full h-full flex flex-col">
          <ChatContent />
        </div>
      </div>

      {/* Desktop view - phone frame */}
      <PhoneFrame>
        <ChatContent />
      </PhoneFrame>
    </>
  );
}

export default App;

