import React from 'react'
// import { User } from "lucide-react";

const HeaderComponent = () => {
  return (
    <div id='header' className='flex text-center z-100 max-w-full '>
        <img className='mt-7.5 ml-9' src="Logo.png" alt="kgbj " />
        <div id='ss' className='flex mt-12 ml-auto'>
            <a href='#' className='text-[#495E4C] text-xl'>услуги</a>
            <a href='#' className='text-[#495E4C] ml-9 text-xl'>о нас</a>
            <a href='#' className='text-[#495E4C] ml-9 text-xl'>польза продукта</a>
            <a href='#' className='text-[#495E4C] ml-9 text-xl'>оборудование</a>
            <a href='#' className='text-[#495E4C] ml-9 text-xl'>этапы работы</a>
            <a href='#' className='text-[#495E4C] ml-9 text-xl'>отзывы</a>
        </div>
        <button id='cc' className='relative w-47 h-13 rounded-2xl text-2xl font-normal text-stone-50 bg-[#5CCD6A] ml-auto mr-9 mt-8 
        ring-12 ring-white/45 pb-1.5 cursor-pointer transform-gpu hover-opacity-100'>связаться</button>
    </div>
  )
}

export default HeaderComponent