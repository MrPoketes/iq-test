import React from "react";
import clsx from "clsx";
import { FocusUtility } from "../Utilities/FocusUtility";

interface ButtonProps<AsType extends React.ElementType> {
  color?: "red" | "green" | "default";
  type?: "button" | "submit";
  className?: string;
  children?: React.ReactNode;
  shrink?: boolean;
  as?: AsType;
}

type PolymorphicButtonProps<AsType extends React.ElementType> =
  ButtonProps<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const Button = <AsType extends React.ElementType>({
  type = "submit",
  color = "default",
  shrink = true,
  as,
  children,
  className,
  ...props
}: PolymorphicButtonProps<AsType>) => {
  const ButtonTag = as || "button";
  const { defaultClass, hoverClass } = {
    green: {
      defaultClass: "text-white bg-green-600 border-transparent",
      hoverClass: "hover:bg-green-800",
    },
    red: {
      defaultClass: "text-white bg-red-600 border-transparent",
      hoverClass: "hover:bg-red-800",
    },
    default: {
      defaultClass: "text-gray-600 bg-white border-gray-300",
      hoverClass: "hover:bg-gray-100",
    },
  }[color];

  return (
    <ButtonTag
      {...props}
      className={clsx(
        "flex items-center justify-center rounded border p-2 px-4 text-xs font-medium no-underline transition duration-150",
        !shrink && "w-full",
        defaultClass,
        hoverClass,
        FocusUtility.style,
        className
      )}
      type={type}
    >
      {children}
    </ButtonTag>
  );
};
