// app/page.js or any React component file

'use client';

import { Card } from '@/components/pageComponents/Card';
import { useEffect, useState } from 'react';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Set the fetched users data into state
      } catch (err) {
        setError(err.message); // Handle error
      }
    };

    fetchUsers();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Card />
      <p>Note- This is dummy Data to check the database connection</p>
     {JSON.stringify(users)}
     {console.log("hi")}
    </div>
  );
}
