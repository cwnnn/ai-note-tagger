import "dotenv/config";
import { OpenRouter } from "@openrouter/sdk";

export const model = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function generateContent(message) {
  const stream = await model.chat.send({
    model: process.env.AI_MODEL,
    messages: [{ role: "user", content: message }],
    stream: false,
  });

  return stream.choices[0].message.content;
}
