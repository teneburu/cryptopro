import { CropHoriLogo, Instagram, Telegram } from "./icons";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative bottom-0 mt-6 w-screen bg-gradient-to-b from-[#edf2fb]/60 to-[#fff1e6]/40">
        <section className="container grid grid-cols-2 grid-rows-1 mt-8">
            <div className="relative h-24">
                <CropHoriLogo className="w-44 text-stone-900 fill-current"/>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 items-start gap-x-6 gap-y-4">
                <div className="">
                    <h5 className="text-md mb-3 font-bold lg:text-xl">
                    Services
                    </h5>
                    <ul className="footer-links list-none">
                    <li className="mb-2">
                        <a href="/listes" className="border-b border-solid border-transparent text-sm hover:border-amber-400 hover:text-amber-400 lg:text-lg">
                        Coin Elite: Liste des meilleures cryptos
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/formation/skillz" className="border-b border-solid border-transparent text-sm hover:border-amber-400 hover:text-amber-400 lg:text-lg">
                        Formation Skillz
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/formation/coachify" className="border-b border-solid border-transparent text-sm hover:border-amber-400 hover:text-amber-400 lg:text-lg">
                        Formation Coachify
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="">
                    <h5 className="text-md mb-4 font-bold lg:text-xl">
                    Pour nous contacter
                    </h5>
                    <ul className="footer-links list-none">
                    <div className="flex items-center gap-2">
                        <Instagram className="size-7 text-stone-900 fill-current"/>
                        <li className="border-b border-solid border-transparent text-sm hover:border-amber-400 hover:text-amber-400 lg:text-lg">
                        Instagram
                        </li>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <Telegram className="size-7 text-stone-900 fill-current"/>
                        <li className="border-b border-solid border-transparent text-sm hover:border-amber-400 hover:text-amber-400 lg:text-lg">
                        Telegram
                        </li>
                    </div>
                    </ul>
                </div>
            </div>
        </section>
        <div className="pt-8 lg:mt-2">
            <p className="text-center text-sm text-[#ffa69e]/90"> © 2024 CRYPTO PRO - Tous droits réservés</p>
            <p className="mb-4 text-center text-sm font-normal text-[#ff686b]/70">
                Créé par{" "}
                <Link href={"https://tenebr.es"}>
                <span className="underline-offset-4 hover:font-semibold hover:text-[#ff686b] hover:underline">
                    Ténèbres
                </span>
                </Link>
            </p>
        </div>
    </footer>
  );
}
