import React from 'react'

export default function Card({img, rating, numRatings, name, price}){
    return(
        <div className='card'>
            <div className = 'pool'>
            <img src = {img}/>
            </div>
            <div className = 'star'>
            <img src ={process.env.PUBLIC_URL + '/images/star.svg'}/>
            <p className='rating'>{rating}</p>
            <p className='ratinginfo'> ({numRatings})·USA</p>
            </div>
            <p className = 'sellerInfo'>{name}</p>
            <div className='price'>
            <p className='pricep'>From ${price} </p><p> / person</p>
            </div>
        </div>
    )
    
}