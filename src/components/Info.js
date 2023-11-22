import React from 'react'
export default function Info(){
    return(
        <div className = 'info'>
            <div className='gridContainer'>
                <img src = {process.env.PUBLIC_URL + '/images/grid.svg'} className='grid'/>
            </div>
            <h1>Online Experiences</h1>
            <div className='para'>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p></div>
        </div>
    )
}