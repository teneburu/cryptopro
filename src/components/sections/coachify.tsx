import Image from "next/image";

const Coachify = () => {
    return (
        <section className="container p-4 md:p-16 xl:p-24">
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8">
                <div>
                <Image src="/prime-mockup.png" alt="App Visuel" className="pl-6 object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" width={600} height={600}/>
                </div>
                <div className="">
                <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">02. <span className="text-2xl font-bold pl-2">Coachify, un écosystème dédié à votre réussite</span></h2>
                    <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
                    Un suivi personnalisé qui vous guide à travers les subtilités du marché des cryptomonnaies, offrant des stratégies d'investissement sur mesure et un mentorat dédié pour maximiser vos résultats.. 
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default Coachify