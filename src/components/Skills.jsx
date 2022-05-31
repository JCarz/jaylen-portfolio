import React from "react"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import ReactIMG from "../assets/react.png"
import GitHub from "../assets/github.png"
import Java from "../assets/java.png"
import MySQL from "../assets/mysql.png"
import Python from "../assets/python.png"
import Android from "../assets/android.png"
const Skills = () => {
  return (
    <div name="skills" className="bg-[#293e7d] text-white w-full h-full">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white  text-white">
            Skills
          </p>
          <p className="py-4">
            These are the resources and technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
            <img className="w-20 mx-auto" src={Java} alt="HTML icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
            <img className="w-20 mx-auto" src={HTML} alt="CSS icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
            <img className="w-20 mx-auto" src={ReactIMG} alt="GitHub icon" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
            <img className="w-20 mx-auto" src={GitHub} alt="React icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
            <img className="w-20 mx-auto" src={MySQL} alt="Mongo icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
            <img className="w-20 mx-auto" src={CSS} alt="Tailwind icon" />
            <p className="py-2">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
            <img className="w-20 mx-auto" src={Python} alt="Tailwind icon" />
            <p className="py-2">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-2">
            <img className="w-20 mx-auto" src={Android} alt="Tailwind icon" />
            <p className="py-2">Andriod Studio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
