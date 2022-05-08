import Header from 'next/head';
import { NextPage } from 'next';

export interface HeaderControllerProps {
     title?: string;
     embed?: { hexColor?: string; image?: string };
     owner?: string;
     additionalKeywords?: string[];
     description?: string;
};

export const HeaderController: NextPage<HeaderControllerProps> = ({
     title,
     description = 'My personal website',
     owner = 'Sándor Király',
     additionalKeywords,
     embed,
 }) => {
     return (
          <Header>
               { title ? <title>{title}- Sándor Király</title> : <title>Sándor Király</title> };
               <meta name = 'description' content = {description} />
               { owner ? <meta name = 'author' content = {owner} /> : ''};
               <meta name = 'keywords' content = {`Sándor Király, Sándor Király${ additionalKeywords?.map((k) => `, ${k}`) }`} />
               <meta name = 'theme-color' content = {embed?.hexColor || '#f0e7db'} />
               {embed ? (
                    <>
                         <meta name = 'og:title' content = {title || 'Sándor Király'} />
                         <meta name = 'og:description' content = {description} />
                         <meta name = 'og:site_name' content = 'Sándor Király' />
                    </>
               ) : (
                    ''
               )};
          </Header>
     );
};