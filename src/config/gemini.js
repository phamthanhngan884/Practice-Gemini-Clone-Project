const apiKey = "AIzaSyDtuvnYQo_JflUJFgCRpdA_BzLwBfEgzMg";  // Đặt trực tiếp API Key ở đây

import{
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";




async function run(prompt) {
  const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt.toString());
  console.log(result.response.text());
  return result.response.text();
}


export default run;
