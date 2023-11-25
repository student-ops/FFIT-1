import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
    const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-1106',
        response_format: { "type": 'json_object' },
        messages: [{ role: 'user', content: 'Say this is a test as json like { "message" : string}' }],
    });
    console.log(stream.choices[0].message);
}

main();