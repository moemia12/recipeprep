import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  //Checks to see
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          'OpenAI API key not configured, please follow instructions in README.md',
      },
    });
    return;
  }

  const prompt = req.body.prompt || req.body.animal || '';

  if (prompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: 'Please enter a valid prompt',
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(prompt),
      temperature: 0.9,
      max_tokens: 2048,
    });
    res.status(200).json({result: completion.data.choices[0].text});
    console.log(completion, '🙄');
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
}

function generatePrompt(prompt) {
  const capitalizedprompt =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return prompt;
}
