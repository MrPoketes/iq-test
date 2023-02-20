import clsx from "clsx";
import React from "react";

interface CheckboxProps {
  name: string;
  label: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  className,
}) => {
  return (
    <div className={clsx("flex flex-col text-gray-800", className)}>
      <label className="inline-flex items-center space-x-4">
        <input
          className="form-checkbox rounded"
          type="checkbox"
          name={name}
          required
        />
        <div>
          <span>{label}</span>
        </div>
      </label>
    </div>
  );
};
