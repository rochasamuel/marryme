"use client";

import { FunctionComponent } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FoundsPage: FunctionComponent = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center mt-28 max-w-screen-md">
      <RadioGroup defaultValue="option-one" className="space-y-2">
        <Label htmlFor="option-one" className=" w-full rounded-sm border p-4">
          <div className="flex w-full justify-between gap-2 ">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <RadioGroupItem value="option-one" id="option-one" />
                <div className="text-lg font-bold">Sessão de filme</div>
              </div>
              <p className="mt-2 font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                magnam pariatur est nobis asperiores quaerat quisquam quod
                reiciendis non at ab minus vitae nisi totam amet, possimus ad
                adipisci veniam.
              </p>
            </div>
            <div className="min-w-max text-lg font-bold">R$ 100,00</div>
          </div>
        </Label>

        <Label htmlFor="option-two" className=" w-full rounded-sm border p-4">
          <div className="flex w-full justify-between gap-2 ">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <RadioGroupItem value="option-two" id="option-two" />
                <div className="text-lg font-bold">Partida de poker</div>
              </div>
              <p className="mt-2 font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                magnam pariatur est nobis asperiores quaerat quisquam quod
                reiciendis non at ab minus vitae nisi totam amet, possimus ad
                adipisci veniam.
              </p>
            </div>
            <div className="min-w-max text-lg font-bold">R$ 150,00</div>
          </div>
        </Label>

        <Label htmlFor="option-three" className=" w-full rounded-sm border p-4">
          <div className="flex w-full justify-between gap-2 ">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <RadioGroupItem value="option-three" id="option-three" />
                <div className="text-lg font-bold">Jantar</div>
              </div>
              <p className="mt-2 font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                magnam pariatur est nobis asperiores quaerat quisquam quod
                reiciendis non at ab minus vitae nisi totam amet, possimus ad
                adipisci veniam.
              </p>
            </div>
            <div className="min-w-max text-lg font-bold">R$ 200,00</div>
          </div>
        </Label>

        <Label htmlFor="option-four" className=" w-full rounded-sm border p-4">
          <div className="flex w-full justify-between gap-2 ">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <RadioGroupItem value="option-four" id="option-four" />
                <div className="text-lg font-bold">Churras</div>
              </div>
              <p className="mt-2 font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                magnam pariatur est nobis asperiores quaerat quisquam quod
                reiciendis non at ab minus vitae nisi totam amet, possimus ad
                adipisci veniam.
              </p>
            </div>
            <div className="min-w-max text-lg font-bold">R$ 250,00</div>
          </div>
        </Label>

        <Label htmlFor="option-five" className=" w-full rounded-sm border p-4">
          <div className="flex w-full justify-between gap-2 ">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <RadioGroupItem value="option-five" id="option-five" />
                <div className="text-lg font-bold">Outro valor</div>
              </div>
              <p className="mt-2 font-normal">
                Decida o quanto você quer presentear
              </p>
            </div>
            <div className="min-w-max flex items-center gap-2 text-lg font-bold">
              R$:<Input />
            </div>
          </div>
        </Label>
      </RadioGroup>

      <Button className="w-80 mx-auto mt-4">Presentear</Button>
    </div>
  );
};

export default FoundsPage;
