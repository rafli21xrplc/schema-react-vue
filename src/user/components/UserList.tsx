import { useUsers } from '../../hooks/useUsers';

export default function UserList() {
  const { users, isLoading, error, refetch } = useUsers();

  if (isLoading) return <p style={{ color: 'blue' }}>Memuat data user...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Daftar User</h2>
      <button 
        onClick={refetch} 
        style={{ marginBottom: '16px', padding: '8px 16px', cursor: 'pointer' }}
      >
        Refresh Data
      </button>

      {users.length === 0 ? (
        <p>Belum ada data user di database.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {users.map((user) => (
            <li 
              key={user.id} 
              style={{ 
                padding: '12px', 
                borderBottom: '1px solid #444',
                marginBottom: '8px'
              }}
            >
              <h3 style={{ margin: '0 0 4px 0' }}>{user.name}</h3>
              <span style={{ fontSize: '14px', color: 'gray' }}>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}