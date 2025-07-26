"use client";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

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

const GetInTouch = () => {
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
    <div className="flex flex-col items-start justify-start gap-3 p-4 bg-neutral-900 rounded-md border border-neutral-800 text-neutral-300 col-span-2 w-full break-inside-avoid">
      <h2 className="text-2xl font-semibold text-neutral-200 font-doto">
        Get In Touch
      </h2>
      <p className="text-sm font-normal text-neutral-400">
        If you have any questions or inquiries, feel free to reach out!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-2 bg-neutral-800/60 rounded-md outline-none text-base font-normal text-neutral-300 border border-transparent focus:border-neutral-200 transition-colors duration-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-2 bg-neutral-800/60 rounded-md outline-none text-base font-normal text-neutral-300 border border-transparent focus:border-neutral-200 transition-colors duration-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 bg-neutral-800/60 rounded-md outline-none text-base font-normal text-neutral-300 border border-transparent focus:border-neutral-200 transition-colors duration-200 resize-none"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          autoComplete="off"
        ></textarea>
        <button
          type="submit"
          className="text-neutral-800 bg-white px-3 py-2 text-sm rounded-md hover:bg-neutral-200 transition-colors duration-200 cursor-pointer self-start mt-2"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;
