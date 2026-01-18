import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getRecipeSuggestion = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, my recipe book (API Key) is currently closed. Please check the configuration.";
  }

  try {
    const systemPrompt = `You are Chef Munchy, the AI culinary expert for Earthy Munchy, a premium spice and honey brand. 
    You specialize in creating delightful, simple, and authentic recipes using our products: Ceylon Cinnamon, Ceylon Cloves, and Raw Indian Honey varieties (Tulsi, Lychee, Moringa, Forest, Sundarban).
    
    Your tone should be warm, earthy, and sophisticated but accessible. 
    Always suggest a specific recipe or usage tip involving one or more of our products based on the user's query.
    Keep the response concise (under 150 words) and formatted nicely.
    
    If the user asks about something unrelated to food or spices, politely steer them back to our ingredients.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "I couldn't find a recipe for that, but have you tried sprinkling our Cinnamon on your morning coffee?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "My chef's hat is a bit askew right now. Please try again in a moment.";
  }
};