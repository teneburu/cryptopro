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

const videoData = [
  { id: "967289155", quote: "« Je suis passé de 3 000 € à 35 000 € en 6 mois »" },
  { id: "967289080", quote: "« Citation pour remplir »" },
  { id: "967289038", quote: "« Citation pour remplir »" },
  { id: "967289007", quote: "« Citation pour remplir »" },
  { id: "967288869", quote: "« Citation pour remplir »" },
];

const Temoignage = () => {
  return (
    <div>
    <Carousel>
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative">
        <CarouselMainContainer className="h-[500px]">
          {videoData.map((video, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <div className="size-full flex items-center justify-center">
                <VideoComponent video_id={video.id} />
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className="absolute left-1/2 -translate-x-1/2 mt-2">
          <CarouselThumbsContainer className="gap-x-1">
            {videoData.map((video, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
            <div className="text-night text-lg text-center pt-6 font-bold italic">
        {videoData.map((video, index) => (
          <span key={index} className={index === 0 ? '' : 'hidden'}>
            {video.quote}
          </span>
        ))}
      </div>
    </Carousel>
    </div>
  );
};

export default Temoignage;
