import { chatStore } from "../store/chatStore";

export const useChat = () => {
  const message = chatStore((state) => state.message);
  const setMessage = chatStore((state) => state.setMessage);
  const chatMessages = chatStore((state) => state.chatMessages);
  const setChatMessages = chatStore((state) => state.setChatMessages);
  const isBotLoading = chatStore((state) => state.isBotLoading);
  const clearChatHistory = chatStore((state) => state.clearChatHistory);
  const setIsBotLoading = chatStore((state) => state.setIsBotLoading);

  const addNewMessage = async (messageToSend: string) => {
    if (messageToSend.trim() === "" || isBotLoading) {
      return;
    }

    const newUserMessage = {
      id: crypto.randomUUID(),
      message: messageToSend,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "user",
    };

    setMessage("");
    setChatMessages(newUserMessage);
    setIsBotLoading(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: messageToSend }),
      });

      // Read response as text first to prevent JSON.parse crashes on HTML/empty responses
      const rawText = await response.text();
      let data;

      try {
        data = JSON.parse(rawText);
      } catch (e) {
        // If it's not JSON, it's likely an HTML error page or raw server error
        throw new Error(
          rawText ? rawText.slice(0, 150) : `Server error (${response.status})`,
        );
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response from chatbot.");
      }

      const newBotMessage = {
        id: crypto.randomUUID(),
        message: data.text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: "bot",
      };

      setChatMessages(newBotMessage);
    } catch (error) {
      console.error("AI Error", error);
      const errorMessage = {
        id: crypto.randomUUID(),
        message:
          error instanceof Error
            ? error.message
            : "Sorry, something went wrong. Please try again.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: "bot",
      };
      setChatMessages(errorMessage);
    } finally {
      setIsBotLoading(false);
    }
  };

  return {
    message,
    setMessage,
    chatMessages,
    setChatMessages,
    isBotLoading,
    setIsBotLoading,
    clearChatHistory,
    addNewMessage,
  };
};
