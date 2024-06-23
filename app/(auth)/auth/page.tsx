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
    //@ts-ignore
    if (schema === signupSchema && values.confirmPassword !== undefined) {
      //@ts-ignore
      formData.append('confirmPassword', values.confirmPassword);
    }

    const response = tab === "login" ? await login(formData) : await signup(formData);

    if (response.success) {
      router.push(response.path);
    } else {
      console.error(response.message);
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Image src="/gradient/pc-rose-bgg3.png" alt="Orange Gradient Background Top" fill className="pointer-events-none -z-10" priority sizes="(max-width: 768px) 100vw, (max-width: 1000px) 100vw, (max-width: 2560px) 100vw"/>
      <section className='p-8 border-2 border-muted/50 rounded-md shadow-md bg-stone-100/30 backdrop-blur-md'>
        <VertLogo className='size-40 text-night fill-current mx-auto' />
        <Tabs defaultValue="login" className="w-[400px]" onValueChange={(value) => setTab(value)}>
          <TabsList className='w-full my-8'>
            <div className='p-1 rounded-md bg-muted/50'>
              <TabsTrigger className='rounded-l-md' value="login">Login</TabsTrigger>
              <TabsTrigger className='rounded-r-md' value="signup">Sign Up</TabsTrigger>
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
                <Button type="submit" variant='outline'>Login</Button>
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
                  placeholder="Password"
                  trigger={form.trigger}
                  label="Mot de passe"
                />
                <ControlledInput
                  control={form.control}
                  name="confirmPassword"
                  defaultValue=""
                  type="password"
                  placeholder="Confirm Password"
                  trigger={form.trigger}
                  label="Confirmer le mot de passe"
                />
                <Button type="submit">Sign Up</Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
