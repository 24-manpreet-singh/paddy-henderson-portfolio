"use client";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
  className?: string;
}

type ButtonGroupProps = {
  options: ButtonGroupOption[];
  className?: string;
  setSelectedType?: (value: ButtonGroupOption) => void;
};

const ButtonGroup = (props: ButtonGroupProps) => {
  const { options, className, setSelectedType } = props;
  const [selectedButton, setSelectedButton] = useState(options[0].label);

  const handleButtonClick = useCallback(
    (payload: ButtonGroupOption) => {
      setSelectedButton(payload.label);

      if (setSelectedType) {
        setSelectedType(payload);
      }
    },
    [setSelectedType]
  );

  return (
    <>
      <div className={twMerge("", className)} role="group">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {options.map((button, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleButtonClick(button)}
              className={twMerge(
                `inline-flex items-center px-10 py-2 text-sm border border-premium-black  focus:bg-premium-black focus:text-white sm:text-lg ${selectedButton === button.label ? "bg-premium-black text-white" : "bg-white text-premium-gray"}`,
                className
              )}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;
