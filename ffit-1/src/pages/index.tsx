
import { Inter } from "next/font/google";
import { Tab } from "./tab";
import { MainWindow } from "./main"
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [titles, setTitles] = useState(["title"]);
  return (
    <div id="index-main">
      <div id="index-tab">
        <Tab titles={titles} />
      </div>
      <div id="index-window">
        <MainWindow />
      </div>
    </div>
  );
}
