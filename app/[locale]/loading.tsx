import React from "react";
import Spinner from "@app/_components/spinner";

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-screen min-h-screen w-full items-center justify-center bg-gray-100">
      <Spinner />
    </div>
  );
};

export default Loading;
