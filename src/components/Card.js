import React from 'react'
import pool from '../images/pool.svg'
import star from '../images/star.svg'

export default function Card(){

    return(
        <div className='card'>
            <div className = 'pool'>
            <img src = {pool}/>
            </div>
            <div className = 'star'>
            <img src ={star}/>
            <p className='rating'>5.0</p>
            <p className='ratinginfo'> (6)·USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <div className='price'>
            <p className='pricep'>From $136 </p><p> / person</p>
            </div>
        </div>
    )
    
}