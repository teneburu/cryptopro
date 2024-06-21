import Image from "next/image"
import { linkVariants } from "@/components/ui/link"
import Link from "next/link"
import  { AppGui1, AppVisu1, AppVisu2, RightArrow } from "@/components/icons"
import VideoComponent from "@/components/video-component"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Temoignage from "@/components/temoignage"

export default function Page() {
  return (
    <div className="relative overflow-visible w-full h-full pt-24">
      <div className="inset-0 -z-10 hidden md:block">
          <Image src="/gradient/pc-orange-bgg.png" alt="Orange Gradient Background Top" fill className="object-contain object-top pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
          <Image src="/gradient/pc-orange-bgg2.png" alt="Orange Gradient Background Bottom" fill className="object-contain object-bottom pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
      </div>
      <div className="inset-0 -z-10 block md:hidden">
          <Image src="/gradient/tel-orange-bgg.png" alt="Orange Gradient Background Top" fill className="object-contain object-top pointer-events-none -z-10" priority sizes="(max-width: 700px) 100vw"/>
          <Image src="/gradient/tel-orange-bgg2.png" alt="Orange Gradient Background Bottom" fill className="pointer-events-none -z-10" priority sizes="(max-width: 700px) 100vw" style={{objectFit: "contain", objectPosition: "center"}}/>
          <Image src="/gradient/tel-orange-bgg3.png" alt="Orange Gradient Background Bottom" fill className="pointer-events-none -z-10" priority sizes="(max-width: 700px) 100vw" style={{objectFit: "contain", objectPosition: "bottom"}}/>
      </div>
      <div className="sm:h-[calc(60vh)] md:h-[calc(70vh)] xl:h-[calc(80vh)]">
        <section className="container p-4 py-8 md:p-16 xl:p-24">
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-[#1E1E1E] ">Investir les meilleures cryptomonnaies.</h1>
            <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
              On vous accompagne dans vos investissements en cryptomonnaie, et on vous enseigne comment maximiser vos profits. 
              <span className="hidden sm:inline">Profitez de notre expertise pour fructifier votre capital et tirer parti des prochains bull runs.</span>
            </p>
          <Link href="/onboarding" className={`${linkVariants({variant: "outline"})} sm:${linkVariants({variant: "outline", size: "sm"})}`}>Programmer un appel <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
          <Link href="/" className={`${linkVariants({variant: "nooutline"})} sm:${linkVariants({variant: "nooutline", size: "sm"})}`}>Assister à un live <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
        </section>
      </div>
      <div>
        <section className="container p-4 md:p-16 xl:p-24">
          <div className="sm:h-[calc(50vh)] md:h-[calc(60vh)] xl:h-[calc(70vh)] pt-12">
            <VideoComponent video_id="aZO9A4TWmds" className="rounded-3xl shadow-lg "/>
            <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold pt-8 ml-3 text-[#1E1E1E]">Démystifier le monde complexe des cryptomonnaies.</h1>
            <div className="flex-col mb-16 relative w-full items-center">
              <p className="mt-4 mb-2 ml-3 lg:text-lg sm:text-sm font-medium tracking-tight">Nous fournissons à nos membres les outils nécessaires pour prendre des décisions éclairées, en rendant l&apos;investissement plus facile et efficace. </p>
              <Link href="/academie" className={`${linkVariants({variant: "nooutline"})} sm:${linkVariants({variant: "nooutline", size: "sm"})}`}>En savoir plus <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
            </div>
          </div>
        </section>
      </div>
      <div className="relative h-min-content">
        <section className="container p-8 md:p-16 xl:p-24">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-[#1E1E1E]">Bénéficiez de nos conseils d&apos;experts en investissement</h1>
              <p className="my-8 text-lg font-medium tracking-tight">Nos équipes analysent en continu le marché de la cryptomonnaie pour vous sélectionner les monnaies les plus prometteuses et vous indiquer les meilleurs points d'entrée et de sortie.</p>
              <div className="relative flex flex-col">
                <div className="border-l-2 border-stone-900">
                  <div>
                    <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">01. <span className="text-2xl font-bold pl-2">Programmez un appel</span></h2>
                    <p className="my-3 ml-14">Un conseiller vous sera attribué pour vous aider à accomplir votre objectif.</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">02. <span className="text-2xl font-bold pl-2">Commencez la formation</span></h2>
                    <p className="my-3 ml-14">Nous mettons à votre disposition des modules d'apprentissage pour tout les niveaux d'expérience en trading.</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">03. <span className="text-2xl font-bold pl-2">Suivez nos listes crypto</span></h2>
                    <p className="my-3 ml-14">Recevez en temps réel les meilleures cryptos du marché à un moment donné, vous n'avez plus qu'à copier-coller nos signaux.</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">04. <span className="text-2xl font-bold pl-2">Fructifiez votre capital</span></h2>
                  <p className="my-3 ml-14">Nos membres multiplient fréquemment leur investissements grâce au soutien de nos conseillers expérimentés.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image src="/app-cp-free.jpg" alt="App Visuel" className="rounded-2xl shadow-lg w-full object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" fill/>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="container p-4 py-8 md:p-16 xl:p-24">
          <div className="grid grid-cols-2 grid-rows-3 justify-center pb-8 gap-8">
            <Card className="col-span-2 pb-8 bg-orange-200/20">
              <div>
                <CardTitle className="text-stone-900">
                  Rejoignez un cercle très fermé.
                </CardTitle>
                <CardDescription className="text-stone-800 pb-6">
                  Nous mettons en valeur les relations humaines, pour ne pas vous laisser seul face au marché. C&apos;est pourquoi nous ne donnons accès à notre service que sur invitation.
                </CardDescription>
                <CardContent className="flex justify-center md:justify-normal">
                  <Link href="/listes" className={`${linkVariants({variant: "outline"})}`}>
                    <RightArrow className="w-4 text-stone-900 group-hover:text-stone-600 fill-current"/>
                  </Link>
                </CardContent>
              </div>
              <div className="">
                <CardFooter className="flex justify-center pb-6">
                  <Image src='/handshake.png' width={200} height={200} alt='handshake'/>
                </CardFooter>
              </div>
            </Card>
            <Card className="bg-red-200/20">
              <div>
                <CardTitle className="text-stone-800">
                  Application pour iOS et Android
                </CardTitle>
                <CardDescription className="text-stone-800 mr-4">
                  Téléchargez notre application sur Android et iOS pour travailler depuis n&apos;importe où.
                </CardDescription>
              </div>
              <CardContent className="flex absolute justify-end w-full bottom-0 right-2">
                <AppVisu1 className="size-40 md:size-48 lg:size-56"/>
              </CardContent>
            </Card>
            <Card className=" bg-rose-200/20">
              <div>
                <CardTitle className="text-stone-800">
                  Listes aux performances excellentes
                </CardTitle>
                <CardDescription className="text-stone-800 mr-4">
                  Depuis 2020, nos investissements ont connu une croissance de 14 000 %.
                </CardDescription>
              </div>
              <CardContent className="flex absolute w-full justify-end bottom-0 right-2">
                <AppVisu2 className="size-40 md:size-48 lg:size-56"/>
              </CardContent>
            </Card>
            <Card className="col-span-2 gap-8 overflow-hidden bg-night">
              <div className="pb-8">
              <CardTitle className="text-stone-100">
                Une interface intuitive pour tout centraliser
              </CardTitle>
              <CardDescription className="text-stone-100">
                Nous vous accompagnons tout au long de vos investissements, avec une formation adaptée à tout les niveaux de compétence. Notre mission est de fournir les outils, les ressources et le soutien nécessaires pour que chacun puisse atteindre ses objectifs financiers.
              </CardDescription>
              <Link href="/listes" className={`${linkVariants({variant: "white"})}`}><RightArrow className="w-4 text-stone-100 group-hover:text-stone-500 fill-current"/></Link>
              </div>
              <CardContent className="flex absolute w-full justify-end -bottom-24 -right-16">
                <AppGui1 className="h-[400px]"/>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <div>
        <section className="container p-4 py-8 md:p-16 xl:p-24">
          <Temoignage/>
            <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold pt-8 ml-3 text-[#1E1E1E]">Ils sont nombreux à l'avoir fait.</h1>
            <div className="flex-col mb-16 relative w-full items-center">
              <p className="my-6 ml-3 lg:text-lg sm:text-sm font-medium tracking-tight">Pourquoi pas vous? Ils n'ont rien fourni de plus que leur confiance et leur implication, rejoignez-nous sur la route que nous pavons vers le succès. </p>
              <Link href="/academie" className={`${linkVariants({variant: "nooutline"})} sm:${linkVariants({variant: "nooutline", size: "sm"})}`}>Plus de témoignages <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
            </div>
        </section>
      </div>
    </div>
  )
}
