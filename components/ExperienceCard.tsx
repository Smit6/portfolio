import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({src}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='h-24 w-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='/static/images/hpe.png'
        alt='Company Logo'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>IT Developer/Engineer III</h4>
        <p className='font-bold text-2xl mt-1'>HP Enterprise</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='/static/images/node.jpg'
            alt='Node.js'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='/static/images/python.png'
            alt='Python'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='/static/images/sklearnn.png'
            alt='sklearn'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='/static/images/pandas.png'
            alt='Pandas'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>March 2020 - Jan 2022</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  )
}