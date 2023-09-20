import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePhoto from '../public/profilePhoto.png'

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
            "Hi, The Name's Shivam Wadhwa",
            "Guy-who-loves-going-to-GYM 💪",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center text-center overflow-hidden justify-center'>
        <BackgroundCircles/>
        <Image className='relative rounded-full h-40 w-40 mx-auto object-cover' src={profilePhoto} alt={''}/>
        {/* <Image 
        className='relative rounded-full h-40 w-40 mx-auto object-cover'
        src='{heroPhoto}'
        alt='' height={40} width={40} /> */}
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>software engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
                <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero   