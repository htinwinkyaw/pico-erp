import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-5 mb-5 bg-slate-200 rounded-lg shadow-sm">{children}</div>
  );
};

export default Card;
