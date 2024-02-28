import { IconType } from "react-icons";
import React from "react";

interface IconButtonProps {
  icon: IconType;
  size?: number;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  size,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <Icon size={size ? size : 24} />
    </button>
  );
};

export default IconButton;
