'use client'
import { login, signup } from './actions'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useController } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { VertLogo } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'

// Separate schemas for login and signup
const loginSchema = z.object({
  email: z.string({ message: "Veuillez renseigner votre adresse email." }).email(),
  password: z.string({ message: "Veuillez renseigner votre mot de passe." }).min(8, { message: "Votre mot de passe doit contenir au moins 8 caractères." }),
})

const signupSchema = z.object({
  email: z.string({ message: "Veuillez renseigner votre adresse email." }).email(),
  password: z.string({ message: "Veuillez renseigner votre mot de passe." }).min(8, { message: "Votre mot de passe doit contenir au moins 8 caractères." }),
  confirmPassword: z.string({ message: "Veuillez renseigner votre mot de passe." }).min(8, { message: "Votre mot de passe doit contenir au moins 8 caractères." }),
}).refine((values) => {
  return values.password === values.confirmPassword
}, {
  message: "Les mots de passe ne sont pas identiques.",
  path: ["confirmPassword"]
})

const ControlledInput = ({ control, name, defaultValue, type, placeholder, trigger, label }) => {
  const { field, fieldState } = useController({ control, name });
  
  useEffect(() => {
    if (field.value !== defaultValue && !fieldState.isTouched) {
      trigger(name, { shouldFocus: true });
    }
  }, [defaultValue, field.value, fieldState.isTouched, trigger, name]);

  return (
    <FormItem>
      <FormLabel htmlFor={name} className='text-md'>{label}</FormLabel>
      <FormControl>
        <Input id={name} type={type} name={name} placeholder={placeholder} {...field} required />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

export default function Auth() {
  const [tab, setTab] = useState("login");
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  const schema = tab === "login" ? loginSchema : signupSchema;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);

    if (tab === "login") {
      const result = await login(formData);
      if (result.success) {
        router.push(result.path);
      } else {
        setMessage(result.message);
      }
    } else {
      const result = await signup(formData);
      if (result.success) {
        setMessage(result.message);
      } else {
        router.push(result.path);
      }
    }
    
  }

  return (
    <Tabs defaultValue="signup" className="w-[90vw] lg:w-[50vw] p-2" onValueChange={(value) => setTab(value)}>
      <TabsList className='w-full my-4'>
        <div className='p-1 rounded-md bg-muted/50'>
          <TabsTrigger className='rounded-l-md' value="login">Connexion</TabsTrigger>
          <TabsTrigger className='rounded-r-md' value="signup">Inscription</TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="login">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ControlledInput
              control={form.control}
              name="email"
              defaultValue=""
              type="email"
              placeholder="Email"
              trigger={form.trigger}
              label="Adresse email"
            />
            <ControlledInput
              control={form.control}
              name="password"
              defaultValue=""
              type="password"
              placeholder="Password"
              trigger={form.trigger}
              label="Mot de passe"
            />
            <div className='flex justify-between'>
              <Button type="submit" variant='outline'>Se connecter</Button>
              {message && <div className='text-blue-500 font-extrabold text-lg animate-pulse'>{message}</div>}
              <Link href="/auth/reset-password" className="text-blue-500 p-2">Mot de passe oublié ?</Link>
            </div>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="signup">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ControlledInput
              control={form.control}
              name="email"
              defaultValue=""
              type="email"
              placeholder="Email"
              trigger={form.trigger}
              label="Adresse email"
            />
            <ControlledInput
              control={form.control}
              name="password"
              defaultValue=""
              type="password"
              placeholder=""
              trigger={form.trigger}
              label="Mot de passe"
            />
            <ControlledInput
              control={form.control}
              name="confirmPassword"
              defaultValue=""
              type="password"
              placeholder=""
              trigger={form.trigger}
              label="Confirmer le mot de passe"
            />
            <div className='flex justify-between'>
              <Button type="submit" variant='outline'>S'inscrire</Button>
              {message && <div className='text-blue-500 p-2 font-extrabold text-lg animate-pulse'>{message}</div>}
            </div>
          </form>
        </Form>
      </TabsContent>
      
    </Tabs>
  );
}
