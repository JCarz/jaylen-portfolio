import React from "react"
import { Button } from "react-scroll/modules"
import { HiArrowNarrowRight } from "react-icons/hi"
import Link from "react-scroll/modules/components/Link"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#918EF4]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* Title */}
        <p className="text-white">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          Jaylen Carroll
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          I'm a Front End Developer.
        </h2>
        <p className="text-[#ffffff] py-4 max-w-[700px]">
          I'm a aspiring Front End Developer specializing in building
          interactive websites, passionate about technology and public safety.
          Currently, a graduate student from Ottawa, Canada and focused on
          building responsive full stack web applications.
        </p>
        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center 
          hover:bg-slate-300 hover:border-slate-300"
          >
            Contact Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2.5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
