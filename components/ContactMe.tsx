"use client";

import React, { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import Button from "./Button";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl tracking-wide font-medium">Drop a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="off"
          className="w-full bg-neutral-50 dark:bg-[#222222]  border border-dashed border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 outline-none focus:border-[#5865F2] resize-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
          className="w-full bg-neutral-50 dark:bg-[#222222]  border border-dashed border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 outline-none focus:border-[#5865F2] resize-none"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          autoComplete="off"
          className="w-full bg-neutral-50 dark:bg-[#222222]  border border-dashed border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 outline-none focus:border-[#5865F2] resize-none"
        />
        <Button type="submit">
          {status === "idle" && "Send"}
          {status === "sending" && "Sending..."}
          {status === "sent" && "Sent"}
          {status === "error" && "Error"}
          <LuSendHorizontal />
        </Button>
      </form>
    </section>
  );
}
