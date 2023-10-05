import {useState, useRef} from 'react';
import { Link } from 'react-router-dom';

import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import{contacts, navLinks} from "../constants";
import { linkedin } from "../assets";

//XS_j5QwEdAxTTwcK_
//template_dg7o42v
//service_py5ilff


const Contact = ({linkedin_link}) => {
  const formRef = useRef();
  const [form,setform] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setform({...form,[name]: value,})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,{
        from_name:form.name,
        to_name:'Mahfuzul',
        from_email:form.email,
        to_email:'mahfuzul.islam6543@gmail.com',
        message: form.message,
    }, 
    'XS_j5QwEdAxTTwcK_')    
    .then(()=>{
      setLoading(false);
      alert('Thanks for reaching out. Will get back to you as soon as possible.')
      setform({
        name:'',
        email:'',
        message:'',

      });
    },(error)=>{
      setLoading(false);
      colnsole.log(error);
      alert('Something went wrong.');
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left','tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          {contacts.map((Link)=> (
            <a href={Link.linkedin_link} onClick={()=>window.open(linkedin_link)}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" style={{ position: 'absolute', top: 20, right: 20 }}>
          
            {/* { contacts.map((link, index)=>(
            <Contact
              key={`link-${index}`}
              index={index}
              {...link}/>
            ))}  */}

            <img 
              src={linkedin}
              alt={contacts}
              className="w-3/4 h-3/4
              object-contain"/>
          </a>
          ))}
          
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your name</span>
                <input 
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Email</span>
                <input 
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Leave a message</span>
                <textarea
                  row="7"
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder=""
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
              </label>

              <button
                type='submit'
                className='bg-tertiary py-3 px-8 outline-none w-fit text-white foot-bold shadow-md shadow-primary rounded-xl'>
                
                {loading ? 'Sending...' : 'Send'}
              </button>
          </form>
      </motion.div>

      <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[450px] h-[350px]'
      >
        <EarthCanvas/>   
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")