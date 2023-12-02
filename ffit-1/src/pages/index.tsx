
import { Inter } from "next/font/google";
import { Tab } from "./tab";
import { MainWindow } from "./main"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="index-main">
      <div id="index-tab">
        <Tab />
      </div>
      <div id="index-window">
        <MainWindow />
      </div>
    </div>
  );
}
