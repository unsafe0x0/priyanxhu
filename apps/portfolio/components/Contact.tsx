"use client";
import React from "react";
import { profileData } from "@/data/Data";
import { MdEmail } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import Link from "next/link";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-5">Let's Work Together</h2>
        <p className="text-lg md:text-xl text-card-foreground/70 mb-5 max-w-3xl text-center mx-auto">
          Have a project in mind? or have a career opportunity? Let's
          collaborate and build something amazing.
        </p>

        <div className="flex items-center justify-center flex-wrap gap-3">
          <Button variant="outline" size="default" className="shadow-none">
            <Link
              href={"mailto:" + profileData.email}
              className="flex items-center gap-2"
            >
              Mail
              <MdEmail />
            </Link>
          </Button>
          <Button variant="default" size="default" className="shadow-none">
            <Link
              target="_blank"
              href={profileData.calcom}
              className="flex items-center gap-2"
            >
              Get in Touch
              <LuSend />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
