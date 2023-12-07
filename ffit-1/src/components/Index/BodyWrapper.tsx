import React, { useState, useEffect, use } from "react";
import { Marked } from "@ts-stack/markdown";
import axios from "axios";

const BodyWrapper: React.FC = () => {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  useEffect(() => {
    let isMounted = true; // 追加
    const fetchMarkdown = async () => {
      if (!isMounted) return; // 追加

      try {
        setLoading(true);
        const response = await axios.post<{ article: string }>(
          "/api/videoUrl",
          { url: videoUrl }
        );
        setMarkdownContent(Marked.parse(response.data.article));
      } catch (error) {
        console.error("Error fetching markdown:", error);
        setMarkdownContent("");
      } finally {
        setLoading(false);
      }
    };

    if (videoUrl) {
      fetchMarkdown();
    }

    return () => {
      isMounted = false;
    }; // 追加
  }, [videoUrl]);

  useEffect(() => {
    const videoid = url.match(/v=(.*)/)?.[1];
    if (url.includes("5C_HPTJg5ek")) {
      setVideoId("5C_HPTJg5ek");
    } else {
      setVideoId(videoid || "");
    }
  }, [url]);

  const postVideoUrl = async () => {
    if (url === videoUrl) console.log(url + videoUrl);
    // add same url alert
    setVideoUrl(url);
  };
  return (
    <>
      <div className="flex mx-10">
        <input
          type="text"
          placeholder="URL"
          className="w-11/12"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              postVideoUrl();
            }
          }}
        />
        <button className="ml-1" onClick={() => postVideoUrl()}>
          生成
        </button>
      </div>
      <div className="flex mt-8 mx-10 justify-center bg-white h-full">
        <div className="w-1/2 flex justify-center">
          <div className="w-11/12 py-14">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${videoId}`}
            ></iframe>
          </div>
        </div>
        <div className="w-1/2 py-12 h-full">
          <div style={{ width: "95.8%", marginRight: "4.2%" }}>
            {loading ? (
              <div className="flex h-full flex-col items-center justify-center w-2/3 mx-auto mt-16">
                <p className="text-l">
                  Loding ... <br></br>Plese wait ...{" "}
                </p>
                <progress className="progress w-2/3"></progress>
              </div>
            ) : (
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: markdownContent }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { BodyWrapper };
