import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true}}
        className='w-[300px] h-[500px]'
        src='/static/images/beach.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-lg object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
        <p className='text-base'>
        Experienced Machine Learning Engineer with a demonstrated history of working in the information technology and services industry. Solid understanding and background in operating machine learning tools like Scikit-Learn, PyTorch, TensorFlow and Keras.io. Skilled in data migration tools like SnapLogic, Kafka and Tibco, and containerization tools like Docker and Kubernetes. Graduated summa cum laude from CSU Chico with a bachelor of science in Computer Science.
        </p>
      </div>
    </div>
  )
}