import React from 'react'

export default function Card({location, openSpots, img, rating, numRatings, name, price}){
    let cardStatus;
    if (openSpots === '0'){
        cardStatus = "SOLD OUT"
    }
    else if (location === "ONLINE"){
        cardStatus = "ONLINE"
    }
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
            { cardStatus && <div className = "card-badge">{cardStatus}</div> }
        </div>
        
    )
    
}