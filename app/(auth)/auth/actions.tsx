'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/supabase/server'
import { Signout } from '@/components/icons'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true, path: '/auth/onboarding' }
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true, path: '/auth/onboarding' }
}

export async function SignOut() {
  const logout = async () => {
    "use server"
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/')
  }
  return (
    <form className='h-[28px]'>
      <button formAction={logout}>
        <Signout className="size-7 text-stone-900 fill-current"/>
      </button>
    </form>
  )
}
