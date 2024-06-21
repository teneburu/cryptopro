import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "@/components/ui/carousel";
import VideoComponent from "./video-component";

const videoIds = ["vgvxTBWskKs", "PdIqTe2wZgg", "x3cdX8ByhCg", "cgDxekwIYNA", "DwxUzIVL3wI"]

const Temoignage = () => {
  return (
    <Carousel>
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative ">
        <CarouselMainContainer className="h-60">
          {Array.from({ length: videoIds.length  }).map((_, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <div className="size-full flex items-center justify-center">
                <VideoComponent video_id={videoIds[index]} />
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className="absolute left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1 ">
            {Array.from({ length: videoIds.length }).map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
    </Carousel>
  );
};

export default Temoignage;
