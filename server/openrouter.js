import "dotenv/config";
import { OpenRouter } from "@openrouter/sdk";

export const model = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Fonksiyon: mesaj alıp cevap döndür
export async function generateContent(message) {
  const stream = await model.chat.send({
    model: "deepseek/deepseek-r1-0528:free",
    messages: [{ role: "user", content: message }],
    stream: false, // stream istemiyorsan false yap
  });

  // stream: false ise direkt yanıt alırsın
  return stream.choices[0].message.content;
}
