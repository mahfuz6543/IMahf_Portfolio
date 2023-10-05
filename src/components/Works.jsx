import { Tilt } from "react-tilt";
import {motion} from "framer-motion";
import{styles} from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import{projects} from "../constants";
import{fadeIn, textVariant} from "../utils/motion";

const ProjectCard =({index,name,image,source_code_link,source_project})=>{
  return(
    <motion.div variants={fadeIn("up", "spring", index*0.5,0.75)}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]"
        onClick={()=>window.open(source_project,"_blank")}>
        
            <img 
              src={image}  
              alt={name}
              className="w-full h-full object-cover rounded-2xl"/>
            
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={()=>window.open(source_code_link,"_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img 
                src={github}
                alt={source_code_link}
                className="w-1/2 h-1/2
                object-contain"/>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
              My Works
            </p>
            <h2 className={styles.sectionHeadText}>Projects/School Works</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p 
           variants={fadeIn("","",0.1,1)}
           className="mt-3 text-secondary text-[17px] max-3xl leading-[30px]">
            Following projects showcase my skills and experience through real-world examples of my work that I have done since High School. It reflects my ability to solve complex problems, work with different techologies, and manage projects effectively.

          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index)=>(
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}/>
          ))}
          
        </div>

    </>
  )
}

export default SectionWrapper(Works,"");