import React from "react";

interface CheckboxProps {
  name: string;
  children: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, children }) => {
  return (
    <div className="flex flex-col">
      <label className="inline-flex items-center space-x-2">
        <input
          className="form-checkbox rounded "
          type="checkbox"
          name={name}
          required
        />
        <div>{children}</div>
      </label>
    </div>
  );
};
