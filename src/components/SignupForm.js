import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', resume);

    try {
      await axios.post('https://mernbackend-6ets.onrender.com/api/users/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/profile');
    } catch (error) {
      console.error('Error uploading resume:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setResume(e.target.files[0])}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
