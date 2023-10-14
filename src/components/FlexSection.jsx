import React from 'react'

const FlexSection = ({title, description, img, lgFlexDirection, smFlexDirection}) => {
  return (
    <section className={`flex items-center flex-${lgFlexDirection? smFlexDirection: "col"} md:flex-${lgFlexDirection? "row-reverse": "row"} justify-between w-11/12 mb-16 md:mb-12 mx-auto`}>
<div>
    <h1 className='text-black text-3xl font-bold mb-4'>{title}</h1>
    <p className='w-8/12 text-lg mb-12 md:mb-0'>{description}</p>
</div>
<div className='bg-black grid items-center w-1/2  place-items-center md:w-1/4 md: mb-10'>
    <img className='w-full relative -top-5 left-5' src={img} alt={title} />
</div>
    </section>
  )
}


export default FlexSection