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

const Observer = dynamic(() => import('@/components/observer').then(mod => mod.Observer), { ssr: false });

export default function Page() {
  return (
    <div className="relative overflow-visible w-full h-full">
      <div className='relative'>
        <Landing />
        <Image src="/gradient/pc-orange-bgg.png" alt="Orange Gradient Background Top" fill className="pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
      </div>
      <div className='bg-gradient-to-b from-[#fdd8bf]/10 via-[#fbc6ac]/40 to-[#fdd8bf]/10  border-y-3 border-[#fdd8bf]/10 '>
        <VideoText />
      </div>
      <div className='relative'>
        <div className="-z-10 hidden md:block">
          <Image src="/bg-chart-white.jpg" alt="Orange Gradient Background Top" fill className="pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
        </div>
        <div className="-z-10 block md:hidden">
          <Image src="/bg-chart-white.jpg" alt="Orange Gradient Background Top" fill className="object-contain object-top pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw"/>
          <Image src="/bg-chart-white.jpg" alt="Orange Gradient Background Top" fill className="object-contain object-bottom pointer-events-none pb-24 -z-10" priority sizes="(max-width: 768px) 100vw"/>
        </div>
        <div>
          <Observer>
            <Animate animation="animate-fade-left animate-delay-200 animate-duration-[2200ms] animate-ease-in-out">
              <Skillz />
            </Animate>
          </Observer>
        </div>
        <div>
          <Observer>
            <Animate animation="animate-fade-right animate-delay-500 animate-duration-[2200ms] animate-ease-in-out">
              <Coachify />
            </Animate>
          </Observer>
        </div>
        <div>
          <Observer>
            <Animate animation="animate-fade-left animate-delay-700 animate-duration-[2200ms] animate-ease-in-out">
              <Listes />
            </Animate>
          </Observer>
        </div>
      </div>
      <div className="relative border-y-4 border-[#fdd8bf]/90">      
        <div className="-z-10 hidden md:block">
          <Image src="/bg-chart-gradient-pc.png" alt="Orange Gradient Background Top" fill className="pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
        </div>
        <div className="-z-10 block md:hidden">
          <Image src="/bg-chart-gradient2.png" alt="Orange Gradient Background Top" fill className="pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw"/>
        </div>
        <Observer>
          <Animate animation="animate-fade-down animate-delay-200 animate-duration-[2200ms] animate-ease-in-out">
            <Numlist />
          </Animate>
        </Observer>
      </div>
      <div className='relative py-6 md:py-12'>
        <Image src="/gradient-blue-rose.png" alt="Orange Gradient Background Top" fill className="pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
        <div>
          <Cards />
        </div>
        <div className='flex flex-col relative items-center'>
          <Observer>
            <Animate animation="animate-fade-down animate-delay-200 animate-duration-[2200ms] animate-ease-out">
              <Temoignage />
            </Animate>
          </Observer>
          <Image src="/temps-argent.png" alt="Orange Gradient Background Top" width={700} height={1000} className="rounded-lg shadow-lg pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
        </div>
      </div>
      <div>
        <Observer>
          <Animate animation="animate-fade-up animate-delay-200 animate-duration-[2200ms] animate-ease-out">
            <Rejoindre />
          </Animate>
        </Observer>
      </div>
    </div>
  );
}
