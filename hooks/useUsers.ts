import { useState, useEffect, useCallback } from 'react';
import { UserService, User } from '../services/userService';

// LARAVEL/BE -> ROUTE -> CONTROLLER -> MODEL -> CONTROLLER -> RESPONSE WITH ROUTE
// REACT/FE -> SERVICES -> HOOKS -> COMPONENS [VALIDATE, CONDITION, ETC]

// response schema json from backend
// res.statusCode
// res.message
// res.data

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await UserService.getUsers();
      setUsers(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch users');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, isLoading, error, refetch: fetchUsers };
}