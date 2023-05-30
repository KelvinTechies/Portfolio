import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
const Contact = () => {
    const[done, setDone] = useState(false)


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_nkviwd6', 'template_ss4f0xz', form.current, 'thRYFSzvDYd08Fvgq')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };


    return (


        <div className='contact-form' id='Contact'>
            <div className='w-left'>
                <div className='awesome'>
                    <span> Get in Touch </span>
                    <span> Contact Me </span>
                    <div className='blur s-blur' style={{ background: '#abf1FF94' }}><div>
                    </div>
                    </div>

                   
                </div>
                </div>
                <div className='c-right'>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type='text' name='user_name' className='user' placeholder='Name' />
                            <input type='email' name='user_email' className='user' placeholder='Email' />
                            <textarea name='msg' className='user' placeholder='Message' />
                            <input type='submit' value='Send' className='button' />
                            <div className='blur c-blur' style={{ background: 'var(--purple)' }}>

                            </div>
                            <span>{done && "Thanks For Contacting Osas"}</span>
                        </form>
                    </div>
                </div>
                )
            }
            
export default Contact