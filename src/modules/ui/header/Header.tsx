import { ThemeController } from '../../display/ThemeController';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export const Header = () => {
     const { theme, setTheme } = useTheme();
     
     return (
          <>
               <div className = 'sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-white dark:bg-secondary bg-opacity-20 firefox:bg-opacity-90 dark:firefox:bg-opacity-90 dark:bg-opacity-20 max-w-full'>
                    <div className = 'max-w-4xl mx-auto px-2'>
                         <div className = 'flex items-center justify-between h-8'>
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
                                             Sándor Király
                                        </span>

                                        <a href = '#projects' className = 'font-light'>Projects</a>
                                        <a href = '#skills' className = 'font-light'>Skills</a>
                                   </div>
                              </div>

                              <ThemeController />
                         </div>
                    </div>
               </div>
          </>
     );
};