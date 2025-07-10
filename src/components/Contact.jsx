import React, { useState, useRef } from 'react';
import Image from './common/Image';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('inp_', '')]: value
    }));
    
    // Remove error when typing
    if (errors[id.replace('inp_', '')]) {
      setErrors(prev => ({
        ...prev,
        [id.replace('inp_', '')]: ''
      }));
    }
  };    const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
      // EmailJS configuration
    // Replace these with your actual EmailJS service, template and public key from your EmailJS dashboard
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    
    // Send the email using EmailJS
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          // Form is valid, show success message
          setSuccessMessage('Message sent successfully!');
            // Reset form
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
      }, (error) => {
          console.error('Failed to send email:', error.text);
          setErrors({ submit: 'Failed to send message. Please try again.' });
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-4">Contact Me</h2>
          </div>
        </div>
        
        <div className="contact-wrapper">
          <div className="row g-0 d-flex align-items-stretch">
            <div className="col-12 col-lg-5">
              <div className="contact-info">
                <h3>Let's Connect</h3>
                <p>I'm passionate about creating visually stunning designs and intuitive software interfaces. Whether you need brand identity, marketing materials, UI/UX design, or a complete digital product, I can help bring your vision to life.</p>
                <p className="mb-4">Based in Indonesia, I provide professional graphic and software design services to clients worldwide.</p>
                
                <div className="social-links-container">
                  <a href="https://www.instagram.com/zkaryya.m/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <Image src="/images/logo/instagram-simple.svg" alt="Instagram" />
                    </div>
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-zakariyya-946551284/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <Image src="/images/logo/LinkedIn.svg" alt="LinkedIn" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/muhammadzakariyya13" className="social-link" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <Image src="/images/logo/GitHub.svg" alt="GitHub" />
                    </div>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">              <div className="contact-form-container">                <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                  {successMessage && (
                    <div className="success-message">{successMessage}</div>
                  )}
                  {errors.submit && (
                    <div className="error-message mb-3">{errors.submit}</div>
                  )}                  <div className="mb-4">
                    <label htmlFor="inp_email" className="form-label">Email address</label>
                    <input 
                      type="email" 
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                      id="inp_email"
                      name="email"
                      placeholder="yourname@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="inp_subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`} 
                      id="inp_subject"
                      name="subject" 
                      placeholder="Project Inquiry / Collaboration / etc."
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && <div className="error-message">{errors.subject}</div>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="inp_message" className="form-label">Message</label>
                    <textarea 
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
                      id="inp_message"
                      name="message" 
                      rows="6" 
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="error-message">{errors.message}</div>}
                  </div>                  <div className="mb-4">
                    <label htmlFor="inp_name" className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="inp_name"
                      name="name" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                  </div>
                  <div className="d-flex justify-content-end mt-4">
                    <button type="submit" className="btn button" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send ms-2" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
