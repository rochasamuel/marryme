"use client";
import { FunctionComponent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useAnimation, motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
// interface Props {
// }

const milestones = [
  { id: 1, title: "Brasil", description: "Maior país da América do Sul, conhecido por sua diversidade geográfica, cultural e étnica. Possui vastas florestas tropicais, como a Amazônia, e é famoso pelo Carnaval e pelo futebol.", amount: 2000 },
  { id: 2, title: "Milestone 2", description: "Description 2", amount: 6000 },
  { id: 3, title: "Milestone 3", description: "Description 3", amount: 10000 },
  { id: 3, title: "Milestone 3", description: "Description 3", amount: 12000 },
  { id: 4, title: "Milestone 4", description: "Description 4", amount: 16000 },
];

const Progress: FunctionComponent = () => {
  const [progress, setProgress] = useState(0);
  const [amountToSend, setAmountToSend] = useState(0);
  const totalAmount = 18000;
  const controls = useAnimation();

  const handleSendFound = () => {
    setProgress(progress + amountToSend);
  };

  return (
    <div className="w-full">
      <div className="relative flex h-[1500px] w-4 rounded-md border-2">
        <div
          className="max-h-[1500px] w-full bg-black rounded-md"
          style={{ height: `${(progress / totalAmount) * 100}%` }}
        />
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="absolute -left-[5px] h-6 w-6 rounded-full border bg-black"
            style={{ top: `${(milestone.amount / totalAmount) * 100}%` }}
          />
        ))}
        {milestones.map((milestone) => {
            return (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 200 }}
                key={milestone.id}
                className="absolute left-10 min-w-[80vw]"
                style={{ top: `${(milestone.amount / totalAmount) * 100}%` }}
              > 
                <Card className="w-full h-full">
                  <CardContent className="flex flex-col gap-2 p-2">
                    {/* <img className="aspect-square h-min" src="https://via.placeholder.com/120" alt="Milestone" /> */}
                    <div className="w-full h-20 bg-slate-200 rounded-sm flex items-center justify-center">image</div>

                    <div className="float-right">
                      <p className="text-xl font-bold">{milestone.title}</p>
                      <p className="text-sm">{milestone.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
        })}
      </div>
    </div>
  );
};

export default Progress;
