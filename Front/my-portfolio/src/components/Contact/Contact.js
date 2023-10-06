import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation (you can expand upon this)
        const errors = {};
        if (!formData.name) errors.name = "Name is required!";
        if (!formData.email) errors.email = "Email is required!";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid!";
        if (!formData.message) errors.message = "Message is required!";
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Handle form submission, e.g., send to an API or service.
            console.log('Form submitted successfully:', formData);
        }
    };

    return (
        <section className="contact-section">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    {formErrors.name && <span className="error">{formErrors.name}</span>}
                </div>
                <div className="input-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div className="input-group">
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
                    {formErrors.message && <span className="error">{formErrors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
