import React from 'react'

const FlexSection = ({title, description, img, lgFlexDirection, smFlexDirection}) => {
  return (
    <section className={`flex flex-${smFlexDirection} md:${lgFlexDirection} justify-between w-11/12 my-3`}>
<div>
    <h1 className='text-black text-3xl font-bold'>{title}</h1>
    <p className='text-xl'>{description}</p>
</div>
<div>
    <img src={img} alt={title} />
</div>
    </section>
  )
}


export default FlexSection