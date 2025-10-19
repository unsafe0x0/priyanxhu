import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  type = "button",
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center gap-2 cursor-pointer"
    >
      {children}
    </button>
  );
}
