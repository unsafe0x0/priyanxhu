"use client";
import React, { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import axios from "axios";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState("Send");

  const handleSubmit = async (e) => {
    if (name === "" || email === "" || message === "") {
      setButton("Error");
      return;
    }

    e.preventDefault();
    try {
      await axios.post("/api/contact", {
        name,
        email,
        message,
      });
      setButton("Sent");
    } catch (error) {
      setButton("Failed");
    }
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h3 className="text-2xl font-normal text-zinc-100 underline underline-offset-8 decoration-wavy decoration-green-500">
          Get in touch
        </h3>
        <form
          action=""
          method="post"
          className="flex flex-col justify-start items-start gap-2 w-full"
        >
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="" className="text-lg font-normal text-zinc-200">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-2 py-2 border md:border-2 border-zinc-800 md:py-2 rounded-md bg-zinc-900 text-zinc-200 transition-all duration-300 ease-in-out outline-hidden focus:border-green-500 text-md font-normal"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="" className="text-lg font-normal text-zinc-200">
              Email
            </label>
            <input
              type="email"
              placeholder="youremail@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-2 border md:border-2 border-zinc-800 md:py-2 rounded-md bg-zinc-900 text-zinc-200 transition-all duration-300 ease-in-out outline-hidden focus:border-green-500 text-md font-normal"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="" className="text-lg font-normal text-zinc-200">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols=""
              rows="3"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-2 py-2 border md:border-2 border-zinc-800 md:py-2 rounded-md bg-zinc-900 text-zinc-200 transition-all duration-300 ease-in-out outline-hidden focus:border-green-500 text-md font-normal resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-5 py-[6px] md:py-2 rounded-md bg-gradient-to-br from-green-600 to-green-700 text-zinc-200 text-md font-normal transition-all duration-300 ease-in-out flex items-center gap-2 border md:border-2 border-green-500 cursor-pointer"
          >
            {button} <LuSendHorizontal />
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
