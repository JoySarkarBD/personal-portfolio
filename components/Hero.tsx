"use client";

type Props = {};
import { motion } from "framer-motion";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: [
      "Hi there, I am Joy...!",
      "I love to think...!",
      "<ButLovesToCodeMore />",
      "And That's My Routine...",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='/MyImg.jpg'
        alt='My Image'
        width='600'
        height='600'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
          Web Application Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#f39c12' />
        </h1>

        {/* Navigate buttons */}
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
