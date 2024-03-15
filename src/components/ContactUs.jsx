import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import '../css/ContactUs.css'

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Send the form data to a backend server
    alert("Thank you for your message!");
  };


  return (
    <div className="ContactUs">
      <div className="contact_header_para">
        <h1>Contact Us</h1><br />
        <p>Feel free to contact us by filling these credentials...</p>
      </div>

      <div className="ContactUsFormContainer">
        <Form onSubmit={handleSubmit} className="contact_us_form">
          <Form.Group controlId="formName" className="field_label">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="type_area"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="field_label" >
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="type_area"
            
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="field_label" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Form.Control
              as="textarea"
              rows={10}
              cols={60}
              placeholder="Enter your message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="message_area"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit_button_contact">
            Submit
          </Button>
        </Form>
      </div>
    </div>


  );
};

export default ContactUs;