import type React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 lowercase">
      {children}
    </span>
  );
};

export default Badge;
