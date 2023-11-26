import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export async function TextToMarkdownArticle(text: string) {
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role: "user",
            content:
                "与えられた英文を日本語に翻訳してください。そして翻訳後のテキスト全文をMarkdownで記述された技術記事のような形式で返答してください。記事を作成する際には、複数の章を適切に作成してください。また元のテキストの順番はあまり変更しないで",
        },
        {
            role: "system",
            content:
                "You are a helpful assistant designed to output as Markdwon like ```markdwon \n```"
        },
        { role: "assistant", content: text },
    ];
    let stream = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: messages
    });
    console.log(stream.usage?.total_tokens);
    return stream.choices[0];
}