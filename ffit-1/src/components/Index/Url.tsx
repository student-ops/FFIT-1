import React, { useState } from "react";

const Url: React.FC = () => {
  const [url, setUrl] = useState("");

  return (
    <>
      <div className="flex px-3">
        <input
          type="text"
          placeholder="URL"
          className="w-2/3"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="ml-1" onClick={() => setUrl(url)}>
          生成
        </button>
      </div>
      <p>{url}</p>
    </>
  );
};

export { Url };
