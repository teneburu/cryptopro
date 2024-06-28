import Image from "next/image"

const Listes = () => {
    return (    
        <section className="container p-4 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8">
                <div>
                    <Image src="dd8d6714-dfc8-4bda-8037-921832111b00" alt="Mockup Listes" className="pl-6 object-cover pointer-events-none" width={600} height={600}/>
                </div>
                <div className="p-3">
                <h2 className="lg:text-2xl text-xl font-semibold">Coin Elite: Recevez en temps réel les listes des meilleures cryptos.</h2>
                    <p className="my-4 text-sm font-normal tracking-tight md:text-lg md:font-semibold md:tracking-normal">
                    Notre service phare fournissant des recommandations d&apos;achat et de vente en temps réel, basées sur des analyses professionnelles rigoureuses, vous aidant à investir de manière stratégique et rentable.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Listes