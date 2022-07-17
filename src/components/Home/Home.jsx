import React,{useState} from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Home() {

    const containerVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 1,
            duration: 1
          }
        },
        exit: {
          y: '-100vh',
          transition: {
            ease: 'easeInOut'
          }
        }
      };

    return (
        <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='all'
        >
            <div className="central">
              <div className="title-img">
                <img src="https://media-exp2.licdn.com/dms/image/C4D1BAQHFk5az6Ix8ng/company-background_10000/0/1519797751336?e=1658664000&v=beta&t=x-X-24W0XvrEPJYywzh_u606iMK9Fz7PPsbkLzCIBG4" alt=""/>
              </div>
              <div className="for-img">
                <img src="https://media-exp2.licdn.com/dms/image/C4D0BAQHeAeDnIAzb8w/company-logo_200_200/0/1519911011130?e=1666224000&v=beta&t=tvqS7rsB90iaju0k8cPvUYTlqd6qvUNTPLP_j8L8Gw0" alt=""/>
              </div>
              <h1>Welcome to Friends Homes</h1>
            <Link className='btn' to='/base'>Let's start</Link>             
            </div>            


            
            
            
        </motion.div>
    )
}

export default Home
