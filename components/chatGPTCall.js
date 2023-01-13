import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export const completionFunction = async (prompt) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(prompt),
    temperature: 0.9,
    max_tokens: 2048,
  });
    
    

  return completion;
};

function generatePrompt(prompt) {
  const capitalizedprompt =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return prompt;
}
