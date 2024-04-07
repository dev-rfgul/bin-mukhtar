import React from "react";

import "../styling/team.css";

const Team = () => {
  return (
    <div>
      <div className="section flex items-center flex-col bg-secondary">
        <h1 className=" row2 text-5xl text-primary font-bold text-center">
          Team of more than 100 talented and qualified is available for your
          support
        </h1>

        <div className="row  ">
          <div className="col">
            <img className="items-center" src="./images/team.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
