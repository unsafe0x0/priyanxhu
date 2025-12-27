import { profileData } from "@/data/profile";
import React from "react";

const Extensions = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-5 w-full">
      <h2 className="text-2xl font-semibold">vscode extensions</h2>
      <ul className="flex flex-col items-start justify-start w-full">
        {profileData.vsCodeExtensions.map((extension, index) => (
          <li
            key={extension.name}
            className={`flex flex-col items-start justify-start gap-2 w-full border-x border-border p-3 ${
              index === 0 ? "border-t border-b" : "border-b"
            }`}
          >
            <p className="text-base font-normal lowercase">{extension.name}</p>
            <p className="text-base font-normal text-muted-foreground lowercase">
              {extension.description}
            </p>
            <div className="flex gap-2">
              {extension.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-normal underline hover:text-chart-2 lowercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Extensions;
