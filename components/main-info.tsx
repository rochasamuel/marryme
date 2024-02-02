"use client";

import Autoplay from "embla-carousel-autoplay";
import { CalendarDays, MapPinned, TicketCheck } from "lucide-react";
import { FunctionComponent, useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Progress from "./progress";

const MainInfo: FunctionComponent = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full p-3">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold">
          Marcela <br />& Pedro
        </h1>

        <div className="flex flex-col gap-2 rounded-sm border p-6">
          <div className="flex items-center gap-2 text-xl font-medium">
            <MapPinned /> Vila Liporoni
          </div>
          <div className="flex items-center gap-2 text-xl font-medium">
            <CalendarDays /> 16/06/24 às 11:00h
          </div>
          <div className="flex items-center gap-2 text-xl font-semibold underline">
            <TicketCheck /> Confirme presença
          </div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index + 1} className="w-1/2 basis-[55%] pl-1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Card className="w-full">
          <CardContent className="flex items-center justify-center p-1">
            <iframe
              className="rounded-md"
              width="560"
              height="250"
              src="https://www.youtube.com/embed/1tGpLS5JH2Y?si=Wccjf4MU5ctlf3Y6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </CardContent>
        </Card>

        <Progress />
      </div>
    </div>
  );
};

export default MainInfo;
