import Image from "next/image";

const Coachify = () => {
    return (
        <section className="container p-4 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8">
                <div>
                <Image src="eebb6d2b-e79f-482a-6bdf-aa01fe874500" alt="Mockup Prime" className="pl-6 object-cover pointer-events-none" width={600} height={600}/>
                </div>
                <div className="p-3">
                <h2 className="lg:text-2xl text-xl font-semibold">Coachify: Un écosystème dédié à votre réussite.</h2>
                    <p className="my-4 text-sm font-normal tracking-tight md:text-lg md:font-semibold md:tracking-normal text-pretty ">
                    Un suivi personnalisé qui vous guide à travers les subtilités du marché des cryptomonnaies, offrant des stratégies d&apos;investissement sur mesure et un mentorat dédié pour maximiser vos résultats.
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default Coachify