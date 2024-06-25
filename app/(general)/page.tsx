import Image from "next/image"
import { linkVariants } from "@/components/ui/link"
import Link from "next/link"
import  { AppGui1, AppVisu1, AppVisu2, RightArrow, BtcMeet } from "@/components/icons"
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
      <div className="sm:h-[calc(50vh)] md:h-[calc(60vh)] xl:h-[calc(70vh)]">
        <section className="container p-4 py-8 md:p-16">
          <div className="grid md:grid-cols-2 grid- grid-cols-1 md:grid-cols-[60%_40%] gap-4">
            <div className="">
              <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-[#1E1E1E]  max-w-[80vw]">Bienvenue chez Crypto Pro.</h1>
                <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
                  Notre mission est de démystifier le monde complexe des cryptomonnaies et de fournir à nos membres les outils nécessaires pour prendre des décisions d'investissement éclairées. 
                  <span className="hidden sm:inline"> Initialement réservé à l'élite n'ouvre ses portes que sur sélection.</span>
                </p>
              <Link href="/auth/" className={`${linkVariants({variant: "outline"})} sm:${linkVariants({variant: "outline", size: "sm"})}`}>Programmer un appel<RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
              <Link href="/auth/" className={`${linkVariants({variant: "nooutline"})} sm:${linkVariants({variant: "nooutline", size: "sm"})}`}>J'ai un code d'invitation<RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
            </div>
            <div>
              
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="container p-4 md:p-16 xl:p-24">
            <VideoComponent video_id="967343775" className="w-full h-full"/>
            <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold pt-6 text-[#1E1E1E]">Démystifier le monde complexe des cryptomonnaies.</h1>
            <p className="my-6 lg:text-lg sm:text-sm font-medium tracking-tight">Nous fournissons à nos membres les outils nécessaires pour prendre des décisions éclairées, en rendant l'investissement plus facile et efficace. <br/> On vous explique en vidéo.</p>  
        </section>   
      </div>
      <div className="relative h-min-content pt-14">
        <section className="container p-8 md:p-16 xl:p-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
            <div className="relative m-16">
              <Image src="/binance-illustration.jpg" alt="App Visuel" className="rounded-2xl shadow-lg w-full object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" fill/>
            </div>
          </div>
        </section>
      </div>
      <div> 
        <section className="container p-4 md:p-16 xl:p-24">
          <div className="grid md:grid-cols-2 grid- grid-cols-1 md:grid-cols-[55%_45%] gap-8">
            <div>
              <Image src="/skillz-mockup.png" alt="App Visuel" className="pl-6 object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" width={600} height={600}/>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">01. <span className="text-2xl font-bold pl-2">Skillz: Libérez votre apprentissage</span></h2>
                <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
                  Notre mission est de démystifier le monde complexe des cryptomonnaies et de fournir à nos membres les outils nécessaires pour prendre des décisions d'investissement éclairées. 
                  <span className="hidden sm:inline"> Initialement réservé à l'élite n'ouvre ses portes que sur sélection.</span>
                </p>
            </div>
          </div>
        </section>        
      </div>
      <div> 
        <section className="container p-4 md:p-16 xl:p-24">
          <div className="grid md:grid-cols-2 grid- grid-cols-1 md:grid-cols-[55%_45%] gap-8">
            <div>
              <Image src="/prime-mockup.png" alt="App Visuel" className="pl-6 object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" width={600} height={600}/>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">02. <span className="text-2xl font-bold pl-2">Coachify, un écosystème dédié à votre réussite</span></h2>
                <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
                  Notre mission est de démystifier le monde complexe des cryptomonnaies et de fournir à nos membres les outils nécessaires pour prendre des décisions d'investissement éclairées. 
                  <span className="hidden sm:inline"> Initialement réservé à l'élite n'ouvre ses portes que sur sélection.</span>
                </p>
            </div>
          </div>
        </section>        
      </div>
      <div> 
        <section className="container p-4 md:p-16 xl:p-24">
          <div className="grid md:grid-cols-2 grid- grid-cols-1 md:grid-cols-[55%_45%] gap-8">
            <div>
              <Image src="/mockup-listes.png" alt="App Visuel" className="pl-6 object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" width={600} height={600}/>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">03. <span className="text-2xl font-bold pl-2">Listes crypto: Recevez en temps réel les meilleures cryptos.</span></h2>
                <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
                  Notre mission est de démystifier le monde complexe des cryptomonnaies et de fournir à nos membres les outils nécessaires pour prendre des décisions d'investissement éclairées. 
                  <span className="hidden sm:inline"> Initialement réservé à l'élite n'ouvre ses portes que sur sélection.</span>
                </p>
            </div>
          </div>
        </section>        
      </div>
      <div>
        <section className="container p-4 py-8 md:p-16 xl:p-24">
          <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-4 justify-center pb-8 gap-8">
            <Card className="md:col-span-2 bg-orange-200/20">
              <div>
                <CardTitle className="text-stone-900">
                  Qui sommes-nous ?
                </CardTitle>
                <CardDescription className="text-stone-800 pb-3 text-balance">
                  Un cercle d'investisseurs privés réunissant des entrepreneurs, chefs d'entreprise et sportifs de haut niveau, offrant des outils et conseils d'experts pour des décisions d'investissement éclairées dans le monde des cryptomonnaies.
                </CardDescription>
                <CardContent className="flex justify-normal">
                  <Link href="/auth" className={`${linkVariants({variant: "outline"})}`}>Nous rejoindre 
                    <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/>
                  </Link>
                </CardContent>
              </div>
            </Card>
            <Card className="bg-red-200/20">
              <div className="col-span-2">
                <CardTitle className="text-stone-800">
                  Rejoignez un cercle très fermé.
                </CardTitle>
                <CardDescription className="text-stone-800 mr-4">
                  Nous avons ouvert un pré-groupe de sélection, permettant de bénéficier d'un accès anticipé aux informations et outils avant une intégration complète.
                </CardDescription>
              </div>
            </Card>
            <Card className="bg-rose-200/20">
              <div className="col-span-2">
                <CardTitle className="text-stone-800">
                  Support et mentorat
                </CardTitle>
                <CardDescription className="text-stone-800 mr-4">
                  Recevez un mentorat personnalisé, des formations avancées et des recommandations en temps réel, garantissant une préparation optimale et des stratégies d'investissement rentables.
                </CardDescription>
              </div>
            </Card>
            <Card className="md:col-span-2 bg-night">
              <div className="pb-8">
              <CardTitle className="text-stone-100">
                Parlons d'abord de vive voix.
              </CardTitle>
              <CardDescription className="text-stone-100">
                Nous mettons en valeur les relations humaines, pour ne pas vous laisser seul face au marché. C&apos;est pourquoi nous ne donnons accès à notre service qu'après un appel avec un conseiller.
              </CardDescription>
              <div className="pt-6"><Link href="/auth" className={` ${linkVariants({variant: "white"})}`}>Programmez un appel<RightArrow className="w-4 ml-4 text-stone-100 group-hover:text-stone-500 fill-current"/></Link></div>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <div>
        <section className="container p-4 py-8 md:p-16 xl:p-24">
          <div className="grid md:grid-cols-2 grid- grid-cols-1 md:grid-cols-[60%_40%] gap-4">
            <div className="flex-col mb-16 relative w-full items-center">
              <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold pb-8 ml-3 text-[#1E1E1E]">Titre section témoignages.</h1>
              <p className="my-6 ml-3 lg:text-lg sm:text-sm font-medium tracking-tight">Pourquoi pas vous? Ils n'ont rien fourni de plus que leur confiance et leur implication, rejoignez-nous sur la route que nous pavons vers le succès. </p>
              <Link href="/auth" className={`${linkVariants({variant: "nooutline"})} sm:${linkVariants({variant: "nooutline", size: "sm"})}`}>Faire comme eux <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
            </div>
            <div>
              <Temoignage/>
            </div>
          </div>
        </section>
        <section className="container p-8 md:p-16 xl:p-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-[#1E1E1E]">Comment nous rejoindre ?</h1>
              <p className="my-8 text-lg font-medium tracking-tight"></p>
              <div className="relative flex flex-col">
                <div className="border-l-2 border-stone-900">
                  <div>
                    <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">01. <span className="text-2xl font-bold pl-2">Candidature en ligne</span></h2>
                    <p className="my-3 ml-14">Remplissez notre formulaire en ligne pour nous fournir vos informations personnelles, objectifs d'investissement et vérifier votre adéquation avec notre communauté.</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">02. <span className="text-2xl font-bold pl-2">Sélection rigoureuse</span></h2>
                    <p className="my-3 ml-14">Nous évaluons les candidatures en fonction de l'expérience, des objectifs d'investissement et de l'engagement envers notre vision de l'excellence. </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">03. <span className="text-2xl font-bold pl-2">Invitation au pré-groupe</span></h2>
                    <p className="my-3 ml-14">Si sélectionné, vous recevrez une invitation à rejoindre notre pré-groupe exclusif, offrant un accès anticipé aux informations, outils et formations.</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">04. <span className="text-2xl font-bold pl-2">Mentorat et préparation</span></h2>
                  <p className="my-3 ml-14">En tant que membre du pré-groupe, bénéficiez de mentorat personnalisé pour affiner vos stratégies d'investissement et accédez à des outils avancés et conseils d'experts.</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">04. <span className="text-2xl font-bold pl-2">Intégration complète</span></h2>
                  <p className="my-3 ml-14">Après évaluation dans le pré-groupe, vous pourrez intégrer notre cercle d'investisseurs privé, accédant ainsi à nos services exclusifs et stratégies avancées.</p>
                </div>
              </div>
            </div>
            <div className="relative m-16">
              <Image src="/binance-illustration.jpg" alt="App Visuel" className="rounded-2xl shadow-lg w-full object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" fill/>
            </div>
          </div>
          <div className="flex-col my-16 relative w-full items-center">
            <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold pt- ml-3 text-[#1E1E1E]">Saisissez cette occasion.</h1>
            <p className="mt-4 mb-2 ml-3 lg:text-lg sm:text-sm font-medium tracking-tight">Une fois inscrit, vous recevrez une invitation à rejoindre notre pré-groupe.</p>
            <Link href="/auth" className={`${linkVariants({variant: "nooutline"})} sm:${linkVariants({variant: "nooutline", size: "sm"})}`}>S'inscrire <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
          </div>
        </section>
      </div>
    </div>
  )
}
