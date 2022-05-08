import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const ThemeController = () => {
    const [ mounted, setMounted ] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    });

    return (
        <>
            {theme === 'dark' ? (
                <div className = 'p-2 rounded-8 transition duration-500 bg-primary text-black hover:text-gray-700 hover:bg-orange-200'>
                    <SunIcon onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')} className = 'text-xl cursor-pointer' />                
                </div>
            ) : (
                <div className = 'p-2 rounded-8 transition duration-500 bg-purple-400 text-white hover:text-black hover:bg-purple-500'>
                    <MoonIcon onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')} className = 'text-xl cursor-pointer' />
                </div>
            )}
        </>
    );
}