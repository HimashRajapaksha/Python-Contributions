'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as z from 'zod';
import { Button } from '../../../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../components/ui/form';
import { Input } from '../../../components/ui/input';
import { useToast } from '../../../hooks/use-toast';
import { clientSideCacheClear } from '../../../utils/common-utils';
import authAxiosInstance from '../../../axios/authAxiosInstance';

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();
  const { theme } = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await authAxiosInstance.post('/auth/register', values); // Sets JWT token as a httpOnly cookie

      if (response.status == 201) {
        return router.push('/');
      }

      toast({
        variant: 'error',
        title: 'Invalid Credentials',
        description: `Incorrect Email or Password`,
      });
      await clientSideCacheClear();
      router.push('/sign-in');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      toast({
        variant: 'error',
        title: 'Error!',
        description: `${errorMessage}, Please Try again.`,
      });
    }
  };

  return (
    <div className='relative rounded-lg w-full max-w-lg px-4 py-6'>
      <div className='relative z-0 text-center'>
        <div className='text-2xl sm:text-4xl font-bold mb-2'>Create an account</div>
        <div className='text-xs sm:text-sm mb-10 text-grey-base'>
          Enter your details below to create your account
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='max-w-md w-full flex flex-col gap-4 mx-auto mb-4 mt-4'
        >
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Ex: John' type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Ex: Doe' type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder='Ex: johndoe@gmail.com' type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input type={showPassword ? 'text' : 'password'} {...field} />
                      <div className='absolute top-0 right-0 mt-3 mr-2.5'>
                        <span onClick={handlePasswordVisibility}>
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <div className='flex flex-col justify-end flex-grow space-y-2 mt-4'>
            <Button type='submit'>Sign Up</Button>
          </div>
        </form>
      </Form>
      <div className='relative my-6'>
        <hr />
        <span className='absolute right-1/2 -top-3 translate-x-1/2 bg-white dark:bg-black px-2 text-center text-grey-base text-sm'>
          or
        </span>
      </div>

      {/* Temporally Commented */}
      {/* <div className='md:flex justify-center md:space-x-4'>
          <a
            className='flex justify-center space-x-2 mb-5 md:mb-0 items-center border rounded-lg p-2 w-full'
            href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}
          >
            <FaGoogle />
            <span className='space-x-2'>Google</span>
          </a>

          <a
            className='flex justify-center space-x-2 mb-5 md:mb-0 items-center border rounded-lg p-2 w-full'
            href={`${process.env.NEXT_PUBLIC_API_URL}/auth/facebook`}
          >
            <FaFacebook />
            <span className='space-x-2'>Facebook</span>
          </a>
        </div> */}

      <div className='flex space-x-2 mt-7 justify-center'>
        <p>Already have an account ?</p>
        <Link href={`/sign-in`} className='font-semibold text-primary transition ease-in'>
          Log In
        </Link>
      </div>
      <div className='block md:hidden justify-center'>
        <p className='text-black/40 text-xs text-center mt-8'>
          @ Copyright {new Date().getFullYear()}
          <Image
            src={
              theme === 'light' ? '/images/logo-dark.webp' : '/images/logo-light.svg'
            }
            alt='Logo'
            width={84}
            height={11}
            className='inline-block align-middle ml-2 mr-2 mb-1 w-24'
          />
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
