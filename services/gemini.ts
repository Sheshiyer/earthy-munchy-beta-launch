import { GoogleGenAI, Chat } from "@google/genai";
import { products } from '../data';

let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const createChatSession = (): Chat | null => {
  if (!ai) {
    return null;
  }

  const productCatalog = products.map(p => 
    `- ${p.name} (${p.grade || p.subtitle}): ₹${p.price} for ${p.weight}. ${p.description}. Features: ${p.features.join(', ')}.`
  ).join('\n');

  const systemPrompt = `You are Chef Munchy, the AI culinary expert and brand assistant for Earthy Munchy.

Brand Identity:
- Tagline: "From native roots to global hearts"
- We offer authentic Ceylon Spices (Cinnamon, Cloves) from Sri Lanka and Curated Wild Honey from India.
- Values: Exclusive, Authentic, Hand-Picked.
- Shipping: Free shipping on orders over ₹999.

Product Catalog:
${productCatalog}

Your Role:
1. Answer questions about our specific products, their origins, and health benefits.
2. Suggest recipes that specifically use our ingredients (Cinnamon, Cloves, Honey).
3. Assist with pricing and product selection.
4. Maintain a warm, earthy, and sophisticated tone.
5. If the user asks about unrelated topics, politely steer the conversation back to food, wellness, and our ingredients.

Current Model: gemini-3-pro-preview`;

  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: systemPrompt,
    }
  });
};