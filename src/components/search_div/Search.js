import React from 'react';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsPersonCheck } from 'react-icons/bs';
import { BiCategoryAlt } from "react-icons/bi";

export default function Search() {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh roundedd=[10px] p-[3rem]">
      <form action="">

        <div className="firstDiv flex justify-between items-center roundedd=[8px] gap-10 bg-white p-5 shadow-lg shadow-greyIsh-700">

          <div className="flex gap-2 items-center">
            <AiOutlineSearch className='text-[25px] icon' />
            <input type="text" className="bg-transparent text-blue-500
            focus:outline-none w-[100%]" placeholder='Search by book title...' />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
          </div>

          <div className="flex gap-2 items-center">
            <BsPersonCheck className='text-[25px] icon' />
            <input type="text" className="bg-transparent text-blue-500
            focus:outline-none w-[100%]" placeholder='Search by author...' />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
          </div>

          <div className="flex gap-2 items-center">
            <BiCategoryAlt className='text-[25px] icon' />
            <input type="text" className="bg-transparent text-blue-500
            focus:outline-none w-[100%]" placeholder='Search by genre...' />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
          </div>

          <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300" >Search</button>

        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort By:</label>
          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Department</option>
            <option value="">Language</option>
            <option value="">Condition</option>
            <option value="">Availability</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Group By:</label>
          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Department</option>
            <option value="">Language</option>
            <option value="">Condition</option>
            <option value="">Availability</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Search By:</label>
          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Department</option>
            <option value="">Language</option>
            <option value="">Condition</option>
            <option value="">Availability</option>
          </select>
        </div>

        {/* <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span> */}
        <button className="border-[2px] border-[blue] rounded-[10px] block px-[12px]  py-[5px] text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</button>
      </div>

    </div>
  )
}
