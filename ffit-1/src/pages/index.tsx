import Link from "next/link"; // Link コンポーネントをインポート

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1>
      <Link href="/samples">Go to samples</Link>
    </h1>
  );
}
