import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
    const stream = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": "Who won the world series in 2020?" },
            { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
            { "role": "user", "content": "Where was it played?" }
        ]

    });
    console.log(stream.choices[0].message);
}

main();