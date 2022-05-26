export const Layout = (props) => {
     const { children } = props;

     return (
          <>
               <body className = 'transition duration-500 ease-in-out bg-primary dark:bg-secondary'>
                    <div className = 'container mx-auto max-w-3xl w-auto'>
                         <main className = 'flex-grow'>
                              { children }
                         </main>
                    </div>
               </body>
          </>
     );
};

export default Layout;