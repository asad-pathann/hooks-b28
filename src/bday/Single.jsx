import React from "react";
import { FaTrash } from "react-icons/fa";

const Single = ({ image, name, id, age, removeone }) => {
  return (
    <>
      <div className="flex justify-between items-center shadow p-5  ">
        <div className="flex gap-2 ">
          <img
            className="[clip-path:circle()] object-cover"
            src={image}
            width="70px"
            height="70px"
            alt=""
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-[20px] capitalize">{name}</h3>
            <p className="text-gray-500">{age} usranme</p>
          </div>
        </div>
        <div className="bg-red-600 p-3 flex justify-center items-center cursor-pointer [clip-path:circle()] w-[40px] h-[40px]">
          <FaTrash onClick={() => removeone(id)} color="white" size={"20px"} />
        </div>
      </div>
    </>
  );
};

export default Single;
