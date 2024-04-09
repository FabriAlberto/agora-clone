import React from "react";

const Arrow = ({className}:{className?:string}) => {
  return (
    <svg
      fill="#000000"
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" />
    </svg>
  );
};

export default Arrow;
