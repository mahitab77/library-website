import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authenticateUser } from '../services/users.service';
import pagesBg from '../assets/images/pages-bg.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await authenticateUser(username, password);
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/welcome');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <section
      className="login-section"
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
        <h1 className="text-center mb-4">Login</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleLogin} className="bg-dark p-4 rounded">
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p className="text-center mt-3">
              Not registered yet? <Link to="/register">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
