import React from "react"
import WorkImg from "../assets/workImg.jpeg"
import SphereImage from "../assets/sphereIMG.jpg"
import researchIMG from "../assets/researchIMG.jpg"
import weatherIMG from "../assets/weatherIMG.jpg"
import feedbackIMG from "../assets/feedbackIMG.jpg"

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-white bg-[#141B41]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font bold inline border-b-4 text-white border-white">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${SphereImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Java DataBank JDBC
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/JCarz/DataBank-JSF-JPA-Skeleton">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${researchIMG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Python Research Project
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/JCarz/ProjectLanguage-main-master">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${weatherIMG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                Android Weather API
              </span>
              <div className="pt-8 text-center">
                <a href="/"></a>

                <a href="/"></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${feedbackIMG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Feedback App
              </span>
              <div className="pt-8 text-center">
                <a href="/"></a>

                <a href="/"></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
