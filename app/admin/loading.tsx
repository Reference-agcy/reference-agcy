import React from "react";

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-screen min-h-screen w-full items-center justify-center bg-gray-100">
      <div className="h-14 w-14 animate-spin rounded-full border-[6px] border-gray-200 border-t-primary-500">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
