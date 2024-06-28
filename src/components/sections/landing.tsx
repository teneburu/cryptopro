import Link from "next/link"
import { linkVariants } from "../ui/link"
import { Logotype, RightArrow } from "../icons"
import Image from "next/image"
import { Logo } from "@/components/icons";

const Landing = () => {
    return (
        <section className="container sm:min-h-[calc(30vh)] md:min-h-[calc(60vh)] p-4 md:p-16 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-[75%_25%] gap-4">
            <div className="pt-8">
              <div className="grid grid-cols-[60%_40%] md:grid-cols-1 ml-4 lg:ml-0 pb-4">
                <div className="flex flex-col justify-center">
                  <h1 className="xl:text-5xl lg:text-3xl text-2xl font-extrabold tracking-normal whitespace-nowrap md:tracking-wide text-[#1E1E1E] max-w-[80vw]">Bienvenue chez</h1>
                  <Logotype className="w-[22vh] py-3 md:py-6 text-[#1E1E1E] fill-current" />
                </div>
                <div className="justify-end block md:hidden">
                  <Logo className="w-16 ml-6 text-[#1E1E1E] fill-current"/>
                </div>
              </div>
              <p className="my-2 text-md tracking-tight md:text-lg font-semibold md:tracking-normal text-pretty">
                Initialement réservé à l&apos;élite, nous avons décidé d&apos;ouvrir nos portes à de nouveaux membres sur sélection.
              </p>
              <p className="mb-4 text-md tracking-tight md:text-lg font-semibold md:tracking-normal text-pretty">
                Découvrez comment faire partie de notre communauté exclusive en postulant pour une invitation.
              </p>
            </div>
            <div className="hidden lg:block ">
              <Image src="/bitcoin3d.png" alt="Bitcoin" className="pl-6 object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" width={350} height={350}/>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div className="justify-center hidden md:block">
              <Link href="https://app.iclosed.io/e/lmn-consulting-llp/calendrier-sabri" className={`${linkVariants({variant: "outline"})}`}>Programmer un appel<RightArrow className="md:w-4 w-3 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
              <Link href="/auth/" className={`${linkVariants({variant: "nooutline"})}`}>J&apos;ai un code d&apos;invitation<RightArrow className="md:w-4 w-3 ml-2 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
            </div>
            <div className="justify-center col-span-2 space-x-2 block md:hidden">
              <Link href="https://app.iclosed.io/e/lmn-consulting-llp/calendrier-sabri" className={`${linkVariants({variant: "black", size: "sm"})}`}>Programmer un appel<RightArrow className="md:w-4 w-3 ml-3 text-stone-100"/></Link>
              <Link href="/auth/" className={`${linkVariants({variant: "nooutline", size: "sm"})}`}>J&apos;ai un code d&apos;invitation<RightArrow className="md:w-4 w-3 ml-2 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
            </div>
          </div>
        </section>
    )
}

export default Landing
