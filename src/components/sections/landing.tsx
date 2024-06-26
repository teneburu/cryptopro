import Link from "next/link"
import { linkVariants } from "../ui/link"
import { RightArrow } from "../icons"
import Image from "next/image"

const Landing = () => {
    return (
        <section className="container sm:h-[calc(30vh)] md:h-[calc(40vh)] xl:h-[calc(50vh)] p-4 md:p-16 mt-24 animate-fade-left animate-delay-200 animate-duration-[2200ms] animate-ease-out">
          <div className="grid grid-cols-1 relative md:grid-cols-[60%_40%] gap-4">
            <div className="pt-12 ml-6">
                <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
                  
                  <span className="hidden sm:inline"> Initialement réservé à l'élite n'ouvre ses portes que sur sélection.</span>
                </p>
              <Link href="https://app.iclosed.io/e/lmn-consulting-llp/calendrier-sabri" className={`${linkVariants({variant: "outline"})} sm:${linkVariants({variant: "outline", size: "sm"})}`}>Programmer un appel<RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
              <Link href="/auth/" className={`${linkVariants({variant: "nooutline"})} sm:${linkVariants({variant: "nooutline", size: "sm"})}`}>J'ai un code d'invitation<RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
            </div>
            <div className="hidden lg:block">
              <Image src="/bitcoin_3d.png" alt="App Visuel" className="pl-6 object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" width={350} height={350}/>
            </div>
          </div>
        </section>
    )
}

export default Landing