import React from 'react';
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      > 
          <div
            options={{
              max:45,
              scale:1.1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img 
            src={icon} 
            alt={title} 
            className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>  
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p 
        variants= {fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >        
      Greetings! I am Mahfuzul Islam, a passionate DevOps Engineer with a strong background in cloud computing, automation, and infrastructure management. With over five years of experience in IT operations and DevOps, I specialize in streamlining software delivery pipelines, optimizing cloud environments, and automating infrastructure to enhance efficiency and scalability.
      <br className='sm:block hidden'/>
      My journey in tech began with website development during high school, where I honed my skills in HTML, CSS, JavaScript, and React while working on various projects. Over time, I transitioned into DevOps, where I now focus on optimizing software delivery, automating workflows, and ensuring system reliability.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper (About,"about"); 