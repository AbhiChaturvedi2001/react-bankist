import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[70%] bg-gray-300 h-[10vh]">
          <h1>Total sales</h1>
        </div>
        <div className="w-[40%] bg-gray-300 h-[10vh] ml-3">
          <h1>total Expenses</h1>
        </div>
        <div className="w-[40%] bg-gray-300 h-[10vh] ml-3">
          <h1>Total loss</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
