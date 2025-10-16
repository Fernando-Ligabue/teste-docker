'use client'

import { cn } from "@/lib/utils"

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  rounded?: string;
  padding?: string;
  type?: "button" | "submit" | "reset"
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
  iconSize?: number;
}

const CustomButton = ({
  children,
  onClick,
  className = "cursor-pointer",
  backgroundColor = "bg-primary",
  textColor = "text-white",
  borderColor = "border-transparent",
  rounded = "rounded-xl",
  padding = "px-6 py-1",
  type = "button",
  icon: Icon,
  iconPosition = "right",
  iconSize = 18,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-colors duration-300 border gap-2",
        backgroundColor,
        textColor,
        borderColor,
        rounded,
        padding,
        className
      )}
    >
      {Icon && iconPosition === "left" && <Icon size={iconSize} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={iconSize} />}
    </button>
  );
};

export default CustomButton;
