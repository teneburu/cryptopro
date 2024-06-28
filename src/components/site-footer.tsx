import { CropHoriLogo, Instagram, Telegram } from "./icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bottom-0 mt-6 w-screen bg-gradient-to-b from-[#edf2fb]/20 to-[#fff1e6]/40">
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
