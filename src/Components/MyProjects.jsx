import React from "react";
import AddProject from "./AddProject";

function MyProjects() {
  return (
    <div className="card shadow p-3 mt-3">
      <h3>My Projects</h3>
      <div className="ms-auto">
        {" "}
        <AddProject />
      </div>
      <div className="mt-4">
        {/* {collection of user projects} */}
        <div className="border d-flex align-items-center rounder p-2">
            <h5>Project Title</h5>
            <div className="icon ms-auto">
                <button className="btn"> <i class="fa-solid fa-pen-to-square fa-2x"></i> </button>
                <button className="btn"> <i class="fa-brands fa-github fa-2x"></i> </button>
                <button className="btn"> <i class="fa-solid fa-trash fa-2x"></i> </button>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default MyProjects;
