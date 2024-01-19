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
// interface Props {
// }

const milestones = [
  { id: 1, title: "Milestone 1", description: "Description 1", amount: 2000 },
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
      <div className="relative flex h-[1500px] w-4 rounded-md border">
        <div
          className="max-h-[1500px] w-full bg-black rounded-md"
          style={{ height: `${(progress / totalAmount) * 100}%` }}
        />
        <div className="fixed right-10 top-20">
          <Dialog>
            <DialogTrigger>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" /> Send Found
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Digite a quantidade</DialogTitle>
                <DialogDescription>
                  <Input
                    placeholder="0"
                    onChange={(e) => setAmountToSend(Number(e.target.value))}
                    className="mt-4"
                    type="number"
                  />
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose>
                  <Button onClick={() => handleSendFound()}>Enviar</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="absolute -left-[5px] h-6 w-6 rounded-full border bg-black"
            style={{ top: `${(milestone.amount / totalAmount) * 100}%` }}
          />
        ))}
        {milestones.map((milestone) => {
          if (milestone.amount <= progress) {
            return (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 200 }}
                key={milestone.id}
                className="absolute left-16 flex h-20 w-[400px] flex-col items-center justify-center overflow-hidden text-nowrap rounded-md border"
                style={{ top: `${(milestone.amount / totalAmount) * 100}%` }}
              >
                <p>{milestone.title}</p>
                <p>{milestone.description}</p>
              </motion.div>
            );
          }
        })}
      </div>
      <input
        className="fixed right-10 top-10 w-96"
        type="range"
        min={0}
        max={18000}
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
      />
    </div>
  );
};

export default Progress;
