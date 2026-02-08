import { profileData } from "@/data/profile";
import React from "react";

const Extensions = () => {
  return (
    <section className="space-y-6 w-full">
      <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">
        Extensions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profileData.vsCodeExtensions.map((extension) => (
          <div
            key={extension.name}
            className="group border border-border bg-card p-5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                    {extension.name}
                  </h3>
                </div>

                <div className="flex gap-3">
                  {extension.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-widest hover:text-primary border border-transparent hover:border-primary px-1 transition-all"
                    >
                      [{link.name}]
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {extension.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extensions;
