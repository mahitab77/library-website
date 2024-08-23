import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { registerUser, getUsers } from '../services/users.service';
import pagesBg from '../assets/images/pages-bg.png';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    telephone: '',
    membershipType: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUsers = await getUsers();
    const usernameExists = existingUsers.some((user) => user.username === formData.username);

    if (usernameExists) {
      setError('Username already exists.');
      return;
    }

    const newUser = {
      id: existingUsers.length + 1,
      username: formData.username,
      password: formData.password,
      name: formData.name,
      email: formData.email,
      telephone: formData.telephone,
      role: 'customer', // Default role for registration
      membershipType: formData.membershipType,
    };

    await registerUser(newUser);
    setSuccess('Registration successful! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <section
      className="register-section"
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
        <h1 className="text-center mb-4">Register</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="bg-dark p-4 rounded">
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Membership Type</label>
                <select
                  className="form-control"
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a membership type</option>
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Family">Family</option>
                </select>
              </div>
              {error && <p className="text-danger">{error}</p>}
              {success && <p className="text-success">{success}</p>}
              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
