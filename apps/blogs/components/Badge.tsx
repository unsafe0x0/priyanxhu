import React from "react";

const Badge = ({ item }: { item: string }) => {
	return (
		<span className="inline-flex items-center bg-[#252525] text-neutral-400 px-2.5 py-1 text-xs tracking-wide rounded-md border border-[#303030] select-none">
			{item}
		</span>
	);
};

export default Badge;
