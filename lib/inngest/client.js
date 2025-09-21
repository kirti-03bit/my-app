import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "my-app", // Unique app ID
  name: "my-app",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
