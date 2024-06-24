import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/server'
import OnboardingForm from '@/components/onboarding-form'
import { VertLogo } from '@/components/icons'
import Image from 'next/image'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='flex flex-col relative min-h-screen items-center justify-center'>
      <Image src="/gradient/pc-orange-bgg3.png" alt="Orange Gradient Background Top" fill className="pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
      <VertLogo className='size-40 text-night fill-current mb-8'/>
      <p className='text-sm text-stone-700/70 py-2'>Connecté avec {data.user.email}</p>
      <OnboardingForm />
    </div>
  )
}