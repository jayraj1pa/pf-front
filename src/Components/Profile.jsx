import React from "react";
import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';


function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" shadow p-5">
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className="btn btn-outline-success">
        <i className="fa-solid fa-chevron-down fa-beat-fade" style={{ color: '#16df63' }}></i>
         </button>
      </div>
      <Collapse in={open}>
      <div className="row justify-content-center mt-3">
        <label className="text-center" htmlFor="profile">
          <input id="profile" style={{ display: "none" }} type="file" />
          <img
            style={{ width: "200px", height: "200px" }}
            className="rounder-circle"
            src="https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo="
            alt="image"
          />
        </label>
        <div className="mt-3">
          <input
            type="text"
            className="form-control shadow-none "
            placeholder="Github"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="form-control shadow-none "
            placeholder="Linkedln"
          />
        </div>
        <div className="mt-3 text-center d-grid">
            <button className="btn btn-success"> 
                Update
            </button>


        </div>
      </div>
      </Collapse>
    </div>
  );
}

export default Profile;
