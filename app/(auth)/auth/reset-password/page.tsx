'use client';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../actions';
import ControlledInput from '@/components/controlled-input';
import  { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react';

const schema = z.object({
  email: z.string({ message: "Veuillez renseigner votre adresse email." }).email()})

export default function ResetPasswordPage() {
   const [message, setMessage] = useState<string | null>(null);
   
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = async (data) => {
    const result = await forgotPassword(data);
    if (result.success) {
      setMessage(result.message);
    }
  };

  return (
    <div className="reset-password-page p-4">
      <h1>Réinitialisation du mot de passe</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <ControlledInput
            control={form.control}
            name="email"
            defaultValue=""
            type="email"
            placeholder="Email"
            trigger={form.trigger}
            label="Adresse email :"
          />
          <div className='flex justify-between'>
            <Button type="submit" variant='outline'>Réinitialiser</Button>
            {message && <div className='text-blue-500 p-2 font-extrabold text-lg animate-pulse'>{message}</div>}
          </div>
        </form>
      </Form>
    </div>
  );
}
