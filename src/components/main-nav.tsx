import Link from "next/link";
import { PcNav } from "./pc-nav";
import { TelNav } from "./tel-nav";

type MainNavProps = {
  isPWA: boolean;
};

export function MainNav({ isPWA }: MainNavProps) {
  return (
    <div className="w-full relative ">
      {/* desktop navbar */}
      <div className="px-0 py-0 lg:px-12 lg:py-8">
        <PcNav />
      </div>
      {/* mobile navbar */}
      <TelNav className={isPWA ? 'hidden' : ''} />
    </div>
  );
}
