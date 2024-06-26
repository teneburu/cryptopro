import Link from "next/link"
import Image from "next/image"
import { linkVariants } from "@/components/ui/link"
import { RightArrow } from "@/components/icons"
const Rejoindre = () => {
    return (
        <section className="container md:p-16 xl:p-24">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
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
                  <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">05. <span className="text-2xl font-bold pl-2">Intégration complète</span></h2>
                  <p className="my-3 ml-14">Après évaluation dans le pré-groupe, vous pourrez intégrer notre cercle d'investisseurs privé, accédant ainsi à nos services exclusifs et stratégies avancées.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative m-16">
              <Image src="/binance-illustration.jpg" alt="App Visuel" className="rounded-2xl shadow-lg w-full object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" fill/>
            </div>
          </div>
          <div className="flex-col relative w-full my-16 items-center">
            <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold ml-3 text-[#1E1E1E]">Saisissez cette occasion.</h1>
            <p className="mt-4 mb-2 ml-3 lg:text-lg sm:text-sm font-medium tracking-tight">Une fois inscrit, vous recevrez une invitation à rejoindre notre pré-groupe.</p>
            <Link href="/auth" className={`${linkVariants({variant: "nooutline"})} sm:${linkVariants({variant: "nooutline", size: "sm"})}`}>S'inscrire <RightArrow className="w-4 ml-3 text-stone-900 group-hover:text-stone-600 fill-current"/></Link>
          </div>
        </section>
    )
}

export default Rejoindre