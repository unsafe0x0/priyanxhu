import React from "react";
import { profileData } from "@/data/Data";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const VsCodeExtensions = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">VS Code Extensions</h2>
      <div className="grid grid-cols-1 gap-5">
        {profileData.vsCodeExtensions.map((ext) => (
          <div
            key={ext.name}
            className="border border-foreground/10 rounded-md p-4 flex flex-col h-full"
          >
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">{ext.name}</h3>
              <p className="text-foreground/70 mb-3 text-base">
                {ext.description}
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex gap-4">
                {ext.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <span>{link.name}</span>
                    <FiExternalLink size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VsCodeExtensions;
