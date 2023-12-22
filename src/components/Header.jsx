import React from 'react'

const Header = () => {
  return (
    <nav className='flex flex-row items-center justify-between px-4 py-4 border-b-[1px] border-solid border-gray-200' >
 
        <img src="src/assets/icon.svg" alt="" />

        <h3 className='text-[#716966] text-[24px] font-bold' >EmptyCup</h3>

        <i class="fa-solid fa-ellipsis-vertical text-[21px]"></i>

    </nav>
  )
}

export default Header