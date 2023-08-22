"use client";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        {" "}
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
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
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:2-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        src='/MyImg.jpg'
        alt='My Image'
        width='600'
        height='600'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#F7AB0A]/50 '>little</span>{" "}
          details
        </h4>
        <p className='text-base'>
          Are you looking for a MERN-Stack Developer or a skilled, pixel-perfect
          web designer? I have experience developing and designing websites.
          I&apos;ve been working in this industry for five years. I am
          well-versed in the following subjects: HTML5, CSS3, Bootstrap,
          Tailwind, MUI, JavaScript (ES6), Node & Express JS, React & NEXT JS,
          Redux, Prisma ORM, MongoDB & Responsive Web Design. Looking forward to
          hearing your call soon. I can guarantee that you&apos;ll be happy with
          the high-caliber services I provide. Whenever you need me just send me
          a message and I will get back to you shortly.
        </p>
      </div>
    </motion.div>
  );
}
