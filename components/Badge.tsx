import React from "react";

const Badge = ({ item }: { item: string }) => {
  return (
    <span className="inline-flex items-center  border border-dashed border-[#282828] bg-[#222222] text-neutral-100 px-2 py-1 text-xs tracking-wide">
      {item}
    </span>
  );
};

export default Badge;
