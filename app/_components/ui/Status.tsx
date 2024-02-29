import React from "react";

export enum StatusType {
  success,
  fail,
  warning,
}

interface StatusProps {
  status: string;
  statusType?: StatusType;
}

const Status: React.FC<StatusProps> = ({ status, statusType }) => {
  let statusBackground;

  switch (statusType) {
    case StatusType.success:
      statusBackground = "bg-teal-500";
      break;
    case StatusType.warning:
      statusBackground = "bg-yellow-300";
      break;
    case StatusType.fail:
      statusBackground = "bg-rose-500";
      break;
    default:
      statusBackground = "bg-slate-500";
      break;
  }

  return (
    <div
      className={`
        px-2 py-1 text-white text-xs uppercase w-fit rounded-full
        ${statusBackground}
      `}
    >
      {status}
    </div>
  );
};

export default Status;
