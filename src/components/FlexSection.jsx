import React from 'react'

const FlexSection = ({ title, description, img, lgFlexDirection, smFlexDirection }) => {
  // Define the default flex direction classes
  const flexDirectionClasses = 'flex flex-col md:flex-row';

  // Conditionally update the classes based on the props
  const flexDirection = smFlexDirection || lgFlexDirection || flexDirectionClasses;

  return (
    <section className={`flex items-center ${flexDirection} justify-between w-8/12 mb-16 md:mb-12 mx-auto`}>
      <div>
        <h1 className='text-black text-3xl font-bold mb-4'>{title}</h1>
        <p className='w-9/12 text-lg mb-12 md:mb-0'>{description}</p>
      </div>
      <div className='bg-black grid items-center w-1/2 place-items-center md:w-2/5 md:mb-10'>
        <img className='w-full relative -top-5 left-5' src={img} alt={title} />
      </div>
    </section>
  );
};



export default FlexSection