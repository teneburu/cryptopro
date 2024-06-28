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
        <Image src="fbac42e0-14db-43da-f6da-969d87765800" alt='Orange background gradient' fill className="pointer-events-none -z-10" priority/>
      </div>
      <div className='bg-gradient-to-b from-[#fdd8bf]/10 via-[#fbc6ac]/40 to-[#FFF5F4]/10  border-y-3 border-[#fdd8bf]/10 '>
        <VideoText />
      </div>
      <div>
        <div className='relative bg-gradient-to-b from-[#FFF5F4]/10 via-[#fbc6ac]/40 to-[#EEE4E3]'>
          <Observer>
            <Animate animation="animate-fade-left animate-delay-200 animate-duration-[2200ms] animate-ease-in-out">
              <Skillz />
            </Animate>
          </Observer>
        </div>
        <div className='relative'>
          <Image src="9a500a4f-d18f-44b0-986f-9cd9e2574800" alt='Chart background linen' fill className="object-cover pointer-events-none -z-10" priority quality={100}/>
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
          <Image src="47de0165-05e2-42da-6170-94ae058e7100" alt='Chart background orange' fill className="pointer-events-none opacity-80 -z-10"/>
        </div>
        <div className="-z-10 block md:hidden">
          <Image src="8adc12b4-5c95-4960-1277-8bedeb61f700" alt='Chart mobile background orange' fill className="absolute pointer-events-none opacity-80 -z-10" />
        </div>
        <Observer>
          <Animate animation="animate-fade-down animate-delay-200 animate-duration-[2200ms] animate-ease-in-out">
            <Numlist />
          </Animate>
        </Observer>
      </div>
      <div className='relative py-6 md:py-12'>
        <Image src="fc816d1f-5656-4063-94a4-380c5064ba00" alt='Blue rose gradient background' fill className="pointer-events-none -z-10"/>
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
        <Image src="cf8a34ad-ab28-4d9f-6a3b-9a353463bd00" alt='Rainbow background gradient' fill className="pointer-events-none -z-10"/>
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
