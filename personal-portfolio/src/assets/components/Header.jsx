import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
    <div className=' w-full hidden md:flex flex-row  bg-secondaryColor font-headFont text-mainColor h-20'>
      <div className='flex items-center justify-center basis-1/5'>
        <div className='text-center text-3xl text-nowrap p-3'>&lt; Yusri_Ahamed/ &gt;</div>
      </div>
        <div className="flex flex-row items-center justify-around basis-3/5  text-center">
          <div className="text-xl cursor-pointer  hover:text-2xl"><Link to="/">
          Home</Link></div>
          <div className="text-xl cursor-pointer hover:text-2xl"><Link to="/skills">Skills</Link></div>
          <div className="text-xl cursor-pointer hover:text-2xl"><Link to="/projects">Projects</Link></div>
          <div className="text-xl cursor-pointer hover:text-2xl"><Link to="/contactMe">Contact Me</Link></div>
        </div>
      </div>
    
      <div className='w-full flex justify-between   bg-secondaryColor font-headFont text-mainColor h-20 md:hidden'>
        <div className='flex items-center justify-center basis-1/5'>
          <div className='text-center text-3xl text-nowrap p-3'>&lt; Yusri_Ahamed/ &gt;</div>
        </div>
        <div className='flex items-center justify-center basis-1/5 '>
          {isMenuOpen ? <AiOutlineClose className='text-mainColor text-2xl ' onClick={handleClickMenu}/> : <AiOutlineMenu className='text-mainColor text-2xl'  onClick={handleClickMenu}/>}
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex-col md:hidden border-t-3 border-mainColor transform-3d">
          <Link
            to=""
            className="block bg-secondaryColor font-headFont text-mainColor px-15 py-3 text-xl hover:text-secondaryColor hover:bg-mainColor"
          >
            Home
          </Link>

          <Link
            to="skills"
            className="block bg-secondaryColor font-headFont text-mainColor px-15 py-3 text-xl hover:text-secondaryColor hover:bg-mainColor"
          >
            Skills
          </Link>

          <Link
            to="projects"
            className="block bg-secondaryColor font-headFont text-mainColor px-15 py-3 text-xl hover:text-secondaryColor hover:bg-mainColor"
          >
            Projects
          </Link>

          <Link
            to="contactMe"
            className="block bg-secondaryColor font-headFont text-mainColor px-15 py-3 text-xl hover:text-secondaryColor hover:bg-mainColor border-b-2"
          >
            Contact Me
          </Link>
        </div>
      )}
    </>
  )
} 
// px-4 rounded-xl hover:bg-mainColor hover:text-secondaryColor
export default Header