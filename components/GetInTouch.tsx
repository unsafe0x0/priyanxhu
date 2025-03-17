"use client";

import React, { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import Link from "next/link";

export const GetInTouch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [button, setButton] = useState<string>("Send");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setButton("Error");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setButton("Sent");
      } else {
        setButton("Failed");
      }
    } catch (error: any) {
      console.error("Error processing contact form submission:", error);
      setButton("Failed");
    }
  };

  return (
    <section className="flex justify-center items-center w-full" id="contact">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] gap-4">
        <h3 className="text-3xl font-medium text-zinc-100">Get in touch</h3>
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="text-md font-normal text-zinc-200">
            Have a question or want to work together? Feel free to reach out to
            me.
          </p>
          <p className="text-md font-normal text-zinc-200">
            You can also email me at
            <Link
              href="mailto:bluetooxth@gmail.com"
              className="text-zinc-300 underline underline-offset-8"
            >
              Bluetooxth@gmail.com
            </Link>
          </p>
          <p className="text-md font-normal text-zinc-200">
            Or you can fill out the form below and I will get back to you as
            soon as possible.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-start gap-2 w-full"
        >
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label className="text-xl font-normal text-zinc-100">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-900 text-zinc-100 focus:border-zinc-100 text-md font-normal"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label className="text-xl font-normal text-zinc-100">Email</label>
            <input
              type="email"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-900 text-zinc-100 focus:border-zinc-100 text-md font-normal"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label className="text-xl font-normal text-zinc-100">Message</label>
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-900 text-zinc-100 focus:border-zinc-100 text-md font-normal resize-none"
              rows={3}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-1.5 rounded-md bg-white hover:bg-zinc-300 text-zinc-800 text-md font-medium flex items-center gap-2 border border-zinc-700 cursor-pointer"
          >
            {button} <LuSendHorizontal />
          </button>
        </form>
      </div>
    </section>
  );
};
