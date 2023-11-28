import { UrlToMdArticle } from "../server/lib/url_to_md";

describe("UrlToMdArticle", () => {
    it("should return a string", async () => {
        const res = await UrlToMdArticle("https://www.youtube.com/watch?v=2hXNd6x9sZs")
        console.log(res);
        expect(res).toEqual(expect.any(String));
    }, 300 * 1000);

});