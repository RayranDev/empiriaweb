import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "lavender" | "sky" | "soft" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "lavender",
  className = "",
  icon,
}) => {
  const variantStyles = {
    primary: "bg-[#8B7FD1]/15 text-[#5B4B9E] border border-[#8B7FD1]/30",
    secondary: "bg-[#5B4B9E] text-white",
    lavender: "bg-[#E8E4F7] text-[#5B4B9E] border border-[#C3B8E8]/40",
    sky: "bg-[#A8C5E8]/25 text-[#2D2D3A] border border-[#5B8FD4]/30",
    soft: "bg-[#F2EFFA] text-[#3E3B52]",
    outline: "border border-[#8B7FD1]/40 text-[#5B4B9E] bg-white",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
