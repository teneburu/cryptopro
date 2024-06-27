'use client';
import { useController } from "react-hook-form";
import { useEffect } from 'react';
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
};

export default ControlledInput;
