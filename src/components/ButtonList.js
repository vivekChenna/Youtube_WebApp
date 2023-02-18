import React from "react";

import Button from "./Button";

const ButtonList = () => {
  let array = [
    "All",
    "Live",
    "Gaming Shows",
    "TollyWood Music",
    "Love Songs",
    "Motivation",
    "Comedy",
    "News",
    "Mantras",
  ];

  return (
    <div className="flex justify-evenly mt-3">
      {array.map((element, index) => {
        return <Button name={element} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
