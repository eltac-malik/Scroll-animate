import React,{useState} from 'react'
import './Address.css'
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
          y: '-100vh',
          transition: {
            ease: 'easeInOut'
          }
        }
      };

      const [add,setAdd] = useState("")

    return (
        <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='base'
        >
            <div className="step">
            <p className='number'>3 <i class="fa-solid fa-arrow-right"></i></p>
            <div className="central-base">
            <p className='title-p'>Please enter your home address (e.g. 123 Main Street, San Francisco CA 94109)*</p>
           <div className="placeholder p">
               <p>We use this information to accept applicants off the waitlist based on where we're seeing the most demand.</p>
           </div>
           <input onChange={(e)=> setAdd(e.target.value)} className='name-inp' placeholder='Type youranswer here' type="text"/>
           <div className="button-div">
          {
              add !==""?<Link to='/' className='link'>OK<i class="fa-solid fa-check"></i></Link>:<div className='alert'>Please fill this blank</div>
          }
           
           </div>
            </div>
            </div>
        </motion.div>
    )
}

export default Base
