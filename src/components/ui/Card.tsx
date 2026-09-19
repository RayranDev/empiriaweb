import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "lavender" | "glass";
  hoverable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  hoverable = true,
  className = "",
  ...props
}) => {
  const baseClasses =
    "rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out border";

  const variantClasses = {
    default: "bg-white border-[#E8E4F7] shadow-sm",
    elevated: "bg-white border-[#E8E4F7] shadow-md",
    lavender: "bg-[#F2EFFA] border-[#D4C9EE]/60 shadow-sm",
    glass: "bg-white/85 backdrop-blur-md border-white/60 shadow-sm",
  };

  const hoverClasses = hoverable
    ? "hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#8B7FD1]/10 hover:border-[#8B7FD1]/40"
    : "";

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
