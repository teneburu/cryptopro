import Link from "next/link";
import { HoriLogo } from "./icons";


export const PcNav = () => {
    return (
    <div className="hidden relative w-full space-x-12 items-center lg:flex">
      <Link href="/" className="flex items-center space-x-3">
        <HoriLogo className="w-44 text-stone-900 fill-current" />
      </Link>
    </div>
    )
}