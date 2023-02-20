import React from "react";
import { Icon } from "../Icons/Icon";

interface ListItemProps {
  description: string;
}

export const ListItem: React.FC<ListItemProps> = ({ description }) => {
  return (
    <li className="flex items-center space-x-3">
      <div>
        <Icon.Check className="h-6 w-6 text-green-600" />
      </div>
      <p className="text-gray-800">{description}</p>
    </li>
  );
};
