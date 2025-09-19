// Button.tsx
import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "circle" | "rect";
}

const Button: React.FC<ButtonProps> = ({ variant = "rect", className, children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "select-none text-pink-700 font-semibold transition-all duration-200 ease-out",
        "bg-[#f7e6ef]",
        "shadow-[inset_2px_2px_16px_rgba(255,255,255,.9),inset_8px_8px_9px_rgba(0,0,0,.2),5px_10px_5px_rgba(0,0,0,.03),-5px_-5px_25px_rgba(255,255,255,.1),-2px_-2px_9px_rgba(100,100,100,.1),inset_-2px_-2px_9px_rgba(255,255,255,1)]",
        "[text-shadow:-2px_-2px_3px_rgba(0,0,0,.2),2px_2px_3px_rgba(255,255,255,1)]",
        "active:bg-[#f3d9ea] active:translate-y-[3px] active:[text-shadow:2px_2px_3px_rgba(0,0,0,.2)]",
        variant === "circle" && "rounded-full w-12 h-12 flex items-center justify-center text-xl",
        variant === "rect" && "rounded-[18px] h-20 w-72 text-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
