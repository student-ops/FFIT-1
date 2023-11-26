import { YoutubeTranscript } from "youtube-transcript";
import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";
import fs from "fs";

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

const jsonObjectMD = {
    message: "string",
    tech_article: {
        title: "string",
        body: [
            {
                MarkdownElement: "string",
                text: "string",
            },
        ],
    },
};

async function main() {
    const variableName = ""; // Replace variableName with your desired variable name

    const response = await YoutubeTranscript.fetchTranscript(
        "https://www.youtube.com/watch?v=R7t7zca8SyM"
    );
    // console.log(response)

    let whole_text = "";
    response.forEach((element: { text: string }) => {
        whole_text += element.text;
    });

    console.log(whole_text);
    console.log(whole_text.length.toString());
    // count whole_text word count

    const json_string = JSON.stringify(jsonObject);
    console.log(
        "subtile num of words " + whole_text.split(" ").length.toString()
    );
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role: "user",
            content:
                "与えられた英文を日本語に翻訳してください。そして翻訳後のテキスト全文を技術記事のような形式で返答してください。記事を作成する際には、複数の章を適切に作成してください。また元のテキストの順番はあまり変更しないで。",
        },
        {
            role: "system",
            content:
                "You are a helpful assistant designed to output JSON. like this:" +
                jsonObject +
                "\n",
        },
        { role: "assistant", content: whole_text },
    ];
    let stream = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        response_format: { type: "json_object" },
        messages: messages
    });
    const resp_message: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role: "user",
            content:
                "与えられた英文を日本語に翻訳してください。そして翻訳後のテキスト全文を技術記事のような形式で返答してください。記事を作成する際には、複数の章を適切に作成してください。また元のテキストの順番はあまり変更内容にして。",
        },
        {
            role: "system",
            content:
                "You are a helpful assistant designed to output JSON. like this:" +
                jsonObject +
                "\n",
        },
        {
            role: "user",
            content: "please continue"
        }
    ]
    console.log("################################");
    console.log(stream.choices[0].message);
    console.log("################################");
    let i = 0;

    while (true) {
        if (stream.choices[0].finish_reason == "length") {
            messages.push({ role: "user", content: "please continue" })
            let stream = await openai.chat.completions.create({
                model: "gpt-4-1106-preview",
                response_format: { type: "json_object" },
                messages: resp_message
            });
            console.log("################################");
            console.log(stream.choices[0].message);
            console.log("################################");
            i++;
            const streamString = JSON.stringify(stream, null, 2);
            fs.writeFile('stream_output' + i.toString() + '.txt', streamString, (err) => {
                if (err) {
                    console.error('ファイルの保存中にエラーが発生しました:', err);
                } else {
                    console.log('ファイルが正常に保存されました。');
                }
            });
        }
        else break;

    }


}

main();
