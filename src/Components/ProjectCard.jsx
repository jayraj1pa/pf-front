import React from 'react'
import {Card,Modal} from 'react-bootstrap';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';




function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className="shadow mb-5 btn" onClick={handleShow}>
    <Card.Img variant="top" src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" />
    <Card.Body>
      <Card.Title>Project Title</Card.Title>
    </Card.Body>
  </Card>

  <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img style={{height:"250px"}} className='img-fluid' src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"/>
                </Col>
                <Col md={6}>
                    <h2>project Title</h2>
                    <p>
                        Project overview : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sed nobis magni culpa eveniet voluptatem sunt beatae illum placeat alias! Dolores repellat odio culpa nisi quidem. Tenetur dolore optio rem!
                    </p>
                    <p>Language used <span className='fw-bolder'>HTML,CSS,React</span></p>
                </Col>
            </Row>
            <div className="mt-3 mb-3">
                <a href="https://github.com/" target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-2x"></i></a>
                <a href='https://github.com/' target='_blank' className='me-5 btn'><i class="fa-solid fa-link fa-2x"></i></a>
            </div>
        </Modal.Body>
        </Modal>

  </>
  )
}

export default ProjectCard