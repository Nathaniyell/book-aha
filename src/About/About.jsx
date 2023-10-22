import React from 'react'
import book from "../assets/book2.jpg"

const About = () => {
  return (
    <div className='bg-h-full mb-80 md:mb-0'>
      <div className='relative top-14  h-screen flex flex-col md:flex-row justify-between items-center gap-10 md:w-[85%] mx-auto'>
      <p className='p-2 relative w-11/12 mx-auto text-justify text-slate-500 bg-white shadow-lg hover:shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis minima dignissimos dolores sapiente ipsam repellat doloribus. At asperiores iusto voluptatem praesentium nisi minima, debitis quasi sequi deserunt et ullam, omnis expedita, rerum adipisci atque unde corporis veniam. At, ex temporibus! Repudiandae non explicabo in officiis cumque aspernatur alias, repellat consequatur error numquam nobis provident itaque earum quasi? Quos optio corporis ipsum, quod labore ratione blanditiis sed repellat provident. Consequatur veniam voluptatibus id omnis velit est beatae assumenda itaque totam pariatur mollitia unde possimus voluptatum debitis ab nemo earum, enim esse adipisci, labore distinctio blanditiis et. Eum iusto ut amet.</p>
      <div className='relative p-2 mb-5 border border-1-white w-11/12 mx-auto'>

      <img src={book} alt="About Book Aha" />
      </div>
      </div>
     
    </div>
  )
}

export default About