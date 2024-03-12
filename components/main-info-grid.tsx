"use client";

import Autoplay from "embla-carousel-autoplay";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import {
  Apple,
  Calendar,
  CalendarDays,
  CalendarPlus,
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

const links = ['/dc1.jpg','/dc2.jpg','/dc3.jpg','/dc4.jpg']

const MainInfoGrid: FunctionComponent = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="mx-auto max-w-md bg-[#d4b661] bg-opacity-20 bg-eggshell-pattern bg-repeat p-2">
      <div className="parent grid grid-cols-5 grid-rows-[6rem,8rem,2fr,2fr] gap-0">
        <div className="relative col-span-3 flex h-full items-center justify-between gap-2 border-b border-l p-2 text-right text-4xl [border-image:linear-gradient(to_top,#7e5a58,rgba(0,0,0,0))_.5]">
          {/* <img
            className="absolute -bottom-8 -left-1 w-28 -rotate-12 transform"
            src="invite8.png"
            alt="tomato"
          /> */}
          <div
            className={`${CCMetcon.variable} font-sans text-3xl tracking-[0.2em] text-shadow-[1px,1px,2px,black]`}
          >
            Marcela & Pedro
          </div>
        </div>
        <div className="col-span-2 col-start-4 row-span-2 row-start-1 flex flex-col items-center justify-center gap-10 border-l border-r [border-image:linear-gradient(to_top,#7e5a58,rgba(0,0,0,0))_90]">
          {/* <img src="/invite4.png" alt="limao" className="rotate-90" /> */}
          <Button className={`${CCMetcon.variable} font-sans w-5/6 bg-transparent border-[#7e5a58]`} variant={"outline"}>Confirme presença</Button>
        </div>
        <div className="col-span-1 col-start-3 row-span-1 row-start-2 flex items-center justify-center [border-image:linear-gradient(to_bottom,#7e5a58,rgba(0,0,0,0))_15]">
        </div>
        <div className="col-span-3 col-start-1 row-span-1 row-start-2 flex flex-col justify-between gap-2 border-l border-[#7e5a58] p-2">
          <div className="flex flex-col gap-2">
          <div className={`${CCMetcon.variable} font-sans text-sm flex gap-2 items-center`}>
            <MapPin size={18} />
            Villa Liporoni - Brasília
          </div>
          <div className={`${CCMetcon.variable} font-sans text-sm flex gap-2 items-center`}>
            <CalendarDays size={18} />
            15.06.2024 - 10:30
          </div>
          <div className={`font-sans text-sm flex gap-2 items-center`}>
            <CalendarPlus size={18} />
            <a href="/" className="underline italic font-medium"> Adicione a sua agenda</a>
          </div>

          </div>
          <div className="flex gap-2 w-full justify-center">
            <div className="rounded-full bg-[#C5B18D] size-4" />
            <div className="rounded-full bg-[#8B5B3C] size-4" />
            <div className="rounded-full bg-[#8D8C44] size-4" />
            <div className="rounded-full bg-[#4C5B45] size-4" />
            <div className="rounded-full bg-[#8B5B3C] size-4" />
          </div>
        </div>
        <div className="col-span-5 col-start-1 row-span-1 row-start-3 h-min border-t pt-2 [border-image:linear-gradient(to_right,#7e5a58,rgba(0,0,0,0))_20]">
          <div className={`${CCMetcon.variable} font-sans w-full text-center text-lg mb-1`}>
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
              {links.map((link, index) => (
                <CarouselItem
                  key={index + 1}
                  className="w-1/2 basis-[55%] pl-1"
                >
                  <div>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <img src={link} className="h-full w-full object-cover rounded-sm border-[#7e5a58] border" alt={"sdljsadk"} ></img>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="col-span-5 col-start-1 row-span-1 row-start-4 h-full mt-2 border-t pt-2 [border-image:linear-gradient(to_right,rgba(0,0,0,0),#7e5a58,rgba(0,0,0,0))_50]">
          <Card className="w-full">
            <CardContent className="flex items-center justify-center p-0">
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
            className="slider-example-split-line w-[446px]"
            // width={"100%"}
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
