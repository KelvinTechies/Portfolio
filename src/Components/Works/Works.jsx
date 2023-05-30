import React from 'react'
import './Works.css'
// import fiverr from '../../Images/fiverr.png'
// import Upwork from '../../Images/Upwork.png'
import flutter from '../../Images/flutter.png'
import Laravel from '../../Images/laravel.png'
import Mern from '../../Images/mern.png'
import Php from '../../Images/php.png'
import python from '../../Images/python.png'
import React_Native from '../../Images/react-native.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'


const Works = () => {

    return (
        <div className='Works'>

            <div className='awesome'>
                <span> Works for All These </span>
                <span> Brands & Clients </span>
                <span>Full Stack Developer with high level experience <br />
                    in web designing and development, producing the quality work <br />
                    in web designing and development, producing the quality work

                 </span>

                <Link spy={true} to='Contact' smooth={true}>
                    <button className='button s-button'>Hire Me</button>
                </Link>


                <div className='blur s-blur' style={{ backround: '#ABF1FF94' }}></div>
            </div>

            <div className='w-right'>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 5.5, type: 'spring' }}
                    className='w-mainCirle'>
                    <div className='w-secCircle'>
                        <img src={React_Native} />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Mern} />
                    </div>
                    
                    <div className='w-secCircle'>
                        <img src={Php} />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Laravel} />
                    </div>
                    <div className='w-secCircle'>
                        <img src={python} />
                    </div>
                    <div className='w-secCircle'>
                        <img src={flutter} />
                    </div>
                </motion.div>
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>


        </div>
    )
}
export default Works



