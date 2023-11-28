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
