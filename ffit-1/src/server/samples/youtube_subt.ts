import { YoutubeTranscript } from 'youtube-transcript';

async function main() {
    // console.log("hello world")
    const video_id = ""
    const url = "https://www.example.com"
    const youtube_url = "https://www.youtube.com/watch?v=5C_HPTJg5ek"
    // check is url youtube 
    if (!url.includes("https://www.youtube.com/watch?v=")) {
    }


    console.log("#########################")
    const response = await YoutubeTranscript.fetchTranscript(url)

    console.log(typeof response)
    console.log(response)
    console.log("#########################")

    let whole_text = ""
    response.forEach((element: { text: string; }) => {
        console.log(element.text)
        whole_text += element.text
    })


}

main()
