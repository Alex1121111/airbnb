import React from 'react'
import Nav from './components/Nav'
import Info from './components/Info'
import Section from './components/Section'

export default function App(){
    const firstName = "Sri"
    const lastName = "Datta"
    return(
        <div className='app'>
            <Nav/>
            <Info/>
            <Section/>
        </div>
    )
}