import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('https://mernbackend-6ets.onrender.com/api/users/profile');
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <a href={`https://mernbackend-6ets.onrender.com/api/uploads/${user.resume}`} download>
        Download Resume
      </a>
    </div>
  );
};

export default ProfilePage;
