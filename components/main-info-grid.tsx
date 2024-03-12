"use client";

import Autoplay from "embla-carousel-autoplay";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import {
  Apple,
  Calendar,
  CalendarDays,
  Clipboard,
  Lamp,
  MapPin,
  MapPinned,
  Plane,
  TicketCheck,
} from "lucide-react";
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
import { Button } from "./ui/button";
import localFont from "next/font/local";

const CCMetcon = localFont({
  src: [
    {
      path: "../public/fonts/CCMetcon.ttf",
      weight: "400",
    },
  ],
  variable: "--font-CCMetcon",
});

const MainInfoGrid: FunctionComponent = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="mx-auto max-w-md bg-[#d4b661] bg-opacity-20 bg-eggshell-pattern bg-repeat p-2">
      <div className="parent grid grid-cols-5 grid-rows-[1fr,2fr,2fr,3fr] gap-0">
        <div className="relative col-span-3 flex h-full items-center justify-between gap-2 border-b border-l p-2 text-right text-4xl [border-image:linear-gradient(to_top,#7e5a58,rgba(0,0,0,0))_.5]">
          <img
            className="absolute -bottom-8 -left-1 w-28 -rotate-12 transform"
            src="invite8.png"
            alt="tomato"
          />
          <div
            className={`${CCMetcon.variable} font-sans text-3xl tracking-[0.2em]`}
          >
            Marcela & Pedro
          </div>
        </div>
        <div className="col-span-2 col-start-4 row-span-2 row-start-1 flex flex-col items-center justify-center gap-10 border-l border-r [border-image:linear-gradient(to_top,#7e5a58,rgba(0,0,0,0))_90]">
          <Apple size={100} />
          <Button className="w-5/6">Confirme presença</Button>
        </div>
        <div className="col-span-1 col-start-3 row-span-1 row-start-2 flex items-center justify-center border-l [border-image:linear-gradient(to_bottom,#7e5a58,rgba(0,0,0,0))_15]">
          <Clipboard size={100} />
        </div>
        <div className="col-span-2 col-start-1 row-span-1 row-start-2 flex flex-col gap-2 border-l border-[#7e5a58] p-2">
          <div className="flex gap-2">
            <MapPin />
            Vila Alguma Coisa
          </div>
          <div className="flex gap-2">
            <Calendar />
            Dia xx/00/xxxx
          </div>
          <div className="mt-10 flex gap-2">dsadasdlkajslkdjsalkd</div>
        </div>
        <div className="col-span-5 col-start-1 row-span-1 row-start-3 h-min border-t pt-2 [border-image:linear-gradient(to_right,#7e5a58,rgba(0,0,0,0))_20]">
          <div className={`${CCMetcon.variable} font-sans w-full text-center text-lg`}>
            Na dúvida do que vestir? A gente te ajuda!
          </div>
          <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index + 1}
                  className="w-1/2 basis-[55%] pl-1"
                >
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
        </div>
        <div className="col-span-5 col-start-1 row-span-1 row-start-4 mt-2 border-t pt-2 [border-image:linear-gradient(to_right,rgba(0,0,0,0),#7e5a58,rgba(0,0,0,0))_50]">
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
        </div>

        <div className="w-full">
          <ImgComparisonSlider
            className="slider-example-split-line w-screen"
            width={"100%"}
            value={10}
            direction="vertical"
          >
            <img slot="first" src="viagem.png" />
            <img slot="second" className="grayscale" src="viagem.png" />
          </ImgComparisonSlider>
        </div>
      </div>
    </div>
  );
};

export default MainInfoGrid;
