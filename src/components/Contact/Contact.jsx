import React, { useState } from 'react'
import './contact.css'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Sending form data to Firebase
        try {
          const response = await fetch('https://fireexp-6380f-default-rtdb.firebaseio.com/fireexp.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Form submitted successfully!');
            setFormData({
              name: '',
              email: '',
              message: '',
            });
          } else {
            throw new Error('Failed to submit form');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to submit form. Please try again.');
        }
      };

    return (
        <div style={{ marginTop: '110px',marginBottom:'40px' }}>
            <div className="contact-container">
                <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Emaill:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '4px',
                            backgroundColor: '#623686',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export default Contact
