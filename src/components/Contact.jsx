import React from "react"

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#918EF4] flex justify-center items-center p-4 "
    >
      <form
        method="POST"
        action="https://getform.io/f/66dae579-e5ad-42db-8b0a-6c0873717fcc"
        className="flex flex-col max-w-[700px] h-full text-white w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Contact
          </p>
          <p className="text-white py-4">
            Submit the form below or send me an email -
            jaylencarroll87@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] py-2  rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] py-2 rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-slate-300 hover:border-slate-300 px-4 py-3 my-8 mx-auto flex items-center">
          Message me
        </button>
      </form>
    </div>
  )
}

export default Contact
