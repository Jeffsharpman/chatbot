export type chatmessageProps = {
  id: string;
  message: string;
  time: string;
  sender: string;
};
export const defaultChatMessages: chatmessageProps[] = [
  {
    id: "1",
    message: "Hi",
    time: "21:24",
    sender: "user",
  },
  {
    id: "2",
    message: "Hey. I&apos;m Sharp. What can I help you with?",
    time: "21:24",
    sender: "bot",
  },
  {
    id: "3",
    message: " What can you do",
    time: "21:25",
    sender: "user",
  },
  {
    id: "4",
    message: "I can help you:",
    time: "21:25",
    sender: "bot",
  },
  {
    id: "11",
    message: " What else",
    time: "21:25",
    sender: "user",
  },
  {
    id: "41",
    message: "A few less obvious things:",
    time: "21:25",
    sender: "bot",
  },
];
