import Link from "next/link";
import { CropHoriLogo } from "@/components/icons";

export const TelNav = ({...props}) => {
  return (
    <div {...props}>
      <div className="lg:hidden fixed top-0 w-full backdrop-blur-sm flex justify-center z-10">
        <Link href="/" className="pt-4">
          <CropHoriLogo className="w-44 overflow-visible text-stone-900 fill-current" />
        </Link>
      </div>
    </div>
  )
}