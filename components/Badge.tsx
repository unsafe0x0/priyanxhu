import React from "react";

const Badge = ({ item }: { item: string }) => {
  return (
    <span className="inline-flex items-center border border-[#282828] bg-[#ffffff] text-neutral-800 px-2 py-1 text-xs tracking-wide rounded-md">
      {item}
    </span>
  );
};

export default Badge;
