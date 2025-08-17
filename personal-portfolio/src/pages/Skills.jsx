import React from 'react'
import { FaHtml5, FaCss3Alt,FaJs, FaReact, FaBootstrap,FaNodeJs, FaPhp, FaPython, FaJava } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
const Skills = () => {
  return (
    <section className='grid '>
      <div className='mt-10'>
        <h1 className='font-bold underline text-5xl text-center font-headFont'>Skills</h1>
      </div>
      <div className='grid gap-5 lg:grid-cols-2'>

        <div className=' border-3 rounded-2xl m-10 p-5 border-secondaryColor-400 lg:m-20 mb-0'>
          <div className='border-b-2'> 
            <h1 className='mb-5 text-4xl text-center font-headFont'>Frontend</h1>
          </div>
          <div className='flex-col'>
              <div className='flex justify-around text-7xl mt-10'>
                <div className='flex-col place-items-center'> <FaHtml5 className='text-center'/> <p className='font-headFont text-2xl text-center'>HTML</p></div>
                <div className='flex-col place-items-center'> <FaCss3Alt className='text-center'/> <p className='font-headFont text-2xl text-center'>CSS</p></div>
                <div className='flex-col place-items-center '> <FaJs className='text-center'/> <p className='font-headFont text-2xl text-center'>Javascript</p></div>
                <div className='flex-col place-items-center'> <FaReact className='text-center'/> <p className='font-headFont text-2xl text-center'>React</p></div>
              </div>
              <div className='flex justify-around text-7xl mt-10'>
                <div className='flex-col place-items-center'> <RiTailwindCssFill className='text-center'/> <p className='font-headFont text-2xl text-center text-wrap'>Tailwind</p></div>
                <div className='flex-col place-items-center'> <FaBootstrap className='text-center'/> <p className='font-headFont text-2xl text-center'>Bootstrap</p></div>
                <div className='flex-col place-items-center '> <RiNextjsFill className='text-center'/> <p className='font-headFont text-2xl text-center'>Next.js</p></div>
                {/* <div className='flex-col place-items-center'> <FaReact className='text-center'/> <p className='font-headFont text-2xl text-center'>React</p></div> */}
              </div>
          </div> 
        </div>
        <div>
            <div className=' border-3 rounded-2xl m-10 p-5 pt-0 mt-4 border-secondaryColor-400 lg:m-20 lg:mb-2 '>
              <div className='border-b-2'> 
                <h1 className='py-5 text-4xl text-center font-headFont '>Backend</h1>
              </div>
              <div>
                  <div className='flex justify-around text-7xl mt-5 lg:mt-2'>
                    <div className='flex-col place-items-center'> <FaNodeJs className='text-center'/> <p className='font-headFont text-2xl text-center'>Node.js</p></div>
                    <div className='flex-col place-items-center'> <SiExpress className='text-center'/> <p className='font-headFont text-2xl text-center'>Express.js</p></div>
                    <div className='flex-col place-items-center '> <FaPhp className='text-center'/> <p className='font-headFont text-2xl text-center'>PHP</p></div>
                    {/* <div className='flex-col place-items-center'> <FaReact className='text-center'/> <p className='font-headFont text-2xl text-center'>React</p></div> */}
                  </div>   
              </div> 
            </div>
            <div className=' border-3 rounded-2xl m-10 p-5 pt-0 border-secondaryColor-400 lg:m-20 lg:mt-2'>
              <div className='border-b-2'> 
                <h1 className='py-5 text-4xl text-center font-headFont'>Database</h1>
              </div>
              <div>
                  <div className='flex justify-around text-7xl mt-5 lg:mt-2'>
                    <div className='flex-col place-items-center'> <BiLogoMongodb className='text-center'/> <p className='font-headFont text-2xl text-center'>MongoDB</p></div>
                    <div className='flex-col place-items-center'> <DiMysql className='text-center'/> <p className='font-headFont text-2xl text-center'>MySQL</p></div>
                    <div className='flex-col place-items-center '> <BiLogoPostgresql className='text-center'/> <p className='font-headFont text-2xl text-center'>PostgreSQL</p></div>
                    {/* <div className='flex-col place-items-center'> <FaReact className='text-center'/> <p className='font-headFont text-2xl text-center'>React</p></div> */}
                  </div>   
              </div> 
            </div>
        </div>
      </div>


      <div className=' border-3 rounded-2xl mx-10 mt-2 mb-20 p-5 pt-0 border-secondaryColor-400 lg:mx-100 '>
              <div className='border-b-2'> 
                <h1 className='py-5 text-4xl text-center font-headFont'>Programming Languages</h1>
              </div>
              <div>
                  <div className='flex justify-around text-7xl mt-5 lg:mt-2'>
                    <div className='flex-col place-items-center'> <FaPython className='text-center'/> <p className='font-headFont text-2xl text-center'>Python</p></div>
                    <div className='flex-col place-items-center'> <FaJava className='text-center'/> <p className='font-headFont text-2xl text-center'>Java</p></div>
                    <div className='flex-col place-items-center '> <img width="80" height="80" src="https://img.icons8.com/ios-filled/50/c-plus-plus-logo.png" alt="c-plus-plus-logo"/> <p className='font-headFont text-2xl text-center'>cpp</p></div>
                    {/* <div className='flex-col place-items-center'> <FaReact className='text-center'/> <p className='font-headFont text-2xl text-center'>React</p></div> */}
                  </div>   
              </div> 
            </div>
    </section>
  )
}

export default Skills
{/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/c-plus-plus-logo.png" alt="c-plus-plus-logo"/> */}