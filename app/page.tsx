import Header from "@/components/header/header";
import MainInfo from "@/components/main-info";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";
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
      <Button className="w-32 fixed bottom-2 right-2"><Link href={'/gifts'}>Doar</Link></Button>
    </div>
  );
}
