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
            className="border border-neutral-800 rounded-md p-4 flex flex-col h-full bg-neutral-900 ring-2 ring-transparent hover:ring-neutral-800 transition-all duration-200"
          >
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">{ext.name}</h3>
              <p className="text-neutral-300 text-base">{ext.description}</p>
            </div>
            <div className="mt-4">
              <div className="flex gap-4">
                {ext.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    className="flex items-center gap-1 text-neutral-400 hover:text-neutral-100 transition-colors"
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
