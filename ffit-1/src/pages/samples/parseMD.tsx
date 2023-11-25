// pages/index.js
import React, { useState, FormEvent } from "react";
import axios from "axios";
import * as marked from "marked-ts";

const Home: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === "hello") {
      setLoading(true);
      try {
        const response = await axios.get<string>("/api/hello");
        setMarkdownContent(marked.Marked.parse(response.data));
      } catch (error) {
        console.error("Error fetching markdown:", error);
        setMarkdownContent("");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="h-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter 'hello'"
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
