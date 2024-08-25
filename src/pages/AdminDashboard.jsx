import { useState, useEffect } from 'react';
import { getBooks, addBook, updateBook, deleteBook } from '../services/books.service';
import AddBookForm from '../components/AddBookForm';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]); // State to hold the list of books for the session
  const [view, setView] = useState('grid'); // Controls the view (grid, create, or update)
  const [selectedBook, setSelectedBook] = useState(null); // Holds the book data being edited
  const [message, setMessage] = useState(null); // State to handle messages

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const initialBooks = await getBooks(); // Get books from the JSON file
      setBooks(initialBooks); // Set the books in the state
      console.log('Initial books fetched:', initialBooks); // Log the fetched books
    } catch (error) {
      console.error('Error fetching books:', error);
      setMessage({ type: 'error', text: 'Failed to fetch books. Please try again.' });
    }
  };

  
  // Handle adding or updating a book
  const handleBookSubmission = async (bookData) => {
    try {
      let updatedBooks;
      if (view === 'create') {
        updatedBooks = await addBook(bookData, books); // Pass current books array to addBook
        setMessage({ type: 'success', text: 'Book added successfully.' });
      } else if (view === 'update') {
        updatedBooks = await updateBook(selectedBook.id, bookData, books); // Pass current books array to updateBook
        setMessage({ type: 'success', text: 'Book updated successfully.' });
      }
      setBooks(updatedBooks); // Update the state with the new books array
      console.log('Updated books array after submission:', updatedBooks); // Log the updated books array
      setView('grid');
      setSelectedBook(null);
    } catch (error) {
      console.error('Error during book submission:', error);
      setMessage({ type: 'error', text: 'Operation failed. Please try again.' });
    }
  };

  // Handle deleting a book
  const handleDeleteBook = async (bookId) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this book?');
      if (confirmDelete) {
        const updatedBooks = await deleteBook(bookId, books); // Pass current books array to deleteBook
        setBooks(updatedBooks); // Update the state with the new books array
        console.log('Updated books array after deletion:', updatedBooks); // Log the updated books array
        setMessage({ type: 'success', text: 'Book deleted successfully.' });
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      setMessage({ type: 'error', text: 'Failed to delete the book. Please try again.' });
    }
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setView('update');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar" style={{ paddingTop: '70px' }}>
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              {/* Books Section */}
              <li className="nav-item">
                <span
                  className="nav-link active text-white"
                  onClick={() => setView('grid')}
                  style={{ cursor: 'pointer' }}
                >
                  Books
                </span>
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <span
                      className="nav-link text-white"
                      onClick={() => {
                        setView('create');
                        setSelectedBook(null); // Clear selected book if creating a new one
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      Create Book
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className="nav-link text-white"
                      onClick={() => setView('grid')}
                      style={{ cursor: 'pointer' }}
                    >
                      View Books
                    </span>
                  </li>
                </ul>
              </li>

              {/* Events Section */}
              <li className="nav-item">
                <span className="nav-link text-white" style={{ cursor: 'pointer' }}>
                  Events
                </span>
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <span className="nav-link text-white" style={{ cursor: 'pointer' }}>
                      Create Event
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link text-white" style={{ cursor: 'pointer' }}>
                      View Events
                    </span>
                  </li>
                </ul>
              </li>

              {/* Users Section */}
              <li className="nav-item">
                <span className="nav-link text-white" style={{ cursor: 'pointer' }}>
                  Users
                </span>
                <ul className="nav flex-column ms-3">
                  <li className="nav-item">
                    <span className="nav-link text-white" style={{ cursor: 'pointer' }}>
                      Create User
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link text-white" style={{ cursor: 'pointer' }}>
                      View Users
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
        <div className="mt-4"> 
          {message && (
            <div
              className={`alert alert-${message.type === 'success' ? 'success' : 'danger'}`}
              role="alert"
            >
              {message.text}
            </div>
          )}
        </div>

          {view === 'grid' && (
            <>
              <h2 className="mt-2">Book Catalog</h2>
              <div className="row">
                {books.length > 0 ? (
                  books.map((book) => (
                    <div className="col-md-4 mb-4" key={book.id}>
                      <div className="card h-100">
                        {/* Fixed height for the cover image */}
                        <img
                          src={book.coverImage || '/books-covers/Book-Cover.png'} // Default cover if not provided
                          className="card-img-top"
                          alt={book.title}
                          style={{ height: '65%', objectFit: 'center' }}
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{book.title}</h5>
                          <p className="card-text flex-grow-1" style={{ height: '60px', overflow: 'hidden' }}>
                            {book.description}
                          </p>
                          <div className="d-flex justify-content-between mt-auto">
                            <button
                              className="btn btn-warning"
                              onClick={() => handleEditBook(book)}
                              style={{ cursor: 'pointer' }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteBook(book.id)}
                              className="btn btn-danger"
                              style={{ cursor: 'pointer' }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No books available.</p>
                )}
              </div>
            </>
          )}

          {(view === 'create' || view === 'update') && (
            <div className="d-flex justify-content-start ms-5 mt-5">
              <div className="w-75 ms-5"> {/* Adjusted width and margin */}
                <AddBookForm
                  onBookAdded={handleBookSubmission}
                  editingBook={view === 'update' ? selectedBook : null} // Pass selected book data if updating
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
