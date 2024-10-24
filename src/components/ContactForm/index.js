import React from 'react' 
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css' 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleOnChange = (event) => {
        // console.log(event.target.value)
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
      
        if (!formData.name) {
          toast.error('Name field is required!', {
            position: "top-right",
            className: 'custom-toast', // Use your custom class
          });
        }
      
        if (!formData.email) {
          toast.error('Email field is required!', {
            position: "top-right",
            className: 'custom-toast',
          });
        }
      
        if (!formData.message) {
          toast.error('Message field is required!', {
            position: "top-right",
            className: 'custom-toast',
          });
        }
      
        if (!formData.name || !formData.email || !formData.message) {
          return;
        }
      
        toast.success('Thank you! Your message has been sent successfully.', {
          position: "top-center",
          className: 'custom-toast',
        });
      
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
      

    return (
        <div className='contact-form'>
            <h1>Welcome to CultureLinkr</h1>
            <h2>Contact Us</h2>
            <div class="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name}
                        onChange={handleOnChange}            
                    />

                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    
                />
                    <label for="message">Message</label>
                    <textarea 
                        name="message" 
                        rows="4" 
                        placeholder="Message" 
                        value={formData.message}
                        onChange={handleOnChange}
                                            
                    />

                    <div className='button-container'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )

}
export default ContactForm