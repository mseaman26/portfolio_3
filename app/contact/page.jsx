'use client'
import React from "react";
import { useState } from "react";
import { validateEmail } from "@/Lib/helpers";
import emailjs from 'emailjs-com'

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formData.message || !formData.email | !formData.name || !formData.subject){
            alert('Please fill out all fields, thank you')
            return
        }
        if(!validateEmail(formData.email)){
            alert('Email format is invalid')
            return
        }
        const emailMessage = {
            message: formData.message,
            name: formData.name,
            subject: formData.subject,
            email: formData.email

        }
        let form = document.getElementById('contact-form')
        emailjs.sendForm('service_603mx0m', 'template_x04vxpm', form, 'u1xtN4l27HdhYjBd0')
        .then((result) => {
          console.log(result.text);
          }, (error) => {
          console.log(error.text);
          });
      // You can perform your form submission logic here
      console.log('Form submitted with data:', formData);
      // Reset the form fields after submission if needed
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    };
  
    return (
      <form onSubmit={handleSubmit} id="contact-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
  
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
  
        <label>
          Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>
        <br />
  
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Contact;