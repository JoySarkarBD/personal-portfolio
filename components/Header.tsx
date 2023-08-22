"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-star justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon
          url='https://www.linkedin.com/in/joysarkarbd/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/webdev.joysarkar/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://twitter.com/Joy_Sarkar_BD'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.instagram.com/joy_sarkar_bd'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/JoySarkarBD'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://api.whatsapp.com/send?phone=8801681928047'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          url='#'
          className='cursor-pointer'
          fgColor='gray'
          network='email'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
