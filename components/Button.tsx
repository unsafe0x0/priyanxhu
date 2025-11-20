import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  type = "button",
  children,
  onClick,
  disabled,
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-foreground text-background",
    secondary: "bg-accent text-foreground",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 ${variantClasses[variant]} rounded-md hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center gap-2 cursor-pointer text-base font-normal border border-border`}
    >
      {children}
    </button>
  );
}
