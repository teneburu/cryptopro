"use client"

import { z } from "zod";
import { FormSchema as schema } from "@/db/schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {  useState } from "react";
import { motion } from 'framer-motion'

const steps = [
  { id: 'Étape 1', name: 'Informations personnelles', fields: ['prenom', 'dob', 'email']},
  { id: 'Étape 2', name: "Code d'invitation", fields: ['invitecode'] },
  { id: 'Étape 3', name: 'Vérification' },
]



export default function Onboarding() {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values)
  }

const next = async () => {
  if (currentStep === 0) {
    // Trigger the fields for the first step
    const output = await form.trigger(['prenom', 'email', 'dob'])
    console.log(output)
    if (!output) return

    setPreviousStep(currentStep)
    setCurrentStep(step => step + 1)
  } else if (currentStep === 1) {
    // Trigger the invitecode field for the second step
    const output = await form.trigger(['invitecode'])
    onSubmit(form.getValues())

    if (!output) return

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }
}

    const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  return ( 
    <div>
      <section className="container p-4 py-8 md:p-16 xl:p-24">
      {/* steps */}
        <nav aria-label='Progress'>
          <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
            {steps.map((step, index) => (
              <li key={step.name} className='md:flex-1'>
                {currentStep > index ? (
                  <div className='group flex w-full flex-col border-l-4 border-amber-700 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
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
                  <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {currentStep === 0 && (
              <motion.div
                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Information</h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>Provide your personal details.</p>
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl {...form.register('email')}>
                        <Input placeholder="email@exemple.com" {...field}/>
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
                <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Information</h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>Provide your personal details.</p>
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
                <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Information</h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>Provide your personal details.</p>

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
              className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
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
            <button
              type='button'
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
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
