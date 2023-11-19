import React from 'react'
import Card from './Card'
import pool from '../images/pool.svg'
import wedding from '../images/wedding.svg'
import mountain from '../images/mountain.svg'
export default function Section(){
    return(
        <div className='section'>
            <Card 
            img = {pool}
            name = "Life lessons with Katie Zaferes"
            price = "139"
            country = "USA"
            numRatings = "6"
            rating = "5"/>
            <Card 
            img = {wedding}
            name = "Learn wedding photography"
            price = "125"
            country = "USA"
            numRatings = "30"
            rating = "5"/>            
            <Card 
            img = {mountain}
            name = "Group Mountain Biking"
            price = "50"
            country = "USA"
            numRatings = "2"
            rating = "4.8"/>
        </div>
    )
}