import { NextApiRequest, NextApiResponse } from 'next';
import { UrlToMdArticle } from '@/server/lib/url_to_md';
import { getSession } from 'next-auth/react'; // getSessionをインポート
import * as fs from 'fs';


const verifyYoutubeurl = (url: string) => {

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let url = req.body.url;
    // add sleep 10 sec


    const session = await getSession({ req });

    if (url.includes("5C_HPTJg5ek")) {
        try {

            await new Promise(r => setTimeout(r, 10000));
            const article = fs.readFileSync("./src/server/assets/rust100.md", "utf-8");
            res.status(200).json({ article: article });
            return
        }
        catch {
            console.log("file read failed")
            res.status(404);
            return
        }
    }
    else {
        const session = await getSession({ req });
        if (!session) {
            res.status(401).json({ error: 'You\'re unauthorized. Please sign in by clicking the button on the top left of the screen.' });
            return;
        }
        const article = await UrlToMdArticle(url);
        res.status(200).json({ article: article });
        return
    }
}

