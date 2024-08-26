import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import ProfilePage from './components/ProfilePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignupForm />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </Router>
);

export default App;
