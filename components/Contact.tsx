"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { LuSendHorizontal } from "react-icons/lu";

import FadeInOnScroll from "./FadeInScroll";

async function sendMessage({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      setButtonText("Sent");
      setName("");
      setEmail("");
      setMessage("");
    },
    onError: () => {
      setButtonText("Error");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email, message });
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-4xl">
        <FadeInOnScroll>
          <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-red-500 mb-7">
            Connect with me
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className="text-md font-normal mb-1">
            {`Have a question ? Feel free to reach out to me`}
          </p>
          <p className="text-md font-normal mb-1 flex flex-wrap items-center gap-1">
            <span className="">{`You can also email me at`}</span>
            <span className="text-red-500 underline">{`unsafezero@gmail.com`}</span>
          </p>
          <p className="text-md font-normal mb-5">
            {`or fill the form below, i will get back to you as soon as possible`}
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll className="w-full">
          <form
            action=""
            className="flex flex-col justify-start items-start w-full gap-3"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 outline-none text-md font-normal border border-neutral-200 dark:border-neutral-700/50 focus:ring focus:ring-red-500 rounded-md bg-neutral-50 dark:bg-neutral-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 outline-none text-md font-normal border border-neutral-200 dark:border-neutral-700/50 focus:ring focus:ring-red-500 rounded-md bg-neutral-50 dark:bg-neutral-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Enter your message"
              className="w-full px-3 py-2 outline-none text-md font-normal border border-neutral-200 dark:border-neutral-700/50 focus:ring focus:ring-red-500 rounded-md resize-none bg-neutral-50 dark:bg-neutral-900"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-neutral-800 dark:bg-white/80 text-white/80 dark:text-neutral-800 px-3 py-2 rounded-md text-md font-normal flex items-center gap-3 mt-2 cursor-pointer"
            >
              {buttonText}
              <LuSendHorizontal className="text-xl" />
            </button>
          </form>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
