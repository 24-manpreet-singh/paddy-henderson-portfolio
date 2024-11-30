"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

export enum BUTTON_TYPES {
  submit = "submit",
  reset = "reset",
  button = "button",
}

export type ButtonPropsType = {
  title: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  type?: BUTTON_TYPES;
  isDisabled?: boolean
};

export const Button = ({
  title,
  className,
  onClick,
  icon,
  type,
  isDisabled = false
}: ButtonPropsType) => {
  return (
    <button
      className={twMerge(
        `flex justify-center items-center space-x-4 text-sm sm:text-lg border px-8 py-2 border-premium-black ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
        className
      )}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      <p>{title}</p>
      {icon && (
        <div>
          <Image src={icon} alt="" />
        </div>
      )}
    </button>
  );
};
