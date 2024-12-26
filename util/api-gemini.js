const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const { kora } = require("./history.js")
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash",});

async function GetItems(message) {

  const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

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

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: kora},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(message);
  return result.response.text();
}

module.exports = { GetItems };