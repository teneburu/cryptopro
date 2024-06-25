import Link from "next/link";
import { HoriLogo } from "./icons";


export const PcNav = () => {
    return (
    <div className="hidden sticky w-full items-center lg:flex">
      <Link href="/" className="flex items-center p-12 ml-8">
        <HoriLogo className="w-44 text-stone-900 fill-current" />
      </Link>
    </div>
    )
}