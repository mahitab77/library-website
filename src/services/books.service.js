export const getBooks = async () => {
    try {
      const response = await fetch('/backend/books.json');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      return data.books || []; // Return the books array or an empty array if it doesn't exist
    } catch (error) {
      console.error('Error fetching books:', error);
      return [];
    }
  };
  