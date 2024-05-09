import React from "react";


import Work from "./Work"
import Card from "./Card"

import dog from "../../../assets/stethescope1.png";
import cat from "../../../assets/injection.png";
import firstaid from "../../../assets/firstaid.png";
import statics from "../../../assets/mask (2).png";
import location from "../../../assets/tablet.png";
import Quote from "./Quote";
//import Adopt from "./Adopt"
import Team from "./Team"
import Nav from "./Navbar"
const Home = () => {
  const cards = [
    {
      img: dog,
    },
    {
      img: cat,
    },
    {
      img: firstaid,
    },
    {
      img: statics,
    },
    {
      img: location,
    },
  ];

  return (
    <div className="bg-[#FEFAE0] h-full">
      <Nav/>
      <Quote/>
      <div className="flex flex-col items-center ">
        <div className="flex gap-4 ">
          {cards.map((card, index) => (
            <div  classname= " select-none"key={index}>
              <Card img={card.img} />
            </div>
          ))}
        </div>
      </div>
      <Work id="work" />
      {/* <Adopt /> */}
      <Team id="about" />
    </div>
  );
};

export default Home;