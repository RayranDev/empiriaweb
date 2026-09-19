import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none text-center cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm sm:text-base px-6 py-3 gap-2 shadow-sm hover:shadow",
    lg: "text-base sm:text-lg px-8 py-3.5 gap-2.5 shadow hover:shadow-md",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#5B8FD4] via-[#7385D6] to-[#8B7FD1] text-white hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-[#5B8FD4] shadow-[#8B7FD1]/20",
    secondary:
      "bg-[#5B4B9E] text-white hover:bg-[#4E3F88] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-[#5B4B9E] shadow-[#5B4B9E]/20",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20bd5a] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-[#25D366] shadow-[#25D366]/25 font-bold",
    outline:
      "border-2 border-[#8B7FD1] text-[#5B4B9E] bg-white/80 hover:bg-[#F2EFFA] hover:border-[#5B4B9E] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-[#8B7FD1]",
    ghost:
      "text-[#5B4B9E] hover:bg-[#E8E4F7]/60 hover:text-[#2D2D3A] focus-visible:ring-[#8B7FD1]",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
