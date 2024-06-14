// 'use client'
// import React from "react";
// import { useState } from "react";
// import { validateEmail } from "@/Lib/helpers";
// import emailjs from 'emailjs-com'
// import styles from './contactForm.module.css'

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
  
//     const handleCustomSubmit = () => {
//       // Your custom function logic here
//       console.log('Custom function called with data:', formData);
//       // Reset the form fields after custom function is called if needed
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       });
//     };
  
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if(!formData.message || !formData.email | !formData.name || !formData.subject){
//             alert('Please fill out all fields, thank you')
//             return
//         }
//         if(!validateEmail(formData.email)){
//             alert('Email format is invalid')
//             return
//         }
//         // const emailMessage = {
//         //     message: message,
//         //     name: name,
//         //     subject: subject,
//         //     email: email

//         // }
//         let form = document.getElementById('contact-form')
//         emailjs.sendForm('service_603mx0m', 'template_x04vxpm', form, 'u1xtN4l27HdhYjBd0')
//         .then((result) => {
//           console.log(result.text);
//           }, (error) => {
//           console.log(error.text);
//           });
//     };
  
//     return (
//       <form className={styles.contactForm} onSubmit={handleSubmit}id="contact-form">
//         <label className={styles.formLabel}>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.formInput} />
//         </label>
//         <br />
  
//         <label className={styles.formLabel}>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.formInput} />
//         </label>
//         <br />
  
//         <label className={styles.formLabel}>
//           Subject:
//           <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={styles.formInput} />
//         </label>
//         <br />
  
//         <label className={styles.formLabel}>
//           Message:
//           <textarea name="message" value={formData.message} onChange={handleChange} className={styles.formTextarea} />
//         </label>
//         <br />
  
//         <button type="submit" className={styles.formButton}>Submit</button>
//       </form>
//     );
//   };
  
//   export default ContactForm;