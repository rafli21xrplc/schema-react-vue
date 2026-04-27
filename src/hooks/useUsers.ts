import { useState, useEffect, useCallback } from 'react';
import { UserService, type User } from '../services/userService';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await UserService.getUsers();
      setUsers(data);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Gagal mengambil data user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, isLoading, error, refetch: fetchUsers };
}