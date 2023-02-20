import React from "react";
import { ListItem } from "./ListItem";

interface ListProps {
  items: string[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <ListItem key={index} description={item} />
      ))}
    </ul>
  );
};
