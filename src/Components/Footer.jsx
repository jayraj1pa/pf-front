import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="footer d-flex flex-column justify-content-center align-items-center bg-success text-white py-3"
      style={{ width: "100%" }}
    >
      <h2 className="mb-3">Project Fair</h2>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap px-3">
        <div className="detail-div text-center mb-3 px-2">
          <h4>About Us</h4>
          <ul>
            <li>
              <strong>Who we are:</strong> Project Fair is your one-stop online
              platform for all your project needs.
            </li>
            <li>
              <strong>What we do:</strong> We offer a wide range of projects
              that you can search and buy.
            </li>
            <li>
              <strong>Our promise:</strong> Your chosen projects will be
              delivered right to your account.
            </li>
          </ul>
        </div>
        <div className="links d-flex flex-column mb-3 px-2">
          <h4>Quick Links</h4>
          <Link
            style={{ textDecoration: "none" }}
            to={"/"}
            className="text-white"
          >
            Home
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"/login"}
            className="text-white"
          >
            Login
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"/Register"}
            className="text-white"
          >
            Register
          </Link>
        </div>
        <div className="contact-us mb-3 px-2">
          <h4>Subscribe to Our Newsletter</h4>
          <form className="d-flex mt-2">
            <input
              type="email"
              className="form-control me-2"
              placeholder="Enter your Email"
            />
            <button
              className="btn btn-outline-light"
              style={{ paddingRight: "40px" }}
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="socials d-flex justify-content-center w-100 mt-2 px-2">
          {/* Add your social media links here */}
        </div>
      </div>
      <div className="text-center mt-3 px-3">
        © 2023 Project Fair, Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
