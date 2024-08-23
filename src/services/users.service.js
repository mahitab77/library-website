export const getUsers = async () => {
  try {
    const response = await fetch('/backend/users.json'); // Ensure the path is correct
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const authenticateUser = async (username, password) => {
  const users = await getUsers();
  return users.find(
    (user) => user.username === username && user.password === password
  );
};

export const registerUser = async (newUser) => {
  console.log('User registered:', newUser);
  return newUser;
};

export const getUserById = async (id) => {
  const users = await getUsers();
  return users.find((user) => user.id === parseInt(id, 10));
};
