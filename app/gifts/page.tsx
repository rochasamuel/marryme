"use client";

import { FunctionComponent } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GitCommitHorizontal, InfinityIcon, MoreVertical } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const FoundsPage: FunctionComponent = () => {
  return (
    <div className="flex w-full flex-col gap-4 p-3">
      <Card>
        <CardHeader className="p-3">
          <div className="mx-auto flex h-40 w-[80%] items-center justify-center rounded-sm bg-slate-200">
            IMAGE
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <div className="text-lg font-bold">Title</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptas, quas alias molestiae accusamus sunt, modi fugit dolores
            assumenda itaque aliquam cupiditate incidunt sint aut iste amet
            inventore ipsum repudiandae.
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-3">
          <div>
            <InfinityIcon />
          </div>
          <Button className="w-40">Doar</Button>
        </CardFooter>
      </Card>

      <GitCommitHorizontal className="mx-auto" />

      <Card>
        <CardHeader className="p-3">
          <div className="mx-auto flex h-40 w-[80%] items-center justify-center rounded-sm bg-slate-200">
            IMAGE
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <div className="text-lg font-bold">Title</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptas, quas alias molestiae accusamus sunt, modi fugit dolores
            assumenda itaque aliquam cupiditate incidunt sint aut iste amet
            inventore ipsum repudiandae.
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-3">
          <div className="text-lg font-bold">5 / 10</div>
          <Button className="w-40">Doar</Button>
        </CardFooter>
      </Card>

      <GitCommitHorizontal className="mx-auto" />

      <Card>
        <CardHeader className="p-3">
          <div className="mx-auto flex h-40 w-[80%] items-center justify-center rounded-sm bg-slate-200">
            IMAGE
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <div className="text-lg font-bold">Title</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptas, quas alias molestiae accusamus sunt, modi fugit dolores
            assumenda itaque aliquam cupiditate incidunt sint aut iste amet
            inventore ipsum repudiandae.
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-3">
          <div className="text-lg font-bold">2 / 5</div>
          <Button className="w-40">Doar</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FoundsPage;
