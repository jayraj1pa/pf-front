import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ProjectCard from "../Components/ProjectCard";

function Home() {
  return (
    <>
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#90ee90' }} className='container-fluid rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
          <h1 style={{ fontSize: '80px' }} className='fw-bolder text-light'>
            <i className="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair
          </h1>
          <p>
            Welcome to Project Fair, your one-stop online platform for all your project needs. 
            We offer a wide range of projects that you can search and buy. 
            Our promise is to deliver your chosen projects right to your account. 
            Start exploring now and find the perfect project for you!
          </p>
          <Link to={'/login'} className="btn btn-warning">Start to Explore <i className="fa-solid fa-right-long fa-beat ms-2"></i></Link>
        </Col>
        <Col sm={12} md={6}>
          <img style={{ marginTop: '100px' }} className='w-75' src="https://cdn.dribbble.com/users/1894420/screenshots/14032021/programming_01.gif" alt="Your Image" />
        </Col>
      </Row>
    </div>
    <div className="all-projects mt-5">
      <h1 className="text-center mb-5" >Explore Our Projects</h1>
      <marquee scrollAmount={25}>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>

  

        </Row>

      </marquee>
        <div className="text-center mt-4 mb-3">
          <Link to={'/Projects'}> View More Projects</Link>
        </div>
    </div>
    </>
  );
}

export default Home;
