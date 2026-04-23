// import React from 'react';
import { useUsers } from '../../hooks/useUsers';

export default function UserList() {
  const { users, isLoading, error, refetch } = useUsers();

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h2>User Directory</h2>
      <button onClick={refetch}>Refresh Data</button>
      
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}