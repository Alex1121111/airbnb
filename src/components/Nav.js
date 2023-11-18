import React from 'react'
import airbnblogo from '../images/airbnblogo.svg'

export default function Nav(){
    return(
        <nav>
            <img src = {airbnblogo} className='bnblogo'/>
        </nav>
    )
}