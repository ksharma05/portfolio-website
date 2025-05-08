import React from "react";

const Section = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        {children}
      </div>
    </>
  );
};

export default Section;
