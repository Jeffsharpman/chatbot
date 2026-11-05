export const getAiResponse = async (userMessage: string) => {
  const response = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userMessage }),
  });

  if (!response.headers.get("content-type")?.includes("application/json")) {
    throw new Error(
      response.status === 404 || response.ok
        ? "Chat function not found. Use Netlify Dev locally or redeploy the Netlify site."
        : `Chat service returned HTTP ${response.status}.`,
    );
  }
 
  const result = (await response.json()) as { 
    text?: unknown;
    error?: unknown;
  };

  if (!response.ok || typeof result.text !== "string") {
    throw new Error(
      typeof result.error === "string" ? result.error : "AI request failed",
    );
  }

  return result.text;
};
