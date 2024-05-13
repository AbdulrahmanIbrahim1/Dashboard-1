import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2'
import { Dark } from '../../App'


export default function Profile() {
  const [validated, setValidated] = useState(false);
  const { dark } = useContext(Dark);

  function handleSubmit(event) {


    // console.log(data);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      });
      Toast.fire({
      icon: "success",
      background: dark ? "black" : "bg-primary-subtle",
      title: "Account created successfuly",
      timer: 2000,
    });

  }
    setValidated(true);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01" className="col-lg-6">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            This filed is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02" className="col-lg-6">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            This filed is required
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* ============== */}
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Address 1</Form.Label>
          <Form.Control type="text" placeholder="Address 1" required />
          <Form.Control.Feedback type="invalid">
            This filed is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Address 2</Form.Label>
          <Form.Control type="text" placeholder="Address 2" required />
          <Form.Control.Feedback type="invalid">
            This filed is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group md="12" controlId="validationCustom05" className='col-lg-12 my-4' >
          <Form.Label>Role</Form.Label>
          <Form.Select aria-label="Default select example" >
            <option value="User" defaultValue >User</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
