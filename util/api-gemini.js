const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
// const { textgame, chatbot } = require("./history.js")
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
  generationConfig: {
  candidateCount: 1,
  // stopSequences: ["x"],
  maxOutputTokens: 2000,
  temperature: 2.0,
}, });

async function GetItems(message) {

  // const generationConfig = {
  //   temperature: 2,
  //   topP: 0.95,
  //   topK: 64,
  //   maxOutputTokens: 2000,
  //   responseMimeType: "text/plain",
  // };

  // const safetySettings = [
  //   {
  //     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  //     threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  //   },
  //   {
  //     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  //     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  //   },
  //   {
  //     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  //     threshold: HarmBlockThreshold.BLOCK_NONE,
  //   },
  //   {
  //     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  //     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  //   },
  // ];

  // const chatSession = model.startChat({
  //   generationConfig,
  //   safetySettings,
  //   history: [
  //     {
  //       role: "user",
  //       parts: chatbot
  //     },
  //   ],
  // });

  // const result = await chatSession.sendMessage(message);
  const result = await model.generateContent(message);
  return result.response.text();
}

module.exports = { GetItems };