import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Frontend App</h1>
      <p>Message from API: {message}</p>
    </div>
  );
}

export default App;
