import Header from "@/components/header/header";
import MainInfo from "@/components/main-info";
import dynamic from "next/dynamic";
const Progress = dynamic(() => import("../components/progress"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="w-full">
      <MainInfo />
      {/* <div className="p-4">
        <Progress />
      </div> */}
    </div>
  );
}
