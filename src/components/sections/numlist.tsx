import Image from "next/image"

const Numlist = () => {
    return (
      <section className="container p-8 md:p-16 xl:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-12 text-[#1E1E1E]">Bénéficiez de nos conseils d&apos;experts en investissement</h1>
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
    )
}
export default Numlist