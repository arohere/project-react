import React, { useState} from "react";
import { Component } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../styles.css';

function HeaderModal(){

    const [show, setShow] =useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        alert("Your response has been submitted");
    }

        return(
            <React.Fragment>
                <Button type="button" variant="danger" id="navbarbutton" className="rounded-pill" size="lg" onClick={handleShow}>  APPLY NOW  </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register Yourself</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="name" placeholder="Name" autoFocus />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type="email" placeholder="Email" autoFocus />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="DOB" autoFocus />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Queries</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>  Close </Button>
                        <Button variant="success" onClick={handleClose}> Save Changes </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );




}

export default HeaderModal;