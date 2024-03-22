import React from 'react'
import Org from './org'

const Experience = () => {
return (
    <div className="w-[87vw] bg-[#FFFF] mx-auto rounded-3xl font-mainFont border-[2px] border-[#E0EEEE] lg:w-[51vw]">
        <div className="px-6 py-5 lg:px-8 lg:py-7">
            <h1 className="font-500 text-2xl text-[#101010] lg:text-3xl">Experience</h1>
            <Org />
            <div className="border-t-2 border-dashed border-[#C0C0C066] mt-4"></div>
            <Org />
        </div>
    </div>
)
}

export default Experience