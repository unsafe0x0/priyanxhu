"use client";

import React, { useState } from "react";
import Button from "./Button";
import { VscSend } from "react-icons/vsc";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Drop a Message</h2>
      <form
        onSubmit={handleSubmit}
        className="border border-foreground/10 rounded-md p-4"
      >
        <div className="mb-3">
          <label htmlFor="name" className="block text-base font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-3 py-2 border border-foreground/10 rounded-md bg-background text-foreground focus:outline-none focus:border-foreground/80"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-base font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full px-3 py-2 border border-foreground/10 rounded-md bg-background text-foreground focus:outline-none focus:border-foreground/80"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block text-base font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            rows={4}
            className="w-full px-3 py-2 border border-foreground/10 rounded-md bg-background text-foreground focus:outline-none focus:border-foreground/80 resize-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
            <VscSend size={18} />
          </Button>
          {submitStatus === "success" && (
            <p className="text-green-400 text-sm">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 text-sm">
              Failed to send message. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
