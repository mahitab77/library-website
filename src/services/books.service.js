import axios from 'axios';

// Path to the books.json file
const booksFilePath = '/backend/books.json';

// Function to get books (initial fetch from the JSON file)
export const getBooks = async () => {
  try {
    const response = await axios.get(booksFilePath);
    console.log('Fetched books from JSON:', response.data.books);
    return response.data.books; // Assuming the JSON structure is { "books": [...] }
  } catch (error) {
    console.error('Error fetching books:', error);
    return []; // Return an empty array in case of error
  }
};

// Function to add a book
export const addBook = async (newBook, currentBooks) => {
// Determine the next ID based on the highest existing ID in the array
  const maxId = currentBooks.reduce((max, book) => (book.id > max ? book.id : max), 0);
  const newId = maxId + 1; // Increment the highest ID by 1

  const updatedBooks = [...currentBooks, { ...newBook, id: newId }];
  console.log('Book added successfully:', { ...newBook, id: newId });
  
  return updatedBooks;
};


// Function to update a book
export const updateBook = async (bookId, updatedData, currentBooks) => {
  const updatedBooks = currentBooks.map((book) =>
    book.id === bookId ? { ...book, ...updatedData } : book
  );
  console.log('Book updated successfully:', updatedData);
  return updatedBooks;
};

// Function to delete a book
export const deleteBook = async (bookId, currentBooks) => {
  const updatedBooks = currentBooks.filter((book) => book.id !== bookId);
  console.log(`Book with ID ${bookId} deleted successfully.`);
  return updatedBooks;
};
