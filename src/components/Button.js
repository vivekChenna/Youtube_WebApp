import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" text-center w-full  font-semibold px-3 py-2 rounded-lg bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
