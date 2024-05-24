const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

async function GetItems(message) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});

  const result = await model.generateContent(message);
  return result.response.text();
}

module.exports = { GetItems };