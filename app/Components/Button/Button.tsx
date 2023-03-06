import React from "react";
import clsx from "clsx";
import { FocusUtility } from "../Utilities/FocusUtility";
import { Icon } from "../Icons/Icon";

interface ButtonProps<AsType extends React.ElementType> {
  color?: "red" | "green" | "default";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  shrink?: boolean;
  loading?: boolean;
  as?: AsType;
}

type PolymorphicButtonProps<AsType extends React.ElementType> =
  ButtonProps<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const Button = <AsType extends React.ElementType>({
  type = "submit",
  color = "default",
  disabled = false,
  shrink = true,
  loading = false,
  as,
  children,
  className,
  ...props
}: PolymorphicButtonProps<AsType>) => {
  const ButtonTag = as || "button";
  const styles = {
    green: "text-white bg-green-600 border-transparent hover:bg-green-800",
    red: "text-white bg-red-600 border-transparent hover:bg-red-800",
    default: "text-gray-600 bg-white border-gray-300 hover:bg-gray-100",
  }[color];

  return (
    <ButtonTag
      {...props}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center rounded border p-2 px-4 text-xs font-medium no-underline transition duration-150",
        !shrink && "w-full",
        disabled &&
          "cursor-not-allowed disabled:border-transparent disabled:bg-red-600 disabled:text-white disabled:hover:bg-red-800",
        styles,
        FocusUtility.style,
        className
      )}
      type={type}
    >
      <div className="flex items-center space-x-1">
        {loading && <Icon.Loading className="block h-5 w-5 animate-spin" />}
        <p>{children}</p>
      </div>
    </ButtonTag>
  );
};
