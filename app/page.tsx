import Header from "@/components/header/header";
import dynamic from "next/dynamic";
const Progress = dynamic(() => import("../components/progress"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 ">
      <div className="p-4">
        <Progress />
      </div>
    </div>
  );
}
