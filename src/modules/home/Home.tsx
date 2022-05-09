import { 
     IoLogoTwitter, 
     IoLogoInstagram, 
     IoLogoGithub,
     IoLogoFacebook,
     IoLogoHtml5,
     IoLogoCss3,
     IoLogoReact,
     IoLogoNodejs,
     IoLogoVue,
     IoLogoLaravel,
     IoLogoJavascript,
} from 'react-icons/io5';

import Image from 'next/image';

export const Home = () => {
     return (
          <>
               <div className = 'mt-6 w-full inline-flex md:justify-between md:text-left text-right justify-center'>
                    <div className = 'mb-6 font-bold text-4xl tracking-tight'>
                         Sándor Király

                         <p className = 'font-light text-base'>
                              Artist / Developer / Designer
                         </p>

                         <div className = 'space-x-1 inline-flex text-xl'>
                              <a href = 'https://www.github.com/sndrkrly' className = 'transition duration-500 hover:text-emerald-500'>
                                   <IoLogoGithub />
                              </a>

                              <a href = 'https://www.instagram.com/sndrkrly' className = 'transition duration-500 hover:text-emerald-500'>
                                   <IoLogoInstagram />
                              </a>

                              <a href = 'https://www.twitter.com/visionbysndr' className = 'transition duration-500 hover:text-emerald-500'>
                                   <IoLogoTwitter />
                              </a>

                              <a href = 'https://www.facebook.com/sandorkiraly0' className = 'transition duration-500 hover:text-emerald-500'>
                                   <IoLogoFacebook />
                              </a>
                         </div>
                    </div>

                    <div className = 'md:p-1 ml-5'>
                         <img
                              src = 'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-1/270110090_2582747538535902_1070912278348438766_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-6&_nc_sid=7206a8&_nc_ohc=0RyNo5uEvIQAX9E6EwA&_nc_ht=scontent-vie1-1.xx&oh=00_AT_t6woOumd48S5QdhWiJTIi45SjTJ-Y8gf01Ky5IHzbcw&oe=627CFE37'
                              height = {120}
                              width = {120}
                              className = 'rounded-full ring-2 ring-white'
                         />
                    </div>
               </div>

               <div id = 'about' className = 'md:text-left text-center'>
                    <h1 className = 'underline decoration-4 underline-offset-8 font-bold'>
                         About me
                    </h1>

                    <p className = 'p-4 font-light'>
                         I'm 18, a self-taught developer based in Hungary. <br />
                         I’ve been obsessed with computers since I was little. <br />
                         I love learning new technologies- and programming languages, <br />
                         and also I love tinkering with new ideas and turning them <br />
                         into full-size products with the goal to make people’s days a little better. <br />
                         (Otherwise avid graphics designing, and video editing.)
                    </p>
               </div>

               <div id = 'skills' className = 'md:text-left text-center'>
                    <h1 className = 'underline decoration-4 underline-offset-8 font-bold'>
                         Skills
                    </h1>

                    <div className = 'w-full p-4'>
                         <p className = 'font-light'>
                              Building products from planning and designing <br /> 
                              all the way to solving real-life problems with code. <br />

                              Designing apps, websites, products, brands and icons.
                         </p>

                         <div className = 'mt-3'>
                              <p className = 'font-bold'>
                                   Daily, I use
                              </p>

                              <p className = 'text-gray-500 font-light'>
                                   VSCode, Git, GitHub, Fish shell, Typescript, Next.js, TailwindCSS
                              </p>

                              <p className = 'mt-3 font-bold'>
                                   Technologies I worked with in the past:
                              </p>

                              <p className = 'text-gray-500 font-light'> 
                                   Node, Axios, Chakra, PostgreSQL, MongoDB, <br />
                                   Swift, Nuxt, GraphQL, HTML5, CSS3, Sass, Javascript, Svelte <br />
                                   Lua, MySQL, PHP
                              </p>
                         </div>
                    </div>
               </div>

               <div id = 'hobby' className = 'md:text-left text-center'>
                    <h1 className = 'underline decoration-4 underline-offset-8 font-bold'>
                         I ♥
                    </h1>

                    <p className = 'p-4 font-light'>
                         Art, Music, Drawing, Making Beats, Learning new technologies
                    </p>
               </div>
          </>
     );
};