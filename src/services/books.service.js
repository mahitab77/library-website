import axios from 'axios';

// Define the path to your backend JSON file
const backendUrl = '/backend/books.json';

// Function to get all books
export const getBooks = async () => {
  try {
    const response = await axios.get(backendUrl);
    return response.data.books; // Assuming the JSON structure is { "books": [...] }
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

// Function to get a book by ID
export const getBookById = async (id) => {
  try {
    const response = await axios.get(backendUrl);
    const books = response.data.books;
    return books.find((book) => book.id === id);
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    return null;
  }
};

// Function to add a new book
export const addBook = async (newBook) => {
  try {
    const response = await axios.get(backendUrl);
    const books = response.data.books;

    // Generate a new ID for the book
    const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    const bookToAdd = { ...newBook, id: newId };
    books.push(bookToAdd);

    // Save the updated books list (this assumes you have an API to save updates)
    await axios.post(backendUrl, { books });

    return bookToAdd;
  } catch (error) {
    console.error('Error adding new book:', error);
    return null;
  }
};

// Function to update an existing book
export const updateBook = async (id, updatedBook) => {
  try {
    const response = await axios.get(backendUrl);
    let books = response.data.books;

    books = books.map((book) =>
      book.id === id ? { ...book, ...updatedBook } : book
    );

    // Save the updated books list
    await axios.post(backendUrl, { books });

    return getBookById(id);
  } catch (error) {
    console.error('Error updating book:', error);
    return null;
  }
};

// Function to delete a book
export const deleteBook = async (id) => {
  try {
    const response = await axios.get(backendUrl);
    let books = response.data.books;

    books = books.filter((book) => book.id !== id);

    // Save the updated books list
    await axios.post(backendUrl, { books });

    return books;
  } catch (error) {
    console.error('Error deleting book:', error);
    return [];
  }
};
