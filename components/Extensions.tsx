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
      <h2 className="text-2xl tracking-wide font-medium">VS Code Extensions</h2>
      <div className="space-y-5">
        {extensions.map((ext, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-lg font-medium">{ext.name}</div>
            <p className="text-sm text-neutral-300  leading-relaxed">
              {ext.description}
            </p>
            {ext.links && ext.links.length > 0 && (
              <div className="flex gap-3 text-sm text-neutral-300">
                {ext.links.map((l, i) => (
                  <Link
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 text-sm text-neutral-300 hover:text-red-400 transition-colors"
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
