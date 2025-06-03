import React, { useState } from 'react';
import GuestForm from './components/GuestForm';
import AdminView from './components/AdminView';

function App() {
  const [view, setView] = useState('guest'); // 'guest' or 'admin'

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Hotel Feedback System</h1>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setView('guest')}
          style={{
            marginRight: '10px',
            padding: '10px 20px',
            backgroundColor: view === 'guest' ? '#007bff' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Guest View
        </button>
        <button
          onClick={() => setView('admin')}
          style={{
            padding: '10px 20px',
            backgroundColor: view === 'admin' ? '#007bff' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Admin View
        </button>
      </div>

      {view === 'guest' ? <GuestForm /> : <AdminView />}
    </div>
  );
}

export default App;
