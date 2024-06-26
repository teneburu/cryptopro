import Image from "next/image"

const Listes = () => {
    return (    
        <section className="container p-4 md:p-16 xl:p-24">
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8">
                <div>
                    <Image src="/mockup-listes.png" alt="App Visuel" className="pl-6 object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" width={600} height={600}/>
                </div>
                <div className="">
                <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">03. <span className="text-2xl font-bold pl-2">Coin Elite, recevez en temps réel les listes des meilleures cryptos.</span></h2>
                    <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
                    Notre service phare fournissant des recommandations d'achat et de vente en temps réel, basées sur des analyses professionnelles rigoureuses, vous aidant à investir de manière stratégique et rentable.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Listes