import React from 'react'
import wave from '../../Images/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <img src={wave} alt='' style={{ width: '100%' }} />

            <div className='f-content'>
                <span>codewithsastech@gmail.com</span>
                <div className='f-icons'>
                    <Insta color='White' size='3rem' />
                    <Facebook color='White' size='3rem' />
                    <Github color='White' size='3rem' />
                    <LinkedIn color='White' size='3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer