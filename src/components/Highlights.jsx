import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'
const Highlights = () => {
  
  useGSAP(()=>{
    gsap.to('#title',{
      y:0,
      opacity:1,
      duration:1
    })
    gsap.to(".link",{
      y:0,
      opacity:1,
      duration:1,
      stagger:0.25
    })
  })

  return (
    <section id='highlights' className='w-full overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5
    bg-zinc'>
      <div className='screen-max-width'> 
        <div className='mb-12 w-full items-end justify-between md:flex'>
          <h1 id='title' className='text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 -translate-y-12'>
            Get the highlights.
          </h1>
          <div className=' flex flex-wrap items-end pb-3 gap-5'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt='watch' className='ml-2'/>
            </p>
            <p  className='link'>
              Watch the event
              <img src={rightImg} alt='right' className='ml-2'/>
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
