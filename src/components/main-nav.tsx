"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { MenuButton } from "./ui/menubutton";
import { useEffect, useState } from "react";
import { Instagram, Telegram, CropHoriLogo, HoriLogo } from "@/components/icons";

const DesktopNav = () => {
  return (
    <div className="hidden relative w-full px-24 space-x-12 items-center lg:flex backdrop-blur-md pt-12">
      <Link href="/" className="flex items-center space-x-3 pl-12">
          <HoriLogo className="w-44 text-stone-900 fill-current" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/listes" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-stone-900 text-lg font-bold`}>
                Listes
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/academie" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-stone-900 text-lg font-bold`}>
                Académie 
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/support" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-stone-900 text-lg font-bold`}>
                Support
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex absolute right-0 pr-32 space-x-8">
        <Instagram className="size-7 text-stone-900 fill-current"/>
        <Telegram className="size-7 text-stone-900 fill-current"/>
      </div>
    </div>
  )
}

const MobileNav = ({...props}) => {
  const [active, setActive] = useState(false);
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

export function MainNav() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // Check if the code is running in the browser
    if (typeof window !== 'undefined') {
      //@ts-ignore
      const checkPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
      setIsPWA(checkPWA);
    }
  }, []);
  return (
    <div className="w-full relative">
      {/* desktop navbar */}
      <DesktopNav />
      {/* mobile navbar */}
      <MobileNav className={isPWA ? 'hidden' : ''} />
    </div>
  );
}
