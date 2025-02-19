import React, { useState } from "react";

const UseState = () => {
  const [name, setname] = useState("slam");
  const go = (hi) => {
    console.log(go);
  };
  return (
    <>
      <div className="container mx-auto p-2 shadow-lg ">
        <h1 className="text-6xl font-bold bg-gradient-to-l from-red-900 to-blue-900 to-pink-400 bg-clip-text text-transparent text-center">
          {name}
        </h1>
        <button
          type=""
          onClick={go}
          className="bg-red-500 p-3 rounded-full text-white mx-auto block my-4"
        >
          login
        </button>
      </div>
    </>
  );
};

export default UseState;
