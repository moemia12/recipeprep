const functions = require('firebase-functions');
// const openai = require('openai');
// openai.apiKey = process.env.OPENAI_API_KEY; // 
// Create and deploy your first functions // 
// https://firebase.google.com/docs/functions/get-started 

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

exports.webhook = functions.https.onRequest((req, res) => {
    res.send('Hello');
    console.log('hello webhook')
});


// exports.openAiFunction = functions.https.onRequest(async (request, response) => {
//     // Checks to see if the API key is configured 
//     if (!openai.apiKey) {
//         response.status(500).json({
//             error: { message: "OpenAI API key not configured, follow instructions in README.md", },
//         });
//         return;
//     }
//     const prompt = request.body.prompt || "";
//     if (prompt.trim().length === 0) {
//         response.status(400).json({
//             error: { message: "Please enter a valid prompt", },
//         });
//         return;
//     } try {
//         const completion = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: generatePrompt(prompt),
//             temperature: 0.9,
//             max_tokens: 2048,
//         });
//             response.status(200).json({
//             result: completion.data.choices[0].text
//         });
//         console.log(completion);
//     } catch (error) {
//         // Consider adjusting the error handling logic for your use case 
//         if (error.response) {
//             console.error(error.response.status, error.response.data);
//             response.status(error.response.status).json(error.response.data);
//         } else {
//             console.error(`Error with OpenAI API request: ${error.message}`);
//             response.status(500).json({
//                 error: { message: "An error occurred during your request.", },
//             });
//         }
//     }
// });

// function generatePrompt(prompt) {
//     return prompt;
// }
// // The Firebase Admin SDK to access Firestore. 
// const admin = require("firebase-admin");
// const serviceAccount = require('/Users/mohsinmiah/Desktop/RecipePrep/recipeprep-firebase-adminsdk-xc0uz-c55a83ff0f.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
