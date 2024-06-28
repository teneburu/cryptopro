import Image from "next/image";

const Skillz = () => {
    return (
        <section className="container p-4 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8">
                <div>
                <Image src="/skillz-mockup.png" alt="Mockup Skillz" className="pl-6 object-cover pointer-events-none" width={600} height={600}/>
                </div>
                <div className="p-3">
                <h2 className="lg:text-2xl text-xl font-semibold">Skillz: Libérez votre apprentissage.</h2>
                    <p className="my-4 text-sm font-normal tracking-tight md:text-lg md:font-semibold md:tracking-normal text-pretty">
                    Une formation complète sur le trading de cryptomonnaies, adaptée à tous les niveaux de compétence, pour vous permettre de naviguer avec confiance et succès dans le monde des cryptos.
                    </p>
                </div>
            </div>
        </section> 
    )
}

export default Skillz