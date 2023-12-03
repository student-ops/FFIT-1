import { useState } from "react";
import { Article } from "./article";
import { Url } from "./url";

const MainWindow: React.FC = () => {
  const [url, setUrl] = useState("");
  function tappedCreateButton(inputtedUrl: string) {
    console.log(inputtedUrl);
    setUrl(inputtedUrl);
  }
  return (
    <>
      <Url tapped={tappedCreateButton} />
      <div id="index-iframe-article">
        <iframe src={url}></iframe>
        <Article />
      </div>
    </>
  );
};

export { MainWindow };
