import Link from "next/link"
import Image from "next/image"
import { linkVariants } from "@/components/ui/link"
import { RightArrow } from "@/components/icons"
const Rejoindre = () => {
    return (
        <section className="container md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-[#1E1E1E]">Comment nous rejoindre ?</h1>
              <p className="my-8 text-lg font-medium tracking-tight"></p>
              <div className="relative flex flex-col">
                <div className="border-l-2 border-stone-900">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight md:tracking-normal  text-[#1E1E1E] ml-4">01. <span className="md:text-2xl text-xl font-bold pl-2">Candidature en ligne</span><span role="img" className="ml-2" aria-label="form">📲</span></h2>
                    <p className="my-3 text-sm font-normal tracking-tight md:text-lg md:font-semibold md:tracking-normal ml-14">Remplissez notre formulaire pour nous fournir vos informations et vérifier votre adéquation avec notre communauté.</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight md:tracking-normal text-[#1E1E1E] ml-4">02. <span className="md:text-2xl text-xl font-bold pl-2">Appel stratégique</span><span role="img" className="ml-2" aria-label="telephone">📞</span></h2>
                    <p className="my-3 text-sm font-normal tracking-tight md:text-lg md:font-semibold md:tracking-normal ml-14">Nous évaluons les candidatures en fonction de l'expérience et des objectifs, pour établir un plan d'action sur-mesure. </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight md:tracking-normal text-[#1E1E1E] ml-4">03. <span className="md:text-2xl text-xl font-bold pl-2">Invitation au pré-groupe</span><span role="img" className="ml-2" aria-label="inside">📥</span></h2>
                    <p className="my-3 text-sm font-normal tracking-tight md:text-lg md:font-semibold md:tracking-normal ml-14">Si sélectionné, vous recevrez une invitation à rejoindre notre pré-groupe, offrant un accès anticipé aux formations et outils.</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight md:tracking-normal text-[#1E1E1E] ml-4">04. <span className="md:text-2xl text-xl font-bold pl-2">Mentorat et préparation</span><span role="img" className="ml-2" aria-label="working">👨🏻‍💻</span></h2>
                    <p className="my-3 text-sm font-normal tracking-tight md:text-lg md:font-semibold md:tracking-normal ml-14">Bénéficiez de mentorat personnalisé pour affiner vos stratégies et accédez à nos outils et conseils d'experts.</p>
                  </div>
                </div>
                <div className="border-l-2 border-stone-300">
                  <h2 className="text-lg font-semibold tracking-tight md:tracking-normal text-[#1E1E1E] ml-4">05. <span className="md:text-2xl text-xl font-bold pl-2">Intégration complète</span><span role="img" className="ml-2" aria-label="congrats">✨</span></h2>
                  <p className="my-3 text-sm font-normal tracking-tight md:text-lg md:font-semibold md:tracking-normal ml-14">Intégrez notre cercle d'investisseurs privé, accédant ainsi à nos services exclusifs et stratégies avancées.</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative m-16">
              <Image src="/binance-illustration.jpg" alt="Illustration binance" className="rounded-2xl shadow-lg w-full object-cover pointer-events-none" fill/>
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