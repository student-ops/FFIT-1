import { Inter } from "next/font/google";
import { SideBar } from "@/components/Index/SideBar";
import { BodyWrapper } from "@/components/Index/BodyWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div id="index-main">
        <div id="index-tab">
          <SideBar />
        </div>
        <div id="index-window">
          <BodyWrapper />
        </div>
      </div>
    </>
  );
}
