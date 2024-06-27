import React from 'react';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../actions';
import ControlledInput from '@/components/controlled-input';
import  { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

export default function ResetPasswordPage() {
  const form = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data) => {
    const result = await forgotPassword(data);
    if (result.success) {
      // handle success (e.g., show a message to check their email)
    } else {
      // handle error
    }
  };

  return (
    <div className="reset-password-page">
      <h1>Reset Password</h1>
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
          <Button type="submit" variant='outline'>Send Reset Link</Button>
        </form>
      </Form>
    </div>
  );
}
