import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Auth({ register }) {
  const isRegisterForm = register ? true : false;
  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="w-75 container">
        <Link style={{ textDecoration: "none", color: "blue" }} to={"/"}>
          <i class="fa-solid fa-arrow-left me-1"></i>Back to home
        </Link>
        <div className="card shadow p-5 bg-success">
          <div className="row align-items-center">
            <div className="col lg-6">
              <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" />
            </div>
            <div className="col lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className="fw-bolder text-light mt-2">
                  <i class="fa-brands fa-stack-overflow fa-bounce"></i>project
                  fair
                </h1>
                <h5 className="fw-bolder mt-2 pb-3 text-light">
                  {isRegisterForm
                    ? "Sign up to your Account"
                    : "Sign in to your account"}
                </h5>
                <div className="form text-light w-75">
                  <Form>
                    {isRegisterForm && (
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          placeholder="Enter username"
                        />
                      </Form.Group>
                    )}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="Email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                      />
                    </Form.Group>

                    {isRegisterForm ? (
                      <>
                        <button className="btn btn-light mb-2">Register</button>
                        <p>
                          Already have an account? Click here to{" "}
                          <Link to={"/login"}>Login</Link>
                        </p>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-light mb-2">Login</button>
                        <p>
                          New user? Click here to{" "}
                          <Link to={"/register"}>Register</Link>
                        </p>
                      </>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
