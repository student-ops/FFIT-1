import { NextApiRequest, NextApiResponse } from 'next';
import { UrlToMdArticle } from '@/server/lib/url_to_md';
import * as fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let url = req.body.url;
    // add sleep 10 sec

    console.log("url is " + url);
    await new Promise(r => setTimeout(r, 10000));

    if (url == "test") {
        try {
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
        const article = await UrlToMdArticle(url);
        res.status(200).json({ article: article });
        return
    }
}

