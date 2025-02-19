import React, { useState } from "react";
import Single from "./Single";
import { bedata } from "./data";

const Birthday = () => {
  const [change, setchange] = useState(bedata);
  const remove = () => {
    // if (change.length == 0) {
    //   setchange([bedata]);
    // } else {
    //   setchange([]);
    // }
    // change.length == 0 ? setchange([bedata]) : setchange([]);
    change.length == 0 ? setchange([bedata]) : setchange([]);
  };

  const removeone = (id) => {
    const newone = change.filter((items, index) => {
      return items.id !== id;
    });
    setchange(newone);
  };

  return (
    <>
      <div className="container w-full xl:w-[40%] lg:w-[45%] sm:w-[60%] mx-auto shadow-lg shadow-amber-100 p-4 ">
        <h3 className="text-center text-5xl ">{change.length} birthay today</h3>
        {change.map((item, index) => {
          return <Single removeone={removeone} {...item} key={index} />;
        })}

        <button
          onClick={remove}
          type=""
          className={` w-[200px] block mx-auto p-3 rounded-md text-white  font-semibold my-3 cursor-pointer ${
            change.length == 0 ? "bg-red-600" : "bg-purple-600"
          }`}
        >
          {change.length == 0 ? "refraion" : "remove all"}
        </button>
      </div>
    </>
  );
};

export default Birthday;
