import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBooks } from '../services/books.service';
import pagesBg from '../assets/images/pages-bg.png';

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const books = await getBooks(); // Fetch all books
      const selectedBook = books.find((b) => b.id === parseInt(id, 10)); // Find the book with the matching ID
      setBook(selectedBook);
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>; // Show a loading message while fetching data
  }

  return (
    <section
      className="book-details-section"
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
        <h1 className="text-center fw-bold my-4">{book.title}</h1>
        <div className="row">
          <div className="col-md-4">
            <img src={book.coverImage} className="img-fluid" alt={book.title} />
          </div>
          <div className="col-md-8">
            <h2>Author: {book.author}</h2>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Published:</strong> {book.publicationYear}</p>
            <p><strong>Availability:</strong> {book.availability}</p>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
