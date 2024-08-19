import { useState } from 'react';
import pagesBg from '../assets/images/pages-bg.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section
      className="contact-section"
      style={{
        backgroundImage: `url(${pagesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        minHeight: '100vh',
        padding: '60px 20px',
        color: '#ffffff',
      }}
    >
      <div className="container mt-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center mb-4">
          If you have any questions or inquiries, feel free to reach out to us using the form below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                name="name"
                placeholder="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                name="phone"
                placeholder="Phone Number"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                name="subject"
                placeholder="Subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 mb-4">
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
