// src/App.tsx
import UserPage from './user/page';
import './App.css';

function App() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Aplikasi Manajemen User</h1>
      <UserPage />
    </main>
  );
}

export default App;