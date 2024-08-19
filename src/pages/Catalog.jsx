import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../services/books.service';
import pagesBg from '../assets/images/pages-bg.png';

const Catalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  return (
    <section
      className="catalogue_section"
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
      <div className="container">
        <h1 className="text-center fw-bold my-5">Our Book Catalogue</h1>
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card bg-dark text-white h-100">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', overflow: 'hidden' }}>
                  <img
                    src={book.coverImage}
                    className="img-fluid mt-2"
                    alt={book.title}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <div
                    className="flex-grow-1 overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3, /* Number of lines to show */
                      WebkitBoxOrient: 'vertical',
                      height: '80px',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'normal',
                    }}
                  >
                    <p className="card-text">{book.description}</p>
                  </div>
                  <Link to={`/books/${book.id}`} className="btn btn-primary mt-3 d-block">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
