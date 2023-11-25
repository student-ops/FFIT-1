import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';

import * as fs from 'fs';

// ファイルを非同期的に読み込む
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
    let fileContent: string;
    try {
        fileContent = fs.readFileSync('src/server/samples/subtitle.txt', 'utf-8');
    } catch (err) {
        console.error("ファイルの読み込み中にエラーが発生しました:", err);
        return '';  // エラーが発生した場合は空の文字列を返す
    }
    console.log(fileContent);
    const stream = await openai.chat.completions.create({
        model: 'gpt-4-1106-preview',
        messages: [
            // { "role": "user", "content": "Please translate the subtitles of the given English video into Japanese 与えられた英語の字幕を日本語に訳して. Then reply as an article described as mark donw. Again, please reply in md format." },
            { "role": "user", "content": "与えられた英文を日本語に翻訳してください。そして翻訳後のテキスト全文をmarkdonw として返答してください。繰り返しますがmarkdown として記述して" },
            { "role": "assistant", "content": fileContent }
        ],
    });

}

main()