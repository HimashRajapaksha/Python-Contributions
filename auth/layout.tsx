'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import brandLogo from '../../../public/images/brand-logo.png';
import Closebtn from '../../components/ui/closebtn';
import { Toaster } from '../../components/ui/toaster';
import useUserStore from '../../store/auth-store';
import '../../styles/global.css';
import { inter } from '../../utils/font-utils';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();
  const { checkAuth } = useUserStore();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (await checkAuth()) {
        // Sends JWT token to validate it
        router.push('/');
      }
    };

    checkAuthentication();
  }, [router, checkAuth]);

  // TODO: remove redundant empty tag:REVIEW
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <main>
          <Toaster />
          <div className='grid lg:grid-cols-2 h-screen'>
            {/* Register */}
            <div className='bg-primary-darker hidden lg:flex justify-center items-center min-h-screen relative'>
              <Image
                onClick={() => router.push('/')}
                src={brandLogo}
                alt='logo'
                className='w-60 h-60 cursor-pointer'
              />

              <p className='hidden md:block text-white/40 absolute bottom-8'>
                @ Copyright {new Date().getFullYear()}
                <Image
                  src='/images/logo-light.svg'
                  alt='Logo'
                  width={16}
                  height={16}
                  className='inline-block align-middle ml-2 mr-2 mb-1 w-24'
                />
                All Rights Reserved.
              </p>
            </div>

            {/* Login */}
            <div>
              <div>
                <Closebtn />
              </div>
              <div className='justify-center flex flex-wrap lg:items-center lg:flex-nowrap lg:min-h-screen '>
                <div className='w-full mt-5 flex lg:hidden justify-center items-center'>
                  <Image
                    onClick={() => router.push('/')}
                    src={brandLogo}
                    alt='logo'
                    className='w-20 h-20 sm:w-40 sm:h-40 cursor-pointer'
                  />
                  <p className='hidden md:block text-white/40 absolute bottom-8'>
                    @ Copyright {new Date().getFullYear()}
                    <Image
                      src='/images/logo-dark.webp'
                      alt='Logo'
                      width={16}
                      height={16}
                      className='inline-block align-middle ml-2 mr-2 mb-1 w-24'
                    />
                    All Rights Reserved.
                  </p>
                </div>
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
