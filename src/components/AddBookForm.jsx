import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const AddBookForm = ({ onBookAdded, editingBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    coverImage: '',
    description: '',
    availability: 'Available'
  });

  useEffect(() => {
    if (editingBook) {
      setFormData(editingBook);
    } else {
      setFormData({
        title: '',
        author: '',
        genre: '',
        publicationYear: '',
        coverImage: '',
        description: '',
        availability: 'Available'
      });
    }
  }, [editingBook]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookAdded(formData);
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4>{editingBook ? 'Update Book Information' : 'Add a New Book'}</h4>
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="availability" className="form-label">Availability</label>
          <select
            className="form-select"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
          >
            <option value="Available">Available</option>
            <option value="Checked Out">Checked Out</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {editingBook ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

// Prop types validation
AddBookForm.propTypes = {
  onBookAdded: PropTypes.func.isRequired, // Ensure onBookAdded is passed and is a function
  editingBook: PropTypes.object // editingBook is optional and should be an object if provided
};

export default AddBookForm;
