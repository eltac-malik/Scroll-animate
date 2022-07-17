import React,{useState} from 'react'
import './Mail.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function Base() {

    const containerVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.3
          }
        },
        exit: {
          x: '-100vw',
          transition: {
            ease: 'easeInOut'
          }
        }
      };

      const [mail,setMail] = useState("")
      let x = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/)
    return (
        <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='base'
        >
                <div className="step">
            <p className='number'>2 <i class="fa-solid fa-arrow-right"></i></p>
            <div className="central-base">
            <p className='title-p'>What's your email?*</p>
           <input onChange={(e)=> setMail(e.target.value)} className='name-inp' placeholder='Type youranswer here' type="email"/>
           <div className="button-div">
          {
              x.test(mail)?<Link to='/address' className='link'>OK<i class="fa-solid fa-check"></i></Link>:<div className='alert'>Please fill this blank</div>
          }
           
            </div>
            </div>
                </div>
        </motion.div>
    )
}

export default Base
