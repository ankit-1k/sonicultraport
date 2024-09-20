import React, { useState } from 'react';
import './contact.css';
import axios from 'axios'; 
import Loader from '../../Assets/loader/Loader';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isLoading, setLoading] = useState(false); // State for loading indicator

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when form is submitted
  
        console.log('Form Data:', formData);
  
        try {
            await axios.post('https://portbackend.vercel.app/api/contact', formData);
            // alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setLoading(false); // Reset loading state after API call completes
        }
    };

    return (
        <div style={{ marginTop: '110px', marginBottom: '40px' }}>
            {isLoading && (
                <div className="loading-overlay">
                    <p>
                        <Loader />
                    </p>
                </div>
            )}
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
                        <label htmlFor="email">Email:</label>
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
                        disabled={isLoading}
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
    );
};

export default Contact;
