import { YoutubeTranscript } from 'youtube-transcript';
import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});


async function main() {
    const variableName = ""; // Replace variableName with your desired variable name

    const response = await YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=-cn3MAovsN4');
    // console.log(response)

    let whole_text = "";
    response.forEach((element: { text: string }) => {
        whole_text += element.text;
    });

    console.log(whole_text);
    console.log(whole_text.length.toString());
    // count whole_text word count
    console.log("subtile num of words " + whole_text.split(" ").length.toString());
    const stream = await openai.chat.completions.create({
        model: 'gpt-4-1106-preview',
        messages: [
            // { "role": "user", "content": "Please translate the subtitles of the given English video into Japanese 与えられた英語の字幕を日本語に訳して. Then reply as an article described as mark donw. Again, please reply in md format." },
            { "role": "user", "content": "与えられた英文を日本語に翻訳してください。そして翻訳後のテキスト全文をmarkdonw として返答してください。繰り返しますがmarkdown として記述して" },
            { "role": "assistant", "content": whole_text }
        ],
    });
    console.log(stream.choices[0].message.content);
}

main()
