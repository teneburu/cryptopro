"use client"
import { z } from "zod";
import { FormSchema as schema } from "@/db/schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { motion } from 'framer-motion'

const steps = [
  { id: 'Étape 1', name: 'Informations personnelles', fields: ['prenom', 'dob' ]},
  { id: 'Étape 2', name: "Code d'invitation", fields: ['invitecode'] },
  { id: 'Étape 3', name: 'Vérification' },
]

export default function OnboardingForm() {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [tier, setTier] = useState<string | null>(null)
  const delta = currentStep - previousStep

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  async function validateInviteCode(invitecode: string) {
    const response = await fetch('/api/validate-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ invitecode }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    const data = await response.json();
    setTier(data.tier);
  }

  async function createUser(values: z.infer<typeof schema>) {
    const response = await fetch('/api/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }
  }

  async function onSubmit(values: z.infer<typeof schema>) {
    if (currentStep === 0) {
      const output = await form.trigger(['prenom', 'dob']);
      if (!output) return;
      setPreviousStep(currentStep);
      setCurrentStep(step => step + 1);
    } else if (currentStep === 1) {
      const output = await form.trigger(['invitecode']);
      if (!output) return;

      try {
        await validateInviteCode(values.invitecode);
        setPreviousStep(currentStep);
        setCurrentStep(step => step + 1);
      } catch (error) {
        form.setError('invitecode', { type: 'manual', message: error.message });
      }
    } else if (currentStep === 2) {
      try {
        await createUser(values);
        console.log('User created successfully');
      } catch (error) {
        console.error('Error creating user:', error.message);
      }
    }
  }

  const next = async () => {
    await onSubmit(form.getValues());
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep(step => step - 1);
    }
  }

  return ( 
    <div>
      <section className="w-[90vw] lg:w-[50vw] p-4 border-2 border-muted/50 rounded-md shadow-md bg-stone-100/30 backdrop-blur-md">
      {/* steps */}
        <nav aria-label='Progress'>
          <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0 pt-4'>
            {steps.map((step, index) => (
              <li key={step.name} className='md:flex-1'>
                {currentStep > index ? (
                  <div className='group flex w-full flex-col border-l-4 border-RO-700 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                    <span className='text-sm font-medium text-amber-700 transition-colors '>
                      {step.id}
                    </span>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                ) : currentStep === index ? (
                  <div
                    className='flex w-full flex-col border-l-4 border-amber-700 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                    aria-current='step'
                  >
                    <span className='text-sm font-medium text-amber-700'>
                      {step.id}
                    </span>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                ) : (
                  <div className='group flex w-full flex-col border-l-4 border-gray-500 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                    <span className='text-sm font-medium text-gray-500 transition-colors'>
                      {step.id}
                    </span>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {/* form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {currentStep === 0 && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="space-y-4">
                <p className='mt-4 text-sm leading-6 text-gray-600'>Commençons par faire connaissance.</p>
                <FormField
                  control={form.control}
                  name="prenom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom</FormLabel>
                      <FormControl {...form.register('prenom')}>
                        <Input placeholder="John" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date de naissance</FormLabel>
                      <FormControl  {...form.register('dob')}>
                        <Input type="date" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
            {currentStep === 1 && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <FormField
                  control={form.control}
                  name="invitecode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code d'invitation</FormLabel>
                      <FormControl>
                        <Input {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
            {currentStep === 2 && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <p className='mt-4 text-sm leading-6 text-gray-600'>Vérification terminée.</p>
                <p className='mt-4 text-sm leading-6 text-gray-600'>Votre niveau d'invitation est: {tier}</p>
              </motion.div>
            )}
          </form>
        </Form>
        {/* navigation */}
        <div className='mt-8 pt-5'>
          <div className='flex justify-between'>
            <button
              type='button'
              onClick={prev}
              disabled={currentStep === 0}
              className='rounded bg-white px-2 py-1 text-sm font-semibold text-amber-900 shadow-sm ring-1 ring-inset ring-amber-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </button>
            <div className="w-full h-[32px] flex relative items-center justify-center space-x-4 mx-4">
                <p className="text-sm absolute left-0 text-stone-700/50">Précédent</p>
                <p className="text-sm text-stone-700/50">{currentStep + 1} / {steps.length}</p>
                <p className="text-sm absolute right-0 text-stone-700/50">Suivant</p>
            </div>
            <button
              type='button'
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className='rounded bg-white px-2 py-1 text-sm font-semibold text-amber-900 shadow-sm ring-1 ring-inset ring-amber-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
