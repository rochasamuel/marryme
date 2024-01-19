import dynamic from "next/dynamic";
const Progress = dynamic(() => import("../components/progress"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="p-4">
      <Progress />
    </div>
  );
}
