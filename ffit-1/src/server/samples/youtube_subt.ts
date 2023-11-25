import { YoutubeTranscript } from 'youtube-transcript';

async function main() {
    // console.log("hello world")
    const video_id = ""
    const api_addres = "https://www.googleapis.com/youtube/v3"
    const response = await YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=-cn3MAovsN4')
    // console.log(response)

    let whole_text = ""
    response.forEach((element: { text: string; }) => {
        console.log(element.text)
        whole_text += element.text
    })


}

main()
