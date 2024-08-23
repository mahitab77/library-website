import { useState, useEffect } from 'react';
import { getBooks, addBook, updateBook, deleteBook } from '../services/books.service'; // Import service functions
import '../assets/css/admin-dashboard.css';
import AddBookForm from '../components/AddBookForm';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]); // State to hold the list of books
  const [view, setView] = useState('grid'); // Controls the view (grid, create, or update)
  const [selectedBook, setSelectedBook] = useState(null); // Holds the book data being edited

  useEffect(() => {
    fetchBooks(); // Fetch books on component mount
  }, []);

  // Function to fetch books from the backend
  const fetchBooks = async () => {
    const fetchedBooks = await getBooks(); // Fetch books from the service
    setBooks(fetchedBooks); // Update the state with the fetched books
  };

  // Function to handle deleting a book
  const handleDeleteBook = async (bookId) => {
    await deleteBook(bookId); // Call delete function from the service
    fetchBooks(); // Refresh the book list after deletion
  };

  // Function to handle editing/updating a book
  const handleEditBook = (book) => {
    setSelectedBook(book); // Set the book data to be edited
    setView('update'); // Switch the view to the update form
  };

  // Function to handle the book form submission (both add and update)
  const handleBookSubmission = async (bookData) => {
    if (view === 'create') {
      await addBook(bookData); // Call add function if creating a new book
    } else if (view === 'update') {
      await updateBook(selectedBook.id, bookData); // Call update function if editing an existing book
    }
    fetchBooks(); // Refresh the book list after submission
    setView('grid'); // Switch back to the grid view
    setSelectedBook(null); // Clear the selected book after submission
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
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
          {view === 'grid' && (
            <>
              <h2>Book Catalog</h2>
              <div className="row">
                {books.length > 0 ? (
                  books.map((book) => (
                    <div className="col-md-3 mb-4" key={book.id}>
                      <div className="card h-100">
                        {/* Fixed height for the cover image */}
                        <img
                          src={book.coverImage}
                          className="card-img-top"
                          alt={book.title}
                          style={{ height: '65%', objectFit: 'cover' }}
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

          {/* Create and Update Form View */}
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
