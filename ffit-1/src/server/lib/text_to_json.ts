import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const jsonObject = {
    message: "string",
    tech_article: {
        title: "string",
        chapter: [
            {
                name: "string",
                text: "string",
            },
        ],
    },
};

export async function TextToJsonArticle(text: string) {
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role: "user",
            content:
                "与えられた英文を日本語に翻訳してください。そして翻訳後のテキスト全文を技術記事のような形式で返答してください。記事を作成する際には、複数の章を適切に作成してください。また元のテキストの順番はあまり変更しないで。",
        },
        {
            role: "system",
            content:
                "You are a helpful assistant designed to output JSON. like this:\n" +
                jsonObject +
                "\n",
        },
        { role: "assistant", content: text },
    ];
    let stream = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        response_format: { type: "json_object" },
        messages: messages
    });
    return stream.choices[0];
}