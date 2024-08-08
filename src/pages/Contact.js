// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 4rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
