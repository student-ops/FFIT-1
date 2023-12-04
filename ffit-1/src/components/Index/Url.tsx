import React, { useState } from "react";
const Url: React.FC = () => {
  return (
    <>
      <div className="flex px-3">
        <input type="text" placeholder="URL" className="w-2/3" />
        <button className="ml-1">生成</button>
      </div>
    </>
  );
};

export { Url };
