import React from "react";
import { Icon } from "../Icons/Icon";

interface IntroductionCheckProps {
  description: string;
}

export const IntroductionCheck: React.FC<IntroductionCheckProps> = ({
  description,
}) => {
  return (
    <div className="flex items-center space-x-3">
      <Icon.Check className="h-6 w-6 text-green-600" />
      <p className="text-lg text-gray-800">{description}</p>
    </div>
  );
};
