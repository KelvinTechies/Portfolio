import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import './Tog.css'
const Tog = () => {
    
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const handleClick = ()=>{
        theme.dispatch({type:'toggle'})
    }
    return (
        <div className='toggle'>
            <Sun />
            <Moon />

            <div className='t-button' onClick={handleClick}
             style={darkMode?{left:'2px'}:{right:'2px'}}>
            </div>
        </div>
    )
}
export default Tog;