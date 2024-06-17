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
import HorizontalLogo from "@/components/SvgHoriLogo";
import { Instagram, Telegram } from "@/components/icons";

const DesktopNav = () => {
  return (
    <div className="hidden relative w-full px-24 space-x-12 items-center lg:flex backdrop-blur-md pt-12">
      <Link href="/" className="flex items-center space-x-3 pl-12">
          <HorizontalLogo className="w-44 text-stone-900 fill-current" />
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
            <Link href="/formation" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-stone-900 text-lg font-bold`}>
                Formation 
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
      <div className="lg:hidden relative backdrop-blur-md flex justify-center z-10">
        <Link href="/" className="py-2">
          <HorizontalLogo className="w-32 overflow-visible text-stone-900 fill-current" />
        </Link>
        <div className="flex absolute pt-2 h-full right-12">
          <MenuButton active={active} setActive={setActive} />
        </div>
      </div>
      <motion.div
        className="lg:hidden fixed inset-x-0 flex content-center bg-background/70 backdrop-blur-md w-full"
        initial={{ y: "-100%", opacity: 0 }}
        animate={active ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.3, delay: 0.1 }}
      >
        <div
          className="flex flex-col space-y-2 size-full justify-center items-center p-3 text-night/90 font-semibold text-lg"
          onClick={() => setActive(false)}
        >
          <Separator className="w-1/2 mt-2 bg-stone-900" />
          <Link href="/listes">Listes</Link>
          <Link href="/formation">Formation</Link>
          <Link href="/support">Support</Link>
          <Separator className="w-1/2 bg-stone-900 pb-px" />
          <p>ajouter call to action</p>
        </div>
      </motion.div>
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
