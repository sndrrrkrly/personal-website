import { NextPage } from 'next';

import Image from 'next/image';
import { useTheme } from 'next-themes';

import { ThemeController } from '../../display/ThemeController';
export interface HeaderProps {
     currentActiveItem?: string;
};

export const Header: NextPage<HeaderProps> = ({ currentActiveItem }) => {
     const { theme, setTheme } = useTheme();
     
     return (
          <>
               <div className = 'sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-white dark:bg-stone-900 bg-opacity-20 firefox:bg-opacity-90 dark:firefox:bg-opacity-90 dark:bg-opacity-20 max-w-full'>
                    <div className = 'max-w-4xl mx-auto px-2'>
                         <div className = 'flex items-center md:justify-between justify-center h-8'>
                              <div className = 'inline-flex'>
                                   {theme === 'light' ? (
                                        <Image
                                             src = 'https://craftz.dog/_next/image?url=%2Fimages%2Ffootprint.png&w=32&q=75'
                                             height = { 24 } 
                                             width = { 24 } 
                                             alt = 'Logo'
                                        />
                                   ) : (
                                        <Image
                                             src = 'https://craftz.dog/_next/image?url=%2Fimages%2Ffootprint-dark.png&w=32&q=75'
                                             height = { 24 } 
                                             width = { 24 } 
                                             alt = 'Logo'
                                        />
                                   )}

                                   <div className = 'space-x-4'>
                                        <span className = 'px-2 font-bold text-black tracking-tighter dark:text-gray-100'>
                                             <a href = '/'>
                                                  Sándor Király
                                             </a>
                                        </span>

                                        <a href = '/works' className = {currentActiveItem ? 'font-light bg-primary dark:bg-stone-900 text-black dark:text-white p-2' : 'font-light hover:underline hover:underline-offset-8'}>Works</a>
                                        <a href = '/blog' className = 'font-light hover:underline hover:underline-offset-8'>Blog</a>
                                   </div>
                              </div>
                              
                              <div className = 'md:mr-0 ml-6'>
                                   <ThemeController />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};