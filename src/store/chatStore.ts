import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { chatmessageProps } from "../data/defaultMessages";

type chatStoreProps = {
  message: string;
  setMessage: (message: string) => void;

  chatMessages: chatmessageProps[];
  setChatMessages: (message: chatmessageProps) => void;

  isBotLoading: boolean;
  setIsBotLoading: (loading: boolean) => void;

  clearChatHistory: () => void;
};
export const chatStore = create<chatStoreProps>()(
  persist(
    (set) => ({
      message: "",
      setMessage: (message) => {
        set({ message: message });
      },
      chatMessages: [],
      setChatMessages: (message) =>
        set((state) => ({
          chatMessages: [...state.chatMessages, message],
        })),
        
      isBotLoading: false,
      setIsBotLoading: (loading) => {
        set({
          isBotLoading: loading,
        });
      },
      clearChatHistory: () => {
        set({ chatMessages: [], isBotLoading: false });
      },
    }),
    {
      name: "sharpman-chat-storage",
      partialize: (state) => ({ chatMessages: state.chatMessages }),
    },
  ),
);
