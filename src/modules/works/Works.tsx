import { ChevronRightIcon } from '@chakra-ui/icons';
import { HeaderController } from '../../modules/display/HeaderController';

export const Works = () => {
     return (
          <>
               <HeaderController embed = {{}} title = 'Works' />

               <div className = 'mt-6 w-full inline-flex md:justify-between md:text-left text-right justify-center'>
                    <div className = 'mb-6 font-bold text-4xl tracking-tight'>
                         Works

                         <p className = 'font-light text-base'>
                              Here you can see my self-projects for learning or another project for people's.
                         </p>
                    </div>
               </div>

               <div id = 'tale' className = 'md:text-left text-center'>
                    <div className = 'inline-flex'>
                         <h1 className = 'font-light'>
                              Works <ChevronRightIcon />
                         </h1>

                         <h1 className = 'font-bold'>
                              tale
                         </h1>
                         
                         <span className = 'ml-1 font-semibold bg-white bg-opacity-30 dark:bg-stone-900 rounded-8 p-1 text-xs'>
                              2020-11 - 2021-06
                         </span>
                    </div>

                    <div className = 'p-1 mt-2'>
                         <p className = 'ml-4 font-light'>
                              A simple social-network like StockX, for help people to sell HYPEBEAST clothes, <br />
                              and not use Facebook Groups for that.
                         </p>

                         <div className = 'flex-col ml-6 mt-2 space-y-2'>
                              <div className = 'inline-flex'>
                                   <span className = 'font-semibold bg-white bg-opacity-30 dark:bg-stone-900 rounded-8 p-1 text-xs'>
                                        Platform
                                   </span>
                                   
                                   <h1 className = 'ml-2 font-light text-base'>
                                        Websited
                                   </h1>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};