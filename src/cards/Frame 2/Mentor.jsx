import React from 'react'
import listening from "../../assets/Illustrations/Listening.svg"

const Mentor = () => {
  return (
    <div className='relative rounded-[32px] h-[341px] w-[592px] top-[40px] left-[90px] bg-[#6c64a8] p-8'
    >
        <img
            src={listening}
            className="absolute block w-[355px] top-[106px] left-[-70px] opacity-100 rotate-0 object-contain pointer-events-none 
            animate-bounce
            [filter:drop-shadow(0px_20px_40px_rgba(16,24,40,0.10))_drop-shadow(0px_20px_40px_rgba(16,24,40,0.05))]"
        />
            <div className='w-[417px] h-[225px] ml-auto text-right'>
                <div>
                    <h2 className="text-white text-[32px] font-[700] font-bold">
                        Get Mentored & Supported
                    </h2>
                </div> 
                    <p className="mt-4 text-white text-[24px] font-[500]">
                        You are not learning alone.
                    </p>
                <div className='w-[311px] ml-auto text-right'>
                    <p className="mt-6 text-white text-[18px] font-normal font-[outfit]">
                        Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.
                    </p>
                </div>
            </div>

    </div>
  )
}

export default Mentor