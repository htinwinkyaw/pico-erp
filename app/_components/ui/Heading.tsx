import React from "react";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h1 className="text-xl font-semibold mb-4">{title}</h1>;
};

export default Heading;
