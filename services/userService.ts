import axiosInstance from '../libs/axios';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const UserService = {
  /**
   * Fetch a list of users
   */
  getUsers: async (): Promise<User[]> => {
    return await axiosInstance.get('/users');
  },

  /**
   * Fetch a single user by ID
   */
  getUserById: async (id: number): Promise<User> => {
    return await axiosInstance.get(`/users/${id}`);
  },

  /**
   * Create a new user
   */
  createUser: async (userData: Omit<User, 'id'>): Promise<User> => {
    return await axiosInstance.post('/users', userData);
  }
};