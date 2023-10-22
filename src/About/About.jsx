import React from 'react'
import book from "../assets/book2.jpg"

const About = () => {
  return (
    <div className='bg-[#2b2b2b] h-full mb-40 md:mb-[8rem]'>
      <div className=' bg-white relative top-20 md:top-[7.5rem]  h-11/12 flex flex-col md:flex-row justify-between items-center gap-10 md:w-[100%] mx-auto md:px-8'>
        <div className="p-2 mt-6 relative w-11/12 mx-auto text-justify text-slate-500 bg-white shadow-lg hover:shadow-xl border rounded-md">
          <h1 className='text-3xl font-semibold text-center py-2'>About BookAha</h1>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis minima dignissimos dolores sapiente ipsam repellat doloribus. At asperiores iusto voluptatem praesentium nisi minima, debitis quasi sequi deserunt et ullam, omnis expedita, rerum adipisci atque unde corporis veniam. At, ex temporibus! Repudiandae non explicabo in officiis cumque aspernatur alias, repellat consequatur error numquam nobis provident itaque earum quasi? Quos optio corporis ipsum, quod labore ratione blanditiis sed repellat provident. Consequatur veniam voluptatibus id omnis velit est beatae assumenda itaque totam pariatur mollitia unde possimus voluptatum debitis ab nemo earum, enim esse adipisci, labore distinctio blanditiis et. Eum iusto ut amet.</p>
        </div>
      <div className='relative p-2 my-5 border border-black w-11/12 mx-auto'>

      <img src={book} alt="About Book Aha" />
      </div>
      </div>
     
    </div>
  )
}

export default About