import React from 'react'
import ProfilePhoto from "../../public/photos/profile-pic.png"
import { FaLinkedin, FaGithubSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const Home = () => {
  return (
    // <div className='flex flex-col '>

    //   <div className='h-screen flex mt-5'>

    //     <div className='h-3/5 flex  justify-center w-1/2 bg-amber-300'>
    //         <img src={ProfilePhoto} alt="Profile" className='h-full'/>         
    //     </div>
    //     <div className='h-3/5 w-1/2'>
    //       <div className='mt-30 bg-blue-400'>
    //         <h1 className='text-center font-headFont text-6xl m-3'>I am Yusri Ahamed</h1>
    //         <h2 class="text-center font-headFont text-4xl font-semibold m-7"> Engineer</h2>
    //         <h3 class="text-center font-subFont text-4xl m-6">Welcome to my portfolio!</h3>
    //         <p class="text-center font-subFont text-2xl my-15 mx-15">
    //                                                         I'm glad you're here. I'm a passionate Java Developer, Web Developer, and Python Developer 
    //                                                         with a love for building clean, functional, and responsive applications. This portfolio 
    //                                                         showcases some of my best work, my skills, and the journey I'm on as a developer. 
    //                                                         Feel free to explore, and thank you for visiting!</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="flex m-0" >
    //             <div class=" flex justify-around w-1/2 bg-amber-700">
    //                 <div class="text-6xl">
    //                     <a href="https://www.linkedin.com/in/yusri-ahamed-97ab7828b/" target="_blank"><FaLinkedin /></a>
    //                 </div>
    //                 <div class="text-6xl">
    //                     <a href="https://github.com/yusri009" target="_blank"><FaGithubSquare /></a>
    //                 </div>
    //                 <div class="text-6xl">
    //                     <a href="https://web.facebook.com/yusri.ahamed.378" target="_blank"><FaFacebookSquare /></a>
    //                 </div>
    //                 <div class="text-6xl">
    //                     <a href="https://www.instagram.com/yusri_ahamed009/ "target="_blank"><FaInstagramSquare /></a>
    //                 </div>   
    //             </div>  
    //   </div>

    // </div>
    <section className='grid gap-8'>
      <div className='grid md:grid-cols-2'>
        <div className='lg:size-150 lg:ms-25'>
          <img src={ProfilePhoto} alt="" className=''/>
        </div>
        <div className=''>
            <div className='mt-10'>
                <h1 className='text-center font-headFont text-6xl m-3'>I am Yusri Ahamed</h1>
                <h2 class="text-center font-headFont text-4xl font-semibold m-7"> Engineer</h2>
                <h3 class="text-center font-subFont text-4xl m-6">Welcome to my portfolio!</h3>
                <p class="text-center font-subFont text-2xl my-15 mx-15">
                                                              I'm glad you're here. I'm a passionate Java Developer, Web Developer, and Python Developer 
                                                              with a love for building clean, functional, and responsive applications. This portfolio 
                                                              showcases some of my best work, my skills, and the journey I'm on as a developer. 
                                                              Feel free to explore, and thank you for visiting!</p>
            </div>
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