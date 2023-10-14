import React from 'react'

const FlexSection = ({title, description, img, lgFlexDirection, smFlexDirection}) => {
  return (
    <section className={`flex items-center flex-${smFlexDirection} md:${lgFlexDirection} justify-between w-11/12 my-3 mx-auto`}>
<div>
    <h1 className='text-black text-3xl font-bold mb-4'>{title}</h1>
    <p className='text-lg mb-2 md:mb-0'>{description}</p>
</div>
<div className='bg-black grid items-center w-1/2  place-items-center'>
    <img className='w-full relative -top-5 left-5' src={img} alt={title} />
</div>
    </section>
  )
}


export default FlexSection