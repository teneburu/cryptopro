'use client';
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
  useCarousel,
} from "@/components/ui/carousel";
import VideoComponent from "./video-component";
import Link from "next/link";
import { linkVariants } from "./ui/link";
import { RightArrow } from "./icons";
import { useEffect, useState } from "react";

const videoData = [
  { id: "2XO6JUTgEsBaVe1Yw2QXopDIibQJJmixx02kfORW41D00", quote: "« J'ai doublé mon capital de 200k € en 4 mois » - Swann" },
  { id: "Zon5tLRF7EfYssH01T7nwyo41wncyiapaAq7URT11ZZA", quote: "« La formation est géniale, ils t'aident à savoir quand acheter ta crypto » - Sandra" },
  { id: "WwmCES2MxONgpIXpiIXNsR3WoAlEmcWChoh21nPPECg", quote: "« Je fais du profit à chaque fois » - Bryan" },
  { id: "omaN014l100Vxu86hmjoy2Qnvjqr9QyzG7zAfLW00XJ73E", quote: "« On se gave ces derniers mois » - Beno" },
  { id: "1AhOYMAidgv5oFWot007T022UXeRgofeffezM5AZod8mg", quote: "« Je suis passé de 3k € à 35k € en 6 mois » - Zak" },
  { id: "62QD6tJ3HwYd3L02RS60200OgPpWsxkOnUhiVeJA8y1dqA", quote: "« J'ai fait un x11 en moins d'un an » - Adrian" },
];

const TemoignageContent = () => {
  const { activeIndex } = useCarousel();
  const [currentQuote, setCurrentQuote] = useState(videoData[0].quote);

  useEffect(() => {
    setCurrentQuote(videoData[activeIndex].quote);
  }, [activeIndex]);

  return (
    <>
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative ">
        <CarouselMainContainer className="">
          {videoData.map((video, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <div className="flex items-center justify-center">
                <VideoComponent video_id={video.id} height='460px' />
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className="absolute left-1/2 -translate-x-1/2 ">
          <CarouselThumbsContainer className="gap-x-1">
            {videoData.map((video, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
      <div className="text-night text-lg text-center pt-6 font-bold italic">
        {currentQuote}
      </div>
    </>
  );
};

const Temoignage = () => {
  return (
    <section className="container p-4 py-8 md:p-16 xl:p-24">
        <div className="flex flex-col mb-16 relative w-full items-center">
          <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold pb-8 ml-3 text-[#1E1E1E]">Pourquoi pas vous?</h1>
          <p className="my-6 ml-3 lg:text-lg sm:text-sm font-medium text-center tracking-tight">
            Seulement avec leur engagement, ils ont rempli leur objectifs. <br/> Comme eux, rejoignez-nous sur la route que nous pavons vers le succès.
          </p>
          <Link href="/auth" className={`${linkVariants({ variant: "nooutline" })} sm:${linkVariants({ variant: "nooutline", size: "sm" })}`}>
            Faire comme eux <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current" />
          </Link>
          <div className="max-w-[500px] pt-4">
            <Carousel>
              <TemoignageContent />
            </Carousel>
          </div>
        </div>
    </section>
  );
};

export default Temoignage;
