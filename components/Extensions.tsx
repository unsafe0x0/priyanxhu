"use client";

import Link from "next/link";

interface ExtensionLink {
  name: string;
  url: string;
}
interface ExtensionItem {
  name: string;
  description?: string;
  links?: ExtensionLink[];
}

interface ExtensionsProps {
  extensions: ExtensionItem[];
}

export default function Extensions({ extensions }: ExtensionsProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-doto text-2xl tracking-wide">VS Code Extensions</h2>
      <div className="space-y-5">
        {extensions.map((ext, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-base md:text-lg">{ext.name}</div>
            <p className="text-sm  leading-relaxed">{ext.description}</p>
            {ext.links && ext.links.length > 0 && (
              <div className="flex gap-3 text-sm">
                {ext.links.map((l, i) => (
                  <Link
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
