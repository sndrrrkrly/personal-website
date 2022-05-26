import { ChevronRightIcon } from '@chakra-ui/icons';
import { HeaderController } from '../../modules/display/HeaderController';

export const Works = () => {
     return (
          <>
               <HeaderController embed = {{}} title = 'Works' />

               <div className = 'mt-6 w-full inline-flex md:justify-between text-left justify-center'>
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

                         <h1 className = 'font-bold text-sky-500'>
                              tale
                         </h1>

                         <span className = 'ml-1 font-semibold bg-white bg-opacity-30 dark:bg-stone-900 rounded-8 p-1 text-xs'>
                              2020-11 - 2021-06
                         </span>
                    </div>

                    <div className = 'p-1 mt-2'>
                         <p className = 'ml-4 font-light'>
                              A simple social-network (like StockX), for help people to sell HYPEBEAST clothes, <br />
                              and not use Facebook Groups for that. <br /> <br />

                              You can check the code, because it's Open Source. <br />
                              <strong>https://github.com/sndrkrly/tale</strong>
                         </p>

                         <div className = 'flex flex-col ml-6 mt-2 space-y-2'> 
                              <div className = 'inline-flex'>
                                   <span className = 'font-semibold bg-white bg-opacity-30 dark:bg-stone-900 rounded-8 p-1 text-xs'>
                                        Platform
                                   </span>
                                   
                                   <h1 className = 'ml-2 font-light text-base'>
                                        Website
                                   </h1>
                              </div>

                              <div className = 'inline-flex'>
                                   <span className = 'font-semibold bg-white bg-opacity-30 dark:bg-stone-900 rounded-8 p-1 text-xs'>
                                        Stack
                                   </span>
                                   
                                   <h1 className = 'ml-2 font-light text-base'>
                                        Node.js + Express / TypeORM / Next.js / TypeScript / TailwindCSS
                                   </h1>
                              </div>
                         </div>

                         <div className = 'justify-center items-center flex flex-col mt-6 space-y-6'>
                              <img
                                   src = 'https://media-exp1.licdn.com/dms/image/C562DAQFT88VZKKJigg/profile-treasury-image-shrink_800_800/0/1653374356583?e=1654192800&v=beta&t=J2O3R9BcPi38kxCspYF_DTZJ-yspceiNhEqkv_rC5pM'
                                   height = {500}
                                   width = {500}
                                   className = 'shadow-gray-900 shadow-lg rounded-8'
                              />   

                              <img
                                   src = 'https://media-exp1.licdn.com/dms/image/C562DAQGchY-ajB9Y7Q/profile-treasury-image-shrink_800_800/0/1653374271829?e=1654192800&v=beta&t=5DZCtyVHzVRVKSxxEW8Z_M2Dp2r2S79KwH-9NSqVF-s'
                                   height = {500}
                                   width = {500}
                                   className = 'shadow-gray-900 shadow-lg rounded-8'
                              />

                              <img
                                   src = 'https://media-exp1.licdn.com/dms/image/C562DAQE6osTSdahWoA/profile-treasury-image-shrink_1920_1920/0/1653374280342?e=1654192800&v=beta&t=eCur0bBQt3gZjnedwhQFxsjjeoBiHXzrQbCm1btX4zc'
                                   height = {500}
                                   width = {500}
                                   className = 'shadow-gray-900 shadow-lg rounded-8'
                              />

                              <img
                                   src = 'https://media-exp1.licdn.com/dms/image/C562DAQGZ1EngyeDUqA/profile-treasury-image-shrink_1920_1920/0/1653374260120?e=1654192800&v=beta&t=W7ZjzwQH1-drUWc2ZlvMlBd9O_JW5s0rzLwsFad5KPE'
                                   height = {500}
                                   width = {500}
                                   className = 'shadow-gray-900 shadow-lg rounded-8'
                              />

                              <img
                                   src = 'https://media-exp1.licdn.com/dms/image/C562DAQFU6eVsT_xqqQ/profile-treasury-image-shrink_800_800/0/1653374364518?e=1654192800&v=beta&t=ipJYGN8RUdXt-Uxo0rEjI2Ve_KlxzFfHfxgaYeslUFc'
                                   height = {500}
                                   width = {500}
                                   className = 'shadow-gray-900 shadow-lg rounded-8'
                              />
                         </div>
                    </div>
               </div>

               <div id = 'inkhouse' className = 'mt-6 md:text-left text-center'>
                    <div className = 'inline-flex'>
                         <h1 className = 'font-light'>
                              Works <ChevronRightIcon />
                         </h1>

                         <h1 className = 'font-bold text-orange-300'>
                              inkHouse
                         </h1>
                         
                         <span className = 'ml-1 font-semibold bg-white bg-opacity-30 dark:bg-stone-900 rounded-8 p-1 text-xs'>
                              2022-04 - 2022-05
                         </span>
                    </div>

                    <div className = 'p-1 mt-2'>
                         <p className = 'ml-4 font-light'>
                              A simple voice-talk-only social network (like Clubhouse) for learning and improve my skills. <br />
                              (Not finished, still in work)
                         </p>

                         <div className = 'flex flex-col ml-6 mt-2 space-y-2'> 
                              <div className = 'inline-flex'>
                                   <span className = 'font-semibold bg-white bg-opacity-30 dark:bg-stone-900 rounded-8 p-1 text-xs'>
                                        Platform
                                   </span>
                                   
                                   <h1 className = 'ml-2 font-light text-base'>
                                        Website
                                   </h1>
                              </div>

                              <div className = 'inline-flex'>
                                   <span className = 'font-semibold bg-white bg-opacity-30 dark:bg-stone-900 rounded-8 p-1 text-xs'>
                                        Stack
                                   </span>
                                   
                                   <h1 className = 'ml-2 font-light text-base'>
                                        Node.js + Express / MongoDB / webRTC / Socket.io / Next.js / TypeScript / TailwindCSS
                                   </h1>
                              </div>
                         </div>

                         <div className = 'justify-center items-center flex flex-col mt-6 space-y-6'>
                              <img
                                   src = 'https://media-exp1.licdn.com/dms/image/C562DAQGirwwqcCnTfQ/profile-treasury-image-shrink_800_800/0/1653374460646?e=1654192800&v=beta&t=81qDnBY7l3qhyx4advfyr2UJFfyTybAP3pxOY-nR1-k'
                                   height = {500}
                                   width = {500}
                                   className = 'shadow-gray-900 shadow-lg rounded-8'
                              />   

                              <img
                                   src = 'https://media-exp1.licdn.com/dms/image/C562DAQFNTW6f6jxqew/profile-treasury-image-shrink_800_800/0/1653374444028?e=1654192800&v=beta&t=Jy5CFfCZcKh0BdgosmjlkEmsKgYSCdp3EFrGoVLV7pU'
                                   height = {500}
                                   width = {500}
                                   className = 'shadow-gray-900 shadow-lg rounded-8'
                              />
                         </div>
                    </div>
               </div>
          </>
     );
};