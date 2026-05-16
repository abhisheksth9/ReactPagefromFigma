import React from 'react'
import typing from "../../assets/Illustrations/Typing.svg"

const Job = () => {
  return (
    <div className='relative rounded-[32px] h-[341px] w-[592px] top-[40px] left-[90px] bg-[#a88964] p-8'
    >
        <img
            src={typing}
            className="absolute block w-[350px] top-[50px] left-[292px] opacity-100 object-contain pointer-events-none 
            animate-bounce
            [filter:drop-shadow(0px_20px_40px_rgba(16,24,40,0.10))_drop-shadow(0px_20px_40px_rgba(16,24,40,0.05))]"

        />
            <div className='w-[324px] h-[225px] mr-auto'>
                <div>
                    <h2 className="text-white text-[32px] font-[700] font-bold">
                        Achieve & Showcase
                    </h2>
                </div>
                <p className="mt-4 text-white text-[24px] font-[500] w-[368px]">
                    Build your portfolio, get job-ready.
                </p>
                <div className='w-[337px] h-[115px]'>
                    <p className="mt-6 text-white text-[18px] font-[400] font-[outfit]">
                        Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.
                    </p>
                </div>
            </div>

    </div>
  )
}

export default Job