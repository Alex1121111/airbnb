import React from 'react'
import Card from './Card'
import data from './data'
export default function Section(){
    const cardElem = data.map(
        d => 
        {
            return  (<Card 
            key = {d.id}
            {...d}
            />
    )}
    )
    return(
        <div className='section'>
            {cardElem}
        </div>
    )
}

//              location = {d.location}
//             spots = {d.openSpots}
//             img = {d.img}
//             name = {d.name}
//             price = {d.price}
//             country = {d.country}
//             numRatings = {d.numRatings}
//             rating = {d.rating}