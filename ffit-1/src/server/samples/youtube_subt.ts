import { YoutubeTranscript } from 'youtube-transcript';

async function main() {
    // console.log("hello world")
    const video_id = ""
    const api_addres = "https://www.googleapis.com/youtube/v3"
    YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=WtVhFs8SJKQ').then(console.log);
}

main()
