import React from "react";
import Link from "next/link";
import Image from "next/image";

interface EmpiriaLogoProps {
  variant?: "full" | "mark-only" | "white";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const EmpiriaLogo: React.FC<EmpiriaLogoProps> = ({
  variant = "full",
  className = "",
  size = "md",
}) => {
  const sizeStyles = {
    sm: { height: 44, width: 44, imgClass: "h-11 w-auto" },
    md: { height: 58, width: 58, imgClass: "h-14 sm:h-16 w-auto" },
    lg: { height: 80, width: 80, imgClass: "h-20 sm:h-24 w-auto" },
    xl: { height: 110, width: 110, imgClass: "h-28 sm:h-32 w-auto" },
  };

  const selectedSize = sizeStyles[size] || sizeStyles.md;
  const isWhite = variant === "white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8FD4] rounded-xl p-1 ${className}`}
      aria-label="Centro Terapéutico Empiria - Inicio"
    >
      <div className="relative shrink-0 flex items-center">
        <Image
          src="/logo/logo.png"
          alt="Centro Terapéutico Empiria - Fonoaudiología Infantil"
          width={selectedSize.width * 2}
          height={selectedSize.height * 2}
          className={`${selectedSize.imgClass} object-contain transition-opacity duration-200`}
          priority
        />
      </div>

      {variant === "full" && size !== "sm" && (
        <div className="hidden sm:flex flex-col text-left leading-tight border-l border-[#D4C9EE]/60 pl-3">
          <span
            className={`text-[0.625rem] font-bold tracking-[0.18em] uppercase ${
              isWhite ? "text-[#E8E4F7]" : "text-[#5B8FD4]"
            }`}
          >
            Fonoaudiología Infantil
          </span>
          <span
            className={`text-xs font-semibold tracking-wide ${
              isWhite ? "text-white" : "text-[#5B4B9E]"
            }`}
          >
            Bogotá
          </span>
        </div>
      )}
    </Link>
  );
};
