import React from "react"
import PFP from "../assets/BrunoAndI.jpg"

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#306BAC] text-white
    "
    >
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello. I'm Jaylen, nice to meet you. Please look around.</p>
          </div>
          <div>
            <p>
              I am an aspiring Front end developer. I have a passion for
              creating clean minimal and responsive webpages. I enjoy learning
              new technologies and constantly learning new things. I just
              recently finished my program at Algonquin Collage in Ottawa,
              Canada and I am currently looking for a job in the field of web
              development.
            </p>
          </div>
          <div>
            <img src={PFP} alt="BrunoAndI" className="border-4 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
