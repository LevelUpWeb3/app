"use client";

import React from "react";

const Wrapper = (props) => {
  const { children } = props;

  return (
    <div className="mx-auto w-full max-w-[153.6rem] px-[10.4rem] max-md:px-[1.6rem]">
      {children}
    </div>
  );
};

export default Wrapper;
