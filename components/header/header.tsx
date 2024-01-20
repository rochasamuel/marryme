"use client";

import Link from "next/link";
import { FunctionComponent } from "react";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

const Header: FunctionComponent = () => {
  const pathName = usePathname();

  const shouldHighlight = (pathname: string) => {
		return pathname === pathName;
	};

  return (
    <div className="fixed left-0 right-0 top-6 mx-auto flex gap-4 h-10 min-w-min w-[30%] items-center justify-evenly rounded-sm border bg-white bg-white/40 p-2 backdrop-blur-md">
      <Link href={"/"}>
        <div className={`${shouldHighlight("/") ? "font-bold" : ""} transition-all`}>Início</div>
      </Link>
      <Separator orientation="vertical" />
      <Link href={"/gifts"}>
        <div className={`${shouldHighlight("/founds") ? "font-bold" : ""} transition-all`}>Presentear</div>
      </Link>
    </div>
  );
};

export default Header;
