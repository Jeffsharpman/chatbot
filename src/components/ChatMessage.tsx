import type { chatmessageProps } from "../data/defaultMessages";

type ChatMessageProps = {
  chatMessage: chatmessageProps;
};

const ChatMessage = ({
  chatMessage: { message, sender, time },
}: ChatMessageProps) => {
  // const message = chatMessage.message;
  // const sender = chatMessage.sender;
  // const time = chatMessage.time;
  return (
    <>
      {sender === "user" ? (
        <section className="flex flex-col items-end">
          <div className="rounded-[1.65rem] rounded-tr-md bg-primary px-5 py-3.5 text-base text-primary-foreground shadow-[0_8px_28px_var(--color-primary-glow)]">
            {message}
          </div>
          <time className="mt-2 mr-1 text-xs text-muted-foreground">
            {time}
          </time>
        </section>
      ) : (
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
            <p className="text-[17px] leading-7">{message}</p>
            <p className="mt-2 text-xs text-muted-foreground">Sharp · {time}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default ChatMessage;
