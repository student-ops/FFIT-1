// pages/index.js
import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Marked } from "@ts-stack/markdown";
import { Article } from "@/types";
const Home: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      // post  input
      const response = await axios.post<{ article: string }>("/api/url", {
        url: input,
      });
      setMarkdownContent(Marked.parse(response.data.article as string));
    } catch (error) {
      console.error("Error fetching markdown:", error);
      setMarkdownContent("");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter 'test'"
        />
        <button type="submit">Fetch Markdown</button>
      </form>

      {loading && <p>Loading...</p>}

      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: markdownContent }}
      />
    </div>
  );
};

export default Home;
