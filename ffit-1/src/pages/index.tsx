import { Inter } from "next/font/google";
import { Tab } from "@/components/Index/Tab";
import { BodyWrapper } from "@/components/Index/BodyWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div id="index-main">
        <div id="index-tab">
          <Tab />
        </div>
        <div id="index-window">
          <BodyWrapper />
        </div>
      </div>
    </>
  );
}
