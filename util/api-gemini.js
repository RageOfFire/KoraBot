const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const { parts } = require("./gameplay.js")
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

async function GetItems(message) {

  const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 200,
    responseMimeType: "text/plain",
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];

  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: parts
      },
    ],
  });

  const result = await chatSession.sendMessage(message);
  return result.response.text();
}

module.exports = { GetItems };