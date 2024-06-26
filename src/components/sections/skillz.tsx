import Image from "next/image";

const Skillz = () => {
    return (
        <section className="container p-4 md:p-16 xl:p-24">
            <h1 className="lg:text-2xl text-xl p-12 font-bold text-[#1E1E1E] max-w-[80vw]"></h1>
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8">
                <div>
                <Image src="/skillz-mockup.png" alt="App Visuel" className="pl-6 object-cover pointer-events-none" sizes="(max-width: 768px) 100vw" width={600} height={600}/>
                </div>
                <div className="">
                <h2 className="text-lg font-semibold text-[#1E1E1E] ml-4">01. <span className="text-2xl font-bold pl-2">Skillz: Libérez votre apprentissage</span></h2>
                    <p className="my-8 lg:text-lg sm:text-sm font-medium text-pretty">
                    Une formation complète sur le trading de cryptomonnaies, adaptée à tous les niveaux de compétence, pour vous permettre de naviguer avec confiance et succès dans le monde des cryptos.
                    <span className="hidden sm:inline"> Initialement réservé à l'élite n'ouvre ses portes que sur sélection.</span>
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default Skillz