import { useState } from "react";

const Url: React.FC = (prop) => {

  const [url, setUrl] = useState("");

  function tappedCreateButton() {
    prop.tapped(url);
  }
  return (
    <>
      <div style={{display: "flex"}}>
        <input type="text" placeholder="URL" style={{width: "calc(100% - 53px - 1em)"}} value={url} onChange={(event) => setUrl(event.target.value)} />
        <button style={{marginLeft: "1em", marginRight: "0"}} onClick={tappedCreateButton}>生成</button>
      </div>
    </>
  );
};

export {Url};