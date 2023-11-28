import { YoutubeTranscript } from 'youtube-transcript';
import { TextToMarkdownArticle } from '@/server/lib/text_to_md';

export async function UrlToMdArticle(url: string) {
    const transcript = await YoutubeTranscript.fetchTranscript(url)
    const subtile = transcript.map(element => element.text).join("");

    const json_response = await TextToMarkdownArticle(subtile);
    if (json_response.finish_reason !== "stop") {
        return "failed"
    }
    console.log(json_response);
    if (json_response.message.content === null) return "failed"
    else return json_response.message.content;
}

async function UrlToSubtile(url: string) {
    const transcript = await YoutubeTranscript.fetchTranscript(url)
    console.log(typeof transcript)
    if (!url.includes("https://www.youtube.com/watch?v=")) {
        return new Error("not youtube url")
    }
    const subtile = transcript.map(element => element.text).join("");
    return subtile
}