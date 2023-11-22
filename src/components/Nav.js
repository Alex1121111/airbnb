import React from 'react'

export default function Nav(){
    return(
        <nav>
            <img src = {process.env.PUBLIC_URL + '/images/airbnblogo.svg'} className='bnblogo'/>
        </nav>
    )
}