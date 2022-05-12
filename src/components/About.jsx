import React from "react"

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
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello. I'm Jaylen nice to meet you please look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nisi error, facere ducimus ex nobis. Numquam vel quibusdam
              repellat modi magnam exercitationem doloribus reprehenderit
              accusamus culpa. Dignissimos incidunt similique sint? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aliquam, et!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
