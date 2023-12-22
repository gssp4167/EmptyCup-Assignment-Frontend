import React from "react";


const Menu = ({activeMenu, setActiveMenu}) => {

  


  return (
    <div className="flex flex-row items-center justify-between  px-4 py-4">
      <div className={` ${activeMenu==='contact' ? "text-[#E0A64E]" : "" } flex flex-col items-center justify-center hover:cursor-pointer `}
        onClick={()=>{setActiveMenu('contact')}}
      >
        <i class="fa-solid fa-address-card text-[24px] "></i>
        <span className="mt-2 text-[8px]">Contacts</span>
      </div>
      <div className={` ${activeMenu==='gallery' ? "text-[#E0A64E]" : "" } flex flex-col items-center justify-center hover:cursor-pointer `}
        onClick={()=>{setActiveMenu('gallery')}}
      >
        <i class="fa-regular fa-image text-[24px] "></i>
        <span className="mt-2 text-[8px]">Gallery</span>
      </div>
      <div className={` ${activeMenu==='map' ? "text-[#E0A64E]" : "" } flex flex-col items-center justify-center hover:cursor-pointer `}
        onClick={()=>{setActiveMenu('map')}}
      >
        <i class="fa-solid fa-location-dot text-[24px] "></i>
        <span className="mt-2 text-[8px]">Map</span>
      </div>
      <div className="flex flex-col items-center justify-center invisible">
        <i class="fa-solid fa-location-dot text-[24px] "></i>
        <span className="mt-2 text-[8px]"></span>
      </div>
      <div className={` ${activeMenu==='shortlisted' ? "text-[#E0A64E]" : "" } flex flex-col items-center justify-center hover:cursor-pointer `}
        onClick={()=>{setActiveMenu('shortlisted')}}
      >
        <img
          className="w-6"
          src={` ${activeMenu=='shortlisted' ? "src/assets/clipboard-heart-yellow.svg" : "src/assets/clipboard-heart.svg"} `}
          alt=""
        />
        <span className="mt-2 text-[8px]">Shortlisted</span>
      </div>
      <div className={` ${activeMenu==='sort' ? "text-[#E0A64E]" : "" } flex flex-col items-center justify-center hover:cursor-pointer `}
        onClick={()=>{setActiveMenu('sort')}}
      >
        <i class="fa-solid fa-arrow-up-short-wide text-[24px] "></i>
        <span className="mt-2 text-[8px]">Sort</span>
      </div>
    </div>
  );
};

export default Menu;
