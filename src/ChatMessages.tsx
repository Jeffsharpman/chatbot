import { useChat } from "../hooks/useChat";
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
  const { chatMessages, isBotLoading, addNewMessage } = useChat();
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 pb-48 pt-8 sm:px-8">
      {chatMessages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full px-4 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            How can I help you today?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Ask me anything. I’m Sharpman’s AI — sharp, honest, and a little
            witty.
          </p>

          {/* Suggested Questions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
            {[
              "What can you do?",
              "Tell me something interesting",
              "Help me make a decision",
              "Explain something complex simply",
            ].map((cm) => (
              <button
                key={cm}
                onClick={() => {
                  addNewMessage(cm);
                  // Optional: automatically send it
                  // handleSend(question);
                }}
                className="px-4 py-3 text-left rounded-xl border border-orange-500/30 
                     bg-orange-500/10 hover:bg-orange-500/20 text-gray-200 
                     transition-all duration-200 hover:scale-[1.02]"
              >
                {cm}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          {chatMessages.map((chatMessage) => (
            // <ChatMessage key={chatMessage.id} chatMessage={chatMessage} />
            <></>
          ))}
        </>
      )}

      {isBotLoading && (
        <section className="flex items-start gap-3">
          <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <svg
              viewBox="0 0 24 24"
              className="size-5 fill-current"
              aria-hidden="true"
            >
              <path d="M13.1 1.8 4.6 13h5.7l-.8 9.2L19.5 10h-6l-.4-8.2Z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span>Sharp is thinking...</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Sharp · {new Date().toLocaleTimeString()}
            </p>
          </div>
        </section>
      )}
    </main>
  );
};

export default ChatMessages;
