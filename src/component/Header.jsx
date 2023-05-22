import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#1D263B]  text-white w-[12rem] h-[100%] ">
        <h2 className="ml-4 mt-4 text-2xl tracking-widest uppercase">Tracker</h2>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/brickdata"}>Bricks Data</Link>
          <Link to={"/transaction"}>Add Transaction</Link>
          <Link to={"/employes"}>Employes Data</Link>
          <Link to={"/machine"}>Machine</Link>
          <Link to={"/turi"}>Turi </Link>
          <Link to={"/diesel"}>Diesel </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
