import React from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <div>
<Header/>
          <div style={{marginTop:'100px'}} className="projects">
            <h1 className="text-center mb-5">All Projects</h1>
            <div className="d-flex justify-content-center align-items-center w-100">
              <div className='d-flex border w-50 rounded' >
                <input type='text'className='form-control' placeholder='Search Projects by technologies used'/>
                <i style={{marginLeft:'-80px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
              </div>
            </div>
          </div>

          <Row className='mt-4 container-fluid'>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard/>
            </Col>
          </Row>


          

      </div>
  )
}

export default Projects