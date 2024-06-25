import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { linkVariants } from "@/components/ui/link"
import { RightArrow } from "@/components/icons"
import Link from "next/link"

const Cards = () => {
    return (
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
    )
}

export default Cards