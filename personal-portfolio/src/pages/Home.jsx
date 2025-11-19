import React from 'react'
import ProfilePhoto from "/photos/yusriPhotoWeb.svg"
import { FaLinkedin, FaGithubSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import cv from "/docs/Yusri_CV_Final.pdf"
const Home = () => {
  return (
    <section className='grid gap-8'>
      <div className='grid md:grid-cols-2'>
        <div className='lg:size-150 lg:ms-25'>
          <img src={ProfilePhoto} alt="" className='rounded-full'/>
        </div>
        <div className=''>
            <div className='mt-10'>
                <h1 className='text-center font-headFont text-6xl m-3'>I am Yusri Ahamed</h1>
                <h2 class="text-center font-headFont text-4xl font-semibold m-7"> Engineer</h2>
                <h3 class="text-center font-subFont text-4xl m-6">Welcome to my portfolio!</h3>
                <p class="text-center font-subFont text-2xl my-15 mx-1 md:mx-15">
                                                              I'm glad you're here. I'm a passionate Java Developer, Web Developer, and Python Developer 
                                                              with a love for building clean, functional, and responsive applications. This portfolio 
                                                              showcases some of my best work, my skills, and the journey I'm on as a developer. 
                                                              Feel free to explore, and thank you for visiting!</p>
            </div>
            <a 
              href={cv} 
              // download="Yusri_Ahamed_CV.pdf"
              target='_blank'
              className="block bg-secondaryColor rounded-lg hover:border-2 hover:bg-mainColor mx-20 lg:mx-40"
            >
              <p className="text-mainColor font-subFont text-center py-4 text-xl hover:text-secondaryColor">
                Download My CV
              </p>
            </a>

        </div>
      </div>
      <div className='grid md:grid-cols-2 mt-10'>
        <div className="" >
          <div class=" flex justify-around mb-10">
               <div class="text-6xl">
                <a href="https://www.linkedin.com/in/yusri-ahamed-97ab7828b/" target="_blank"><FaLinkedin /></a>
              </div>
              <div class="text-6xl">
                <a href="https://github.com/yusri009" target="_blank"><FaGithubSquare /></a>
              </div>
              <div class="text-6xl">
                <a href="https://web.facebook.com/yusri.ahamed.378" target="_blank"><FaFacebookSquare /></a>
              </div>
              <div class="text-6xl">
                <a href="https://www.instagram.com/yusri_ahamed009/ "target="_blank"><FaInstagramSquare /></a>
              </div>   
          </div>  
        </div>
      </div>
      
    </section>
  )
}

export default Home