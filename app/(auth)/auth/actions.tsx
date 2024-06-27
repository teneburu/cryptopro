'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/supabase/server'
import { Signout } from '@/components/icons'


export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { success: false, message: 'Une erreur est survenue pendant votre connexion.', path: `/auth/error?message=${encodeURIComponent(error.message)}` }
  }
  
  revalidatePath('/', 'layout');
  return { success: true, message: 'Connexion réussie.', path: '/auth/onboarding' };
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return { success: false, message: 'Une erreur est survenue pendant votre inscription.', path: `/auth/error?message=${encodeURIComponent(error.message)}` }
  } 

  revalidatePath('/', 'layout');
  return { success: true, message: 'Merci de cliquer sur le lien de confirmation que nous avons envoyé à votre adresse email' }
}

export async function forgotPassword(formData: FormData) {
  const supabase = createClient();

  const email = formData.get('email') as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    redirect(`/auth/error?message=${encodeURIComponent(error.message)}`);
  }

  return { success: true, message: 'Merci de cliquer sur le lien de réinitialisation de mot de passe que nous avons envoyé à votre adresse email' };
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
