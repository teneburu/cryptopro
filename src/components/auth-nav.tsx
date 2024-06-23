import { createClient } from '@/supabase/server'
import { Cog, Instagram, Telegram, User, Youtube } from './icons'
import { Separator } from './ui/separator'
import Link from 'next/link'
import UserNav from './user-nav'

export default async function AuthNav() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return (
        <div className="hidden relative w-full space-x-12 items-center justify-end lg:flex pr-12">
            <Link href="/"><Instagram className="size-7 text-stone-900 fill-current"/></Link>
            <Link href="/"><Youtube className="size-7 text-stone-900 fill-current"/></Link>
            <Link href="/"><Telegram className="size-7 text-stone-900 fill-current"/></Link>
            <Separator orientation="vertical"/>
            <Link href="/auth"><User className="size-7 text-stone-900 fill-current"/></Link>
        </div>
    )
  } else if (data?.user) {
    return (
        <div className="hidden relative w-full px-24 space-x-12 items-center justify-end lg:flex">
            <UserNav data={data}/>
        </div>
    )
  }
}