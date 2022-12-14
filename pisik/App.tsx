import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task'
function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Task />
    </div>
  );
}

export default App;
