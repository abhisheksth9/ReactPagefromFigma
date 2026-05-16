import React from 'react'

import thinking from "../../assets/Illustrations/Thinking.svg";

import image1 from "../../assets/Images/Image1.svg"
import image2 from "../../assets/Images/Image2.svg"
import wow1 from "../../assets/Images/wow1.svg"
import wow2 from "../../assets/Images/wow2.svg"

import arrowleft from "../../assets/icons/arrow-left.svg"
import arrowright from "../../assets/icons/arrow-right.svg"


const Card1 = () => {
  return (
    <div className='relative rounded-[32px] h-[341px] w-[592px] top-[40px] left-[90px] bg-[#f45b5b] group p-8'>
            <div className='
                absolute inset-0 rounded-[32px] bg-[#f45b5b] p-8 
                transition-all duration-500 ease-out
                group-hover:-translate-x-[120%]
                group-hover:opacity-0
            '>
                <img
                    src={thinking}
                    className="
                    absolute w-[307.03px] top-[22px] left-[-48.92px] opacity-100 rotate-0 object-contain pointer-events-none
                    animate-bounce
                    [filter:drop-shadow(0px_20px_40px_rgba(16,24,40,0.10))_drop-shadow(0px_20px_40px_rgba(16,24,40,0.05))]
                    "
                />
                <div className="w-[351px] ml-auto text-right">
                    <div>
                        <h2 className="text-white text-[32px] font-[700] ">
                            Start with Clarity
                        </h2>
                        <p className="mt-4 text-white text-[24px] font-[500]">
                            Step into a better learning path.
                        </p>
                    </div>
                    <div className=' w-[351px] h-[115px] text-right'>
                        <p className="mt-6 text-white/90 text-[18px] font-[400] font-[outfit] ">
                            Overwhelmed by too many learning 
                            options? SkillShikshya provides a clear,
                            curated roadmap from the start. Whether
                            you're a beginner or upskilling, we have a 
                            path tailored to your growth.
                        </p>
                    </div>
                </div>
            </div>
            {/* Card 2*/}
            <div
            className="
                absolute inset-0 rounded-[32px] bg-[#f45b5b]
                transition-all duration-500 ease-out
                opacity-0
                group-hover:translate-x-0
                group-hover:opacity-100
            "
            >
                <div
                className="
                    absolute w-[106px] h-[106px] bg-[#FAFAFA] rounded-full top-1/2 -left-[53px] -translate-y-1/2 translate-x-1/5
                "
                />

                <div
                className=" absolute w-[106px] h-[106px] bg-[#FAFAFA] rounded-full top-1/2 -right-[53px] -translate-y-1/2 -translate-x-1/5 z-10
                "
                />
                <div>
                    <img
                        src={wow1} className=' absolute w-[88px] h-[88px] top-[193px] left-[385px] rotate-[146.52deg] object-contain
                        '
                    />
                    <img
                        src={wow2} className=' absolute w-[88px] h-[88px] top-[24px] left-[67px] rotate-[11.91deg] object-contain
                    '
                    />
                    <img
                        src={image1} className=' absolute overflow-visible w-[352px] h-[323px] top-[18px] left-[35px] opacity-100; border-bottom-left-radius-[23px];
                        '
                    />
                    <img
                        src={image2} className=' absolute w-[352px] h-[323px] top-[18px] left-[24px] opacity-100; border-bottom-left-radius-[23px];
                        '
                    />
                </div>

                <div className="absolute h-[72px] top-[5px] left-[300px] p-8">
                    <h2 className="text-[20px] font-[700] font-bold text-white">
                        Clarity unlocked—stickers, sips, and skills all in one go!
                    </h2>
                </div>

                <button
                    className="
                    absolute left-0 top-1/2 z-30 w-[62px] h-[62px] -translate-x-1 -translate-y-1/2 rounded-full bg-[#FAFAFA] flex items-center justify-center
                    shadow-[0px_6px_15px_-2px_#10182814_inset,0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]
                    "
                
                >
                    <img
                        src={arrowleft}
                    />
                </button>

                <button
                    className="
                    absolute right-0 top-1/2 z-30 w-[62px] h-[62px] translate-x-1    -translate-y-1/2 rounded-full bg-[#FAFAFA] flex items-center justify-center
                    shadow-[0px_6px_15px_-2px_#10182814_inset,0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]
                "
                >
                    <img 
                    src={arrowright}
                    />
                </button>
            </div>
    </div>
  )
}

export default Card1