import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AddBookForm = ({ onBookAdded, editingBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    coverImage: '',
    description: '',
  });

  useEffect(() => {
    if (editingBook) {
      setFormData(editingBook); // Pre-fill the form when editing
    }
  }, [editingBook]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      ...formData,
      coverImage: formData.coverImage || '/books-covers/book-cover.png', // Use default cover if none provided
    };
    onBookAdded(bookData); // Submit the book data

    // Reset form after submission
    setFormData({
      title: '',
      author: '',
      genre: '',
      publicationYear: '',
      coverImage: '',
      description: '',
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        {editingBook ? 'Update Book' : 'Add New Book'}
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre</label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="publicationYear" className="form-label">Publication Year</label>
            <input
              type="number"
              className="form-control"
              id="publicationYear"
              name="publicationYear"
              value={formData.publicationYear}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="coverImage" className="form-label">Cover Image URL</label>
            <input
              type="text"
              className="form-control"
              id="coverImage"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            {editingBook ? 'Update Book' : 'Add Book'}
          </button>
        </form>
      </div>
    </div>
  );
};

AddBookForm.propTypes = {
  onBookAdded: PropTypes.func.isRequired,
  editingBook: PropTypes.object,
};

export default AddBookForm;
