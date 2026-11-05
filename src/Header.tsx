import { useChat } from "./hooks/useChat";

const Header = () => {
  const { clearChatHistory } = useChat();
  return (
    <header className="sticky top-0 z-10 flex h-18.5 items-center justify-between border-b border-border bg-background/95 px-5 backdrop-blur sm:px-8">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_24px_var(--color-primary-glow)]">
          <svg
            viewBox="0 0 24 24"
            className="size-6 fill-current"
            aria-hidden="true"
          >
            <path d="M13.1 1.8 4.6 13h5.7l-.8 9.2L19.5 10h-6l-.4-8.2Z" />
          </svg>
        </div>
        <span className="text-xl font-semibold tracking-tight">
          Sharpman <span className="text-primary">AI</span>
        </span>
      </div>

      <div className="flex items-center gap-5">
        {/* <button
          type="button"
          aria-label="New chat"
          className="rounded-full p-1 text-muted-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </button> */}
        <button
          type="button"
          aria-label="Send message"
          className="px-2 py-1 rounded-sm bg-primary hover:bg-primary-glow text-primary-foreground transition-all 200s"
          onClick={clearChatHistory}
        >
          New Chat
        </button>
        <button
          type="button"
          aria-label="Appearance"
          className="rounded-full p-1 text-muted-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="3.5" />
            <path
              d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
