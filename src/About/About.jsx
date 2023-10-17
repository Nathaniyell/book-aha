import React from 'react'
import book1 from '../assets/book1.jpg'
import book2 from '../assets/book2.jpg'
import book3 from '../assets/book3.jpg'
import book4 from '../assets/book4.jpg'

const About = () => {
  return (
    <div className='absolute bg-signUp bg-contain flex flex-col md:flex-row text-white justify-between items-center h-screen w-full p-4'>
        <fieldset>
       <form action="">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id='firstName' />
        <label htmlFor="email">First Name:</label>
        <input type="email" id='email' />
        </form> 
        </fieldset>
        
        </div>
  )
}

export default About