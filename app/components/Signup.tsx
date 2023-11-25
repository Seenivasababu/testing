'use client';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const userId = localStorage.getItem('token');
  if (userId) {
    return (
      <>
        <button className="bg-green-500 px-3 py-1 rounded-md"
        onClick={()=>localStorage.setItem('token',"")}>Signout</button>
      </>
    );
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup', {
        name,
        email,
        password,
      });

      console.log('Signup successful!', response.data.id);
      localStorage.setItem('token', response.data.id);
    } catch (error) {
      console.error('Error during signup:');
      // Handle failure, e.g., display an error message
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form className="bg-slate-200 p-2 space-y-2">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleSignup}
          className="bg-green-500 px-3 py-1 rounded-md"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
