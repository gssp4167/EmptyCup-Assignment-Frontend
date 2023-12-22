import React from "react";
import { updateItemStatus } from "../api/api";

const Card = ({ item }) => {

  const handleShortlist =  async (id,status)=>{
    item.shortlisted=!status
    await updateItemStatus(item);
    location.reload();
  }

  return (
    <div className="card flex flex-row px-4 py-4 " key={item.rating}>
      <div className="flex flex-col items-start justify-between px-4 w-3/4  border-r-2 border-solid border-gray-100">
        <div>
          <h4 className="text-[18px] font-bold">{item.title}</h4>
          <div>
            {[...Array(5).keys()].map((el, i) => {
              return i < item.rating && i + 1 > item.rating ? (
                <i class="fa-solid fa-star-half-stroke"></i>
              ) : // check if current star should be full
              i < item.rating ? (
                <i class="fa-solid fa-star text-[16px] "></i>
              ) : (
                // else, current star should be empty
                <i class="fa-regular fa-star text-[16px] "></i>
              );
            })}

            {/*  */}
          </div>
        </div>

        <p className="text-[10px] font-bold">{item.description}</p>

        <div className="flex flex-row w-3/4 items-center justify-between ">
          <div className="flex flex-col items-center justify-center font-bold">
            <span className="text-[20px]">{item.projects}</span>
            <p className="text-[10px]">Projects</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold">
            <span className="text-[20px]">{item.years}</span>
            <p className="text-[10px]">Years</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold">
            <span className="text-[20px]">{item.price}</span>
            <p className="text-[10px]">Price</p>
          </div>
        </div>

        <div>
          <p className="text-[16px] font-bold">{item.contact1}</p>
          <p className="text-[16px] font-bold">{item.contact2}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between text-[#8D4337] py-2 px-4 w-3/12">
        <div className="flex flex-col items-center justify-center py-3 hover:cursor-pointer">
          <i class="fa-solid fa-arrow-right"></i>
          <span className="text-[10px] mt-1">Details</span>
        </div>

        <div className="flex flex-col items-center justify-center py-3 hover:cursor-pointer">
          <i class="fa-regular fa-eye-slash"></i>
          <span className="text-[10px] mt-1">Hide</span>
        </div>

        <div
          className="flex flex-col items-center justify-center py-3 hover:cursor-pointer"
          onClick={() => {
            handleShortlist(item.id , item.shortlisted)
          }}
        >
          <i
            class={` ${
              item.shortlisted ? "fa-solid" : "fa-regular"
            }  fa-bookmark`}
          ></i>
          <span className="text-[10px] mt-1">
            {item.shortlisted ? "shortlisted" : "shortlist"}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center py-3 hover:cursor-pointer">
          <i class="fa-solid fa-circle-exclamation"></i>
          <span className="text-[10px] mt-1">Report</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
