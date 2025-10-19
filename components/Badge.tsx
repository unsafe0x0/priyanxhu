import React from "react";

interface BadgeProps {
  item: string;
}

export default function Badge({ item }: BadgeProps) {
  return (
    <span className="px-2 py-1 rounded-md border border-foreground/10 text-sm">
      {item}
    </span>
  );
}
