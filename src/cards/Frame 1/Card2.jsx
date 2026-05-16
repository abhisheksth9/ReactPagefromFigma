import React, { useState } from "react";

import writing from "../../assets/Illustrations/Writing.svg";

import image3 from "../../assets/Images/Image3.svg";
import image4 from "../../assets/Images/Image4.svg";

import arrowleft from "../../assets/icons/arrow-left.svg";
import arrowright from "../../assets/icons/arrow-right.svg";

const Card2 = () => {
  const [hovered, setHovered] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

const cards = [
  {
    image: image3,
    title: "Focused faces—learning mode: ON!",
    imageClass: "absolute h-[300px] bottom-0 left-[48px] ",
    textClass: "absolute w-[241px] h-[48px] top-[36px] left-[80px]",
  },
  {
    image: image4,
    title: "Laptops, lessons, and a whole lot of growth!",
    imageClass: "absolute h-[310px] bottom-0 left-[10px]",
    textClass: "absolute w-[353px] h-[48px] top-[41px] left-[119px] text-center",
  },
];

  const nextSlide = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div
      className="relative rounded-[32px] h-[341px] w-[592px] top-[40px] left-[90px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveCard(0);
      }}
    >
      {/*  CARD 1  */}
      <div
        className={`
          absolute inset-0
          rounded-[32px]
          bg-[#5492a0]
          p-8
          transition-all duration-500 ease-out
          ${
            hovered
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }
        `}
      >
        <img
          src={writing}
          className="absolute block h-[411px] top-[14px] left-[355px] object-contain pointer-events-none
          animate-bounce
          [filter:drop-shadow(0px_20px_40px_rgba(16,24,40,0.10))_drop-shadow(0px_20px_40px_rgba(16,24,40,0.05))]
          "
        />

        <div className="w-[351px]">
          <div>
            <h2 className="text-white text-[32px] font-[700]">
              Learn by Doing
            </h2>

            <p className="mt-4 text-white text-[24px] font-[500]">
              Practical skills, real projects
            </p>
          </div>

          <p className="mt-6 text-white text-[18px] font-[400] font-[outfit]">
            Theory is great, but action is better. At SkillShikshya, you learn
            by doing. Hands-on projects and real-world scenarios help you
            build, break, and create—leading to true mastery.
          </p>
        </div>
      </div>

      {/*  SLIDER  */}
      <div
        className={`
          absolute inset-0
          rounded-[32px]
          bg-[#5492a0]

          transition-all duration-500 ease-out
          ${
            hovered
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
        `}
      >
        {/* Left Cut Circle */}
        <div
        className="
            absolute
            w-[106px]
            h-[106px]
            bg-[#FAFAFA]
            rounded-full
            top-1/2
            -left-[53px]
            -translate-y-1/2
            translate-x-1/5
            z-10
        "
        />

        {/* Right Cut Circle */}
        <div
        className="
            absolute
            w-[106px]
            h-[106px]
            bg-[#FAFAFA]
            rounded-full
            top-1/2
            -right-[53px]
            -translate-y-1/2
            -translate-x-1/5
            -z-10
        "
        />
        {/* IMAGE */}
        <img
          src={cards[activeCard].image}
          className={`
            absolute
            w-[572px]
            opacity-100
            ${cards[activeCard].imageClass}
          `}
        />

        {/* TITLE */}
        <div className={cards[activeCard].textClass}>
            <h2 className="text-[20px] font-bold text-white">
                {cards[activeCard].title}
            </h2>
        </div>
        
        {/* PREV BUTTON */}
        <button
          onClick={prevSlide}
          className="
            absolute
            left-0
            top-1/2
            z-30
            w-[62px]
            h-[62px]
            -translate-x-1
            -translate-y-1/2
            rounded-full
            bg-[#FAFAFA]
            flex
            items-center
            justify-center
            shadow-[0px_6px_15px_-2px_#10182814_inset,0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]
          "
        >
          <img src={arrowleft} />
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          className="
            absolute
            right-0
            top-1/2
            z-30
            w-[62px]
            h-[62px]
            translate-x-1
            -translate-y-1/2
            rounded-full
            bg-[#FAFAFA]
            flex
            items-center
            justify-center
            shadow-[0px_6px_15px_-2px_#10182814_inset,0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]
          "
        >
          <img src={arrowright} />
        </button>
      </div>
    </div>
  );
};

export default Card2;