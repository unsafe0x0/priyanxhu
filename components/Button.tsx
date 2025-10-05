import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] text-white hover:bg-[#4752C4] transition-colors text-sm font-medium cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
