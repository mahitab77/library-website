import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Catalog from './pages/Catalog';
import BookDetails from './pages/BookDetails';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Catalog />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
