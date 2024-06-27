import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/server'
import OnboardingForm from '@/components/onboarding-form'
import { VertLogo } from '@/components/icons'
import Image from 'next/image'

export default async function Onboarding() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return redirect(`/auth/error?error=${encodeURIComponent(error.message || 'Unauthorized access')}`);
  }

  return (
    <div>
      <div className='p-4'>
        <OnboardingForm />
      </div>
      <p className='text-sm text-stone-700/70 absolute text-center w-full pt-3'>Connecté avec {data.user.email}</p>
    </div>
  )
}