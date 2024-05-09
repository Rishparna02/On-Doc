import React from "react";

const Card = ({  img }) => {
  return (
    <div className="paper bg-[#3A6944]/40 text-white rounded-md
     transition-transform transform hover:scale-110 select-none">
      <div className="flex items-center justify-center">
        <img src={img}  className="md:h-44 md:w-48 max-h-64 " />
      </div>
    </div>
  );
};

export default Card;

