import type React from "react";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary" | "ghost";
}

const Button = ({
	children,
	onClick,
	type = "button",
	variant = "primary",
}: ButtonProps) => {
	const baseStyles =
		"inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer rounded-lg select-none";

	const variants = {
		primary: "bg-white text-neutral-900",
		secondary: "bg-[#252525] text-neutral-200 border border-[#353535]",
		ghost: "bg-transparent text-neutral-400",
	};

	return (
		<button
			onClick={onClick}
			type={type}
			className={`${baseStyles} ${variants[variant]}`}
		>
			{children}
		</button>
	);
};

export default Button;
