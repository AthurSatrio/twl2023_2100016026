import React from "react";
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen  flex items-center justify-center">
      <div className="text-center w-4/5 ">
        <h1 className="py-3">
          <a className="text-3xl text-blue-900" href="https://www.abiyan.com/">
            www.abiyan.com
          </a>
        </h1>
        <p>
          Hey semuanya abiyan disini.
        </p>
      </div>
    </div>
  );
};

export default Home;