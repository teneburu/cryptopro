import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import  { AppGui1, AppVisu1, AppVisu2, RightArrow } from "@/components/icons"
import VideoComponent from "@/components/video-component"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Page() {
  return (
    <div>
      <Image src="/backgroundgradient.png" alt="placeholder" fill className=" object-cover object-top absolute pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
      <section className="container p-4 py-8 md:p-16 xl:p-24 sm:h-[calc(40vh)] md:h-[calc(50vh)] xl:h-[calc(60vh)]">
        <h1 className="text-7xl font-bold text-[#1E1E1E] mt-52">Investir les meilleures<br/> cryptomonnaies.</h1>
        <p className="my-8 text-lg font-medium">Crypto Pro vous accompagne dans vos investissements en cryptomonnaie, <br/>et vous enseigne comment maximiser vos profits. Profitez de notre expertise <br/>pour fructifier votre capital et tirer parti des prochains bull runs.</p>
        <Link href="/listes" className={buttonVariants({variant: "outline"})}>Programmer un appel <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
        <Link href="/listes" className={buttonVariants({variant: "nooutline"})}>Assister à un live <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
      </section>
      <section className="container p-4 py-8 md:p-16 xl:p-24">
        <div className="sm:h-[calc(60vh)] md:h-[calc(70vh)] xl:h-[calc(80vh)]">
            <h1 className="text-4xl font-bold text-[#1E1E1E] mt-52">Démystifier le monde complexe <br/> des cryptomonnaies.</h1>
            <div className="flex mb-16 relative w-full items-center">
              <p className="my-8 text-lg font-medium">Nous fournissons à nos membres les outils nécessaires pour prendre <br/>des décisions éclairées, en rendant l'investissement plus facile et efficace.</p>
              <div className="absolute right-0"><Link href="/formation" className={` ${buttonVariants({variant: "outline"})}`}>En savoir plus <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link></div>
            </div>
          <VideoComponent video_id="aZO9A4TWmds" className="rounded-3xl shadow-2xl"/>
        </div>
      </section>
      <section className="container p-4 py-8 md:p-16 xl:p-24">
        <div className="sm:h-[calc(60vh)] md:h-[calc(70vh)] xl:h-[calc(80vh)]">
          <div className="grid grid-cols-2 grid-rows-7 justify-center pb-8 sm:gap-6 md:gap-8 xl:flex-nowrap">
          <Card className="col-span-2 row-span-2 flex-row  py-12 place-items-center bg-orange-200/20">
            <CardContent className="flex flex-col absolute size-44 right-16">
              <Image src='/handshake.png' alt='handshake' fill/>
            </CardContent>
              <CardTitle className="text-3xl text-stone-800 font-semibold">Rejoignez un cercle très fermé.</CardTitle>
            <CardFooter className="text-stone-800">
              Nous mettons en valeur les relations humaines, pour ne pas vous laisser seul face au marché. <br/> C'est pourquoi nous ne donnons accès à notre service que sur invitation.
            </CardFooter>
            <Link href="/listes" className={`ml-8 ${buttonVariants({variant: "outline"})}`}><RightArrow className="w-4 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
          </Card>
          <Card className="row-span-2 flex-row py-4 place-items-center bg-red-200/20">
            <CardContent className="absolute right-8 bottom-0">
              <AppVisu1 className="size-64"/>
            </CardContent>
              <CardTitle className="text-xl pt-4 text-stone-800 font-semibold">Une application <br/>pour tout vos <br/>investissements</CardTitle>
            <CardFooter className="text-stone-800">
              Téléchargez notre application <br/>sur Android et iOS pour <br/>travailler depuis n&apos;importe où.
            </CardFooter>
          </Card>
          <Card className="row-span-2 flex-row py-4 place-items-center bg-rose-200/20">
            <CardContent className="absolute right-[-10px] bottom-0">
              <AppVisu2 className="size-64"/>
            </CardContent>
              <CardTitle className="text-xl pt-4 text-stone-800 font-semibold">Profitez des listes crypto <br/>les plus performantes <br/>du marché</CardTitle>
            <CardFooter className="text-stone-800">
              Depuis 2020, nos investissements <br/>ont connu une croissance de 14 000 %.
            </CardFooter>
          </Card>
          <Card className="col-span-2 row-span-3 flex-row py-12 place-items-center bg-night">
            <CardContent className="absolute overflow-hidden -right-16 -bottom-52">
              <AppGui1 className="size-[calc(55vh)]"/>
            </CardContent>
              <CardTitle className="text-3xl text-stone-100 font-semibold">Une interface intuitive pour tout centraliser</CardTitle>
            <CardFooter className="text-lg tracking-wide text-stone-100">
              Nous vous accompagnons tout au long de vos investissements, <br/>avec une formation adaptée à tout les niveaux de compétence. <br/>Notre mission est de fournir les outils, les ressources <br/>et le soutien nécessaires pour que chacun <br/>puisse atteindre ses objectifs financiers.
            </CardFooter>
            <Link href="/listes" className={`ml-8 absolute bottom-16 ${buttonVariants({variant: "white"})}`}><RightArrow className="w-4 text-stone-100 group-hover:text-stone-500 fill-current"/></Link>
          </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
