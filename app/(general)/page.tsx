import dynamic from 'next/dynamic';
import Temoignage from "@/components/temoignage";
import Landing from "@/components/sections/landing";
import VideoText from "@/components/sections/video-text";
import Numlist from "@/components/sections/numlist";
import Cards from "@/components/sections/cards";
import Rejoindre from "@/components/sections/rejoindre";
import Animate from "@/components/animate";
import Skillz from '@/components/sections/skillz';
import Coachify from '@/components/sections/coachify';
import Listes from '@/components/sections/listes';
import Image from 'next/image';
import { Logo } from '@/components/icons';
const Observer = dynamic(() => import('@/components/observer').then(mod => mod.Observer), { ssr: false });

export default function Page() {
  return (
    <div className="relative overflow-visible w-full h-full">
      <div className='relative'>
        <Landing />
        <Image src="/gradient/pc-orange-bgg.png" alt='Orange background gradient' fill className="pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
      </div>
      <div className='bg-gradient-to-b from-[#fdd8bf]/10 via-[#fbc6ac]/40 to-[#FFF5F4]/10  border-y-3 border-[#fdd8bf]/10 '>
        <VideoText />
      </div>
      <div>
        <div className='relative bg-gradient-to-b from-[#FFF5F4]/10 via-[#fbc6ac]/40 to-[#EEE4E3]'>
          <Image src="/gradient-orange.png" alt='Orange background gradient' fill className="pointer-events-none -z-10" sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
          <Observer>
            <Animate animation="animate-fade-left animate-delay-200 animate-duration-[2200ms] animate-ease-in-out">
              <Skillz />
            </Animate>
          </Observer>
        </div>
        <div className='relative'>
          <Image src="/bg-chart-linen.png" alt='Chart background linen' fill className="object-cover pointer-events-none -z-10" quality={100} sizes="(max-width: 768px) 100vw"/>
          <Observer>
            <Animate animation="animate-fade-right animate-delay-500 animate-duration-[2200ms] animate-ease-in-out">
              <Coachify />
            </Animate>
          </Observer>
        </div>
        <div className='relative bg-gradient-to-b from-[#EEE4E3] to-[#fbc6ac]/10'>
          <Observer>
            <Animate animation="animate-fade-left animate-delay-700 animate-duration-[2200ms] animate-ease-in-out">
              <Listes />
            </Animate>
          </Observer>
        </div>
      </div>
      <div className="relative border-y-4 pt-4 border-[#fdd8bf]/90">
        <div className="-z-10 hidden md:block">
          <Image src="/bg-chart-gradient-pc.png" alt='Chart background orange' fill className="pointer-events-none opacity-80 -z-10" sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
        </div>
        <div className="-z-10 block md:hidden">
          <Image src="/bg-chart-gradient2.png" alt='Chart mobile background orange' fill className="absolute pointer-events-none opacity-80 -z-10" sizes="(max-width: 768px) 100vw"/>
        </div>
        <Observer>
          <Animate animation="animate-fade-down animate-delay-200 animate-duration-[2200ms] animate-ease-in-out">
            <Numlist />
          </Animate>
        </Observer>
      </div>
      <div className='relative py-6 md:py-12'>
        <Image src="/gradient-blue-rose.png" alt='Blue rose gradient background' fill className="pointer-events-none -z-10" sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
        <div className='flex flex-col relative items-center'>
          <Observer>
            <Animate animation="animate-fade-down animate-delay-1000 animate-duration-[2200ms] animate-ease-out">
              <Temoignage />
            </Animate>
          </Observer>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div className='relative'>
        <Image src="/gradient-rainbow.png" alt='Rainbow background gradient' fill className="pointer-events-none -z-10" sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
        <div className='flex flex-col relative items-center'></div>
        <Observer>
          <Animate animation="animate-fade-up animate-delay-1000 animate-duration-[2200ms] animate-ease-out">
            <Rejoindre />
          </Animate>
        </Observer>
      </div>
    </div>
  );
}
