import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminView = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/admin/feedbacks')
      .then(res => setFeedbacks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Admin Feedback View</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((fb) => (
            <tr key={fb.id}>
              <td>{fb.guestName}</td>
              <td>{fb.rating}</td>
              <td>{fb.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminView;
