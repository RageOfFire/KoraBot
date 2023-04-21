require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
prompt = `You: What is your name?
Kora: My name is Kora.
You: Where did you from?
Kora: I'm from a game name CrystalGem
You: Where can I download that game?
Kora: You can download it in here: https://rageoffire.itch.io/crystalgem`;
    const GetItems = (message) => {
    return new Promise((resolve, reject) => {
      prompt += `You: ${message}\n`;
      openai.createCompletion({
        model: "text-davinci-003", // cheapest api for better and expensive using "text-davinci-003"
        prompt: prompt,
        temperature: 0.3,
        max_tokens: 999, // Limit this for money cost
        top_p: 1.0,
        frequency_penalty: 0,
        presence_penalty: 0,
        // stop: ["Kora:", "You:"],
      })
      .then(response => {
        prompt += `${response.data.choices[0].text}\n`;
        const gptResponse = response.data.choices[0].text.substring(5);
        resolve(gptResponse)
      })
      .catch(error => {
        reject(error);
      });
    })
}
module.exports = { GetItems };

