import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { linkVariants } from "@/components/ui/link"
import { RightArrow } from "@/components/icons"
import Link from "next/link"
import Image from "next/image";

const Cards = () => {
    return (
         <section className="container p-4 py-8 md:p-16 ">
          <div className="grid md:grid-cols-2 md:grid-rows-[0.7fr_1fr_1fr] lg:grid-rows-[1fr_1.2fr_1fr] grid-rows-[1fr_0.8fr_0.8fr_1fr] justify-center pb-8 gap-12">
            <Card className="col-span-2 bg-orange-200/20">
              <div className="flex relative flex-col">
                <CardTitle className="text-stone-900">
                  Qui sommes-nous ?
                </CardTitle>
                <div className="flex">
                  <CardDescription className="text-stone-800 font-normal text-balance">
                    Un cercle d'investisseurs privés réunissant
                    <span className="lg:hidden inline"> du chef d'entreprise au sportif de haut niveau</span>
                    <span className="hidden lg:inline"> des entrepreneurs, chefs d'entreprise et sportifs de haut niveau</span> 
                    , offrant des outils et conseils d'experts
                    <span className="hidden sm:inline"> pour vous guider dans le monde des cryptomonnaies</span>.
                    <span className="hidden lg:inline"> Les membres de notre communauté bénéficient du soutien de traders expérimentés et multiplient leur capital en investissant intelligemment.</span>
                  </CardDescription>
                  <div className="relative size-24 lg:size-32 aspect-square self-end"></div>
                </div>
                <div className="absolute bottom-0 right-0 size-36 lg:size-44 aspect-square">
                  <Image
                    src="/bitcoin3d.png"
                    alt="Bitcoin"
                    fill
                    className="translate-x-8 translate-y-20 lg:translate-x-16 md:translate-y-0 pointer-events-none"
                  />
                </div>
              </div>
            </Card>
            <Card className="md:col-span-1 col-span-2 bg-red-200/20">
              <div className="flex relative flex-col">
                <CardTitle className="text-stone-900">
                  Rejoignez un cercle très fermé.
                </CardTitle>
                <div className="flex">
                  <CardDescription className="text-stone-800 font-normal text-balance">
                    Nous avons ouvert un <span className="whitespace-nowrap">pré-groupe</span><span className="hidden lg:inline"> de sélection</span>, permettant <span className="hidden lg:inline">de bénéficier d'</span>un accès anticipé <span className="hidden lg:inline">aux informations et outils </span>avant une intégration complète.
                  </CardDescription>
                  <div className="relative size-24 lg:size-32 aspect-square self-end"></div>
                </div>
                <div className="absolute bottom-0 right-0 size-36 lg:size-44 aspect-square">
                  <Image
                    src="/laptop.png"
                    alt="Laptop"
                    fill
                    className="translate-x-8 translate-y-10 lg:translate-x-16 lg:translate-y-6 pointer-events-none"
                  />
                </div>
              </div>
            </Card>
            <Card className="md:col-span-1 col-span-2 bg-rose-200/20">
              <div className="flex relative flex-col">
                <CardTitle className="text-stone-900">
                  Support et mentorat.
                </CardTitle>
                <div className="flex">
                  <CardDescription className="text-stone-800 font-normal  text-balance">
                    Recevez un mentorat personnalisé, des formations <span className="hidden lg:inline">avancées</span> et des recommandations en temps réel<span className="hidden lg:inline">, garantissant une préparation optimale et des stratégies d'investissement rentables</span>.
                  </CardDescription>
                  <div className="relative size-24 lg:size-32 aspect-square self-end"></div>
                </div>
                <div className="absolute bottom-2 right-0 size-36 lg:size-44 aspect-square">
                  <Image
                    src="/document.png"
                    alt="Document"
                    fill
                    className="translate-x-8 translate-y-14 lg:translate-x-16 lg:translate-y-4 pointer-events-none"
                  />
                </div>
              </div>
            </Card>
            <Card className="col-span-2 bg-night">
              <div className="pb-3">
              <CardTitle className="text-stone-100">
                Parlons d'abord de vive voix.
              </CardTitle>
              <div className="size-36 relative aspect-square float-end">
              <Image
                src="/appel.png"
                alt="Memojiappel"
                fill
                className="absolute drop-shadow-white bottom-0 pointer-events-none"
              />
              </div>
              <CardDescription className="text-stone-100 mb-6 font-normal md:text-md md:tracking-normal">
                Nous mettons en valeur les relations humaines, pour ne pas vous laisser seul face au marché.<span className="hidden sm:inline"> C&apos;est pourquoi nous ne donnons accès à notre service qu'après un appel avec un conseiller.</span>             
              </CardDescription>
            <div className="justify-center hidden md:block">
              <Link href="/auth/" className={`${linkVariants({variant: "white"})}`}>Programmer un appel<RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
            </div>
            <div className="justify-center col-span-2 block md:hidden">
              <Link href="/auth/" className={`${linkVariants({variant: "white", size: "sm"})}`}>Programmer un appel<RightArrow className="w-3 ml-2 text-stone-900"/></Link>
            </div>
              </div>
            </Card>
          </div>
        </section>
    )
}

export default Cards