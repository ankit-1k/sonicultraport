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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here, e.g., send data to backend

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div style={{ marginTop: '70px' }}>
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
                        <label htmlFor="email">Email</label>
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
