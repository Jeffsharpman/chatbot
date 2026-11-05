import { type KeyboardEvent } from "react";
import { useChat } from "../hooks/useChat";

const Footer = () => {
  const {message, setMessage} = useChat();
  const { addNewMessage } = useChat();
 
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addNewMessage(message);
    }
  };
  return (
    <footer className="fixed inset-x-0 bottom-0 z-20 bg-linear-to-t from-background via-background to-transparent px-3 pb-4 pt-8 sm:px-5">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-primary/80 bg-card p-4 shadow-[0_0_0_1px_var(--color-primary-glow)] sm:p-5">
          {/* <div className="min-h-12 text-base text-muted-foreground">
            Ask Sharp anything...
          </div> */}
          <textarea
            className="min-h-12 w-full resize-none bg-transparent text-base text-muted-foreground placeholder:text-muted-foreground border-0 outline-none focus:ring-0"
            placeholder="Ask Sharp anything..."
            value={message}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div className="flex items-center justify-between pt-3">
            <p className="text-xs text-muted-foreground">
              Enter to send · Shift+Enter for new line
            </p>
            <button
              type="button"
              aria-label="Send message"
              className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
              onClick={() => addNewMessage(message)}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  d="M5 12h13m-5-5 5 5-5 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
