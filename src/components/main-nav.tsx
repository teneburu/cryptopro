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
      <div className="z-10">
        <PcNav />
      </div>
      {/* mobile navbar */}
      <TelNav className={isPWA ? 'hidden' : ''} />
    </div>
  );
}
