import api from '../axios';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const UserService = {
  getUsers: async (): Promise<User[]> => {
    const response = await api.get('/users');
    return response.data.data; 
  },
};